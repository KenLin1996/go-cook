import React from "react";
import { Link } from "react-router-dom";
import SearchWidget from "./SearchWidget";

// import magnifier from "/Users/ken/Desktop/go-cook-project/src/picture/search-icon.png";

const Search = () => {
  return (
    <div className="Search">
      <SearchWidget />
      <div className="popular-search-terms"> 熱門搜尋關鍵字 </div>
      <div className="popular-recipes" style={{ marginBottom: "16px" }}>
        <ul className="recipe-list">
          <li className="recipe-item">
            <Link to={"http://localhost:3000/detail/111"}>清炒高麗菜</Link>
          </li>
          <li className="recipe-item">
            <Link to={"http://localhost:3000/detail/222"}>高麗菜捲</Link>
          </li>
          <li className="recipe-item">
            <Link to={"http://localhost:3000/detail/333"}>醜豆炒雞胸肉</Link>
          </li>
          <li className="recipe-item">
            <Link to={"http://localhost:3000/detail/444"}>蒜味雞胸肉</Link>
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
          {/* <div className="guideLine"> */}
            <Link to="/categories" className="recipe-categories-link">
              所有食譜分類
            </Link>
          {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
