import React from "react";
import { Link } from "react-router-dom";
import magnifier from "/Users/ken/Desktop/go-cook-project/src/picture/search-icon.png";
import close from "/Users/ken/Desktop/go-cook-project/src/picture/icons8-close-16.png";

const IngredientFilter = ({ prop }) => {
  return (
    <div className="ingredient-filter">
      <label for="search_included_ingredients">{prop}</label>
      <div>
        <div className="ingredient-search">
          <img src={magnifier} className="search-icon" />
          <input
            type="text"
            placeholder="請輸入食材..."
            className="ingredient-input"
          />
        </div>
      </div>
      <div className="chips">
        <span className="chip">
          肉
          <Link width="30px">
            <img src={close} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default IngredientFilter;
