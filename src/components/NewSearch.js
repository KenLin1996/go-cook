import React from "react";
import { Link } from "react-router-dom";
import SearchWidget from "./SearchWidget";

// import magnifier from "/Users/ken/Desktop/go-cook-project/src/picture/search-icon.png";

const NewSearch = () => {
  return (
    <div className="NewSearch">
      <SearchWidget />
      <div className="popular-search-terms"> 熱門搜尋關鍵字 </div>
      <div className="popular-recipes" style={{ marginBottom: "16px" }}>
        <ul className="recipe-list">
          <li className="recipe-item">
            <Link>麻婆豆腐</Link>
          </li>
          <li className="recipe-item">
            <Link>剁椒魚頭</Link>
          </li>
          <li className="recipe-item">
            <Link>佛跳牆</Link>
          </li>
          <li className="recipe-item">
            <Link>糖醋桂魚</Link>
          </li>
          <li className="recipe-item">
            <Link>東坡肉</Link>
          </li>
          <li className="recipe-item">
            <Link>蔥燒遼參</Link>
          </li>
          <li className="recipe-item">
            <Link>清蒸海上鮮</Link>
          </li>
          <li className="recipe-item">
            <Link>臭鱖魚</Link>
          </li>
        </ul>
        <div className="recipe-categories">
          <Link to="/categories" className="recipe-categories-link">
            所有食譜分類
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewSearch;
