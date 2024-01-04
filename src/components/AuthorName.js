import React from "react";

const AuthorName = ({ headshot, author, headshotWidth, headshotHeight }) => {
  const headshotStyle = {
    display: "flex",
    border: "0px solid",
    borderRadius: "50%",
    overflow: "hidden",
    width: headshotWidth || "40px",
    height: headshotHeight || "40px",
  };

  const imgStyle = {
    width: "100%",
    height: " 100%",
    objectFit: "cover",
  };
  return (
    <div
      className="author-wrapper"
      style={{ display: "flex", columnGap: "8px", alignItems: "center" }}
    >
      <span className="author-headshot" style={headshotStyle}>
        <img src={headshot} alt="作者頭貼" style={imgStyle} />
      </span>
      <span className="author-name">
        <span>{author}</span>
      </span>
    </div>
  );
};

export default AuthorName;
