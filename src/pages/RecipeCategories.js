// RecipeCategories.js
import React from "react";
import categories from "../categories";
import SubCategories from "../components/SubCategories";

const RecipeCategories = () => {
  return (
    <div className="content-wrapper">
      <div className="categories main">
        {/* <h2>所有分類</h2> */}
        <ul className="categories-list">
          {categories.map((category) => (
            // <li key={category.id} className="categories-all-parents">
            <li key={category.id} className="categories-all-parents">
              <h3>{category.name}</h3>
              <SubCategories subcategories={category.subcategories} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeCategories;
