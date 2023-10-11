import React from "react";
import { Link } from "react-router-dom";

const CardHeader = ({ title }) => {
  return (
    <header className="recipe-card-Header">
      <h2 className="card-header-title">{title}</h2>
      <Link className="card-Header-link">更多 </Link>
    </header>
  );
};

export default CardHeader;
