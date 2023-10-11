import React from "react";
import magnifier from "/Users/ken/Desktop/go-cook-project/src/picture/search-icon.png";

const SearchWidget = () => {
  return (
    <form id="search-widget">
      <div className="search-box">
        <button type="submit" className="search-button">
          <img src={magnifier} className="search-icon" />
        </button>
        <input
          type="text"
          className="search-input"
          placeholder="搜尋食譜、食材或朋友"
        />
        <input type="submit" className="search-submit" value="搜尋" />
      </div>
    </form>
  );
};

export default SearchWidget;
