import React from "react";

const WordBox = ({ children }) => {
  const boxStyle = {
    marginBottom: "16px",
    padding: "16px",
    backgroundColor: "white",
    borderRadius: "6px",
    boxShadow: "0 1px 5px #0000001a",
  };
  return <div style={boxStyle}>{children}</div>;
};

export default WordBox;
