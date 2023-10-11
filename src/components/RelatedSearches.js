import React from "react";
import { Link } from "react-router-dom";

const RelatedSearches = () => {
  return (
    <div className="related-searches">
      <div className="related-searches-title">相關搜尋</div>
      <div className="related-searches-link">
        <Link>高麗菜煎餅</Link>
        <Link>高麗菜飯</Link>
        <Link>高麗菜捲</Link>
        <Link>豆腐乳高麗菜</Link>
        <Link>高麗菜湯</Link>
      </div>
    </div>
  );
};

export default RelatedSearches;
