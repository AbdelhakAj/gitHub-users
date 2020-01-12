import React, { useState, useEffect } from "react";

import SearchBar from "./components/searchBar";
import User from "./components/user";
import Repos from "./components/repos";

import "./App.scss";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [isReposView, setIsReposView] = useState(false);
  const [userList, setUserList] = useState(null);
  const [reposList, setReposList] = useState([]);
  const [error, setError] = useState(null);

  const getUser = username => {
    setIsLoading(true);
    fetch(`https://api.github.com/search/users?q=${username}`)
      .then(response => (response.ok ? response.json() : setError(true)))
      .then(data => {
        if (data) {
          setUserList(data.items);
        }
        setIsLoading(false);
      });
  };

  const getReposByUser = username => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${username}/repos`)
      .then(response => (response.ok ? response.json() : setError(true)))
      .then(data => {
        if (data) {
          setReposList(data);
        }
        setIsLoading(false);
      });
  };

  const renderUsers = () => {
    if (userList) {
      if (userList.length === 0) {
        return <p>this user does not exist</p>;
      } else {
        return userList.map(({ id, login, avatar_url }, index) => (
          <User
            key={index}
            data={{ id, name: login, imgURL: avatar_url }}
            onViewRepos={username => {
              getReposByUser(username);
              setIsReposView(true);
            }}
          />
        ));
      }
    }
  };

  const renderRepos = () => {
    if (reposList) {
      return reposList.map(({ id, name, full_name }, index) => (
        <Repos key={index} data={{ id, name, fullName: full_name }} />
      ));
    }
  };

  const renderContent = () => {
    if (isLoading) {
      return <p>loading ...</p>;
    } else if (error) {
      return <p>oops something went wrong</p>;
    } else {
      if (isReposView) {
        return renderRepos();
      } else {
        return renderUsers();
      }
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>github users</h1>
      </header>

      <SearchBar
        onSearch={username => {
          getUser(username);
          setIsReposView(false);
          setError(false);
        }}
      />

      <div className="container">
        {isReposView && (
          <div className="back-wrapper">
            <button className="back-btn" onClick={() => setIsReposView(false)}>
              &#60; go back
            </button>
          </div>
        )}
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
