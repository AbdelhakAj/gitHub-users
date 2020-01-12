import React from "react";

import "./repos.scss";

const Repos = ({ data }) => {
  const { id, name, fullName } = data;
  return (
    <div className="repos">
      <h2 className="repos-name">{name}</h2>
      <span className="repos-fullname">Full Name: {fullName}</span>
      <span className="repos-id">id :{id}</span>
    </div>
  );
};
export default Repos;
