// SubCategories.js
import React from "react";
import { Link } from "react-router-dom";

const SubCategories = ({ subcategories }) => {
  return (
    <ul className="categories-all-children">
      {subcategories.map((subcategory) => (
        <li key={subcategory.id} className="categories-all-child">
          <Link
            to={`/categories/${subcategory.id}`}
            className="categories-all-child-link"
          >
            <h4>{subcategory.name}</h4>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SubCategories;
