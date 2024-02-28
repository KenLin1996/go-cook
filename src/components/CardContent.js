import React from "react";
import { Link } from "react-router-dom";

const CardContent = ({ recipe }) => {
  return (
    <Link to={recipe.recipeLink} className="card-content-link">
      <picture className="card-content-image">
        <img src={recipe.image} alt={recipe.name} />
      </picture>
      <div className="card-content-info">
        <h3 className="card-content-name">{recipe.name}</h3>
        <span className="card-content-author">{recipe.author}</span>
      </div>
    </Link>
  );
};

export default CardContent;
