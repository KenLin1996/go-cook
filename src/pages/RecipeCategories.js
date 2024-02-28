// RecipeCategories.js
import React from "react";
import categories from "../categories";
import SubCategories from "../components/SubCategories";

const RecipeCategories = () => {
  return (
    <div className="content-wrapper">
      <div className="categories main">
        {/* 所有分類 */}
        <ul className="categories-list">
          <h1 style={{ marginLeft: "12px", color: "red", fontSize: "25px" }}>
            可點選高麗菜及雞胸
          </h1>
          {categories.map((category) => (
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
