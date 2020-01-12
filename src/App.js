import React from "react";

import User from "./components/user";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">app</header>
      <User data={{ name: "Carl", id: "1110" }} />
    </div>
  );
}

export default App;
