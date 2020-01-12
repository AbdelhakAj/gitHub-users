import React from "react";

import "./user.scss";

const User = ({ data }) => {
  const { imgURL, id, name } = data;
  return (
    <div className="user">
      <div className="user-info">
        <img
          className="user-img"
          src={
            imgURL ||
            "https://www.bsn.eu/wp-content/uploads/2016/12/user-icon-image-placeholder-300-grey.jpg"
          }
          alt="profile"
          width="50"
        />
        <div className="user-details">
          <h2 className="user-name">{name}</h2>
          <span className="user-id">{id}</span>
        </div>
      </div>
      <button className="user-repos-btn"> view repos </button>
    </div>
  );
};
export default User;
