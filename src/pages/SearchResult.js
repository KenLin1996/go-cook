import React from "react";
import { Link } from "react-router-dom";
import IngredientFilter from "../components/IngredientFilter";
import noodle from "../picture/noodle.jpg";
import RelatedSearches from "../components/RelatedSearches";

const SearchResult = () => {
  return (
    <div className="content-wrapper">
      <div className="searchResultPage main">
        <header>
          <div className="">
            <h1>
              <span>(94034)</span> 種 <span>雞胸肉</span> 的家常做法食譜
            </h1>
          </div>
        </header>
        <div className="content">
          <div className="content-left">
            <RelatedSearches />
            <form className="search-result-form">
              <div className="search-container">
                <div className="filter-container">
                  <div className="filter-label">篩選</div>
                  <Link className="reset-button">重設</Link>
                </div>
              </div>
              <IngredientFilter prop={"顯示食譜中包含："} />
              <IngredientFilter prop={"顯示食譜中不包含："} />
            </form>
          </div>
          <div className="content-right">
            <div className="search-result-wrapper">
              <ul className="result-ul">
                <li className="result-li">
                  <div className="li-describe">
                    <div className="describe-title">
                      <h2>
                        <Link>好吃的高麗菜飯</Link>
                      </h2>
                    </div>
                    <div className="ingredients-wrappeer">
                      <div className="ingredients-list">
                        <div>
                          <span>高麗菜</span>
                        </div>
                      </div>
                    </div>
                    <div className="time-member">耗時或人數</div>
                    <div className="author-wrapper">
                      <span className="author-headshot">作者照片</span>
                      <span className="author-name">作者名字</span>
                    </div>
                  </div>
                  <div className="picture-wrapper">
                    <img src={noodle} />
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
