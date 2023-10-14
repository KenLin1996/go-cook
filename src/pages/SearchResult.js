import React from "react";
import { Link } from "react-router-dom";
import IngredientFilter from "../components/IngredientFilter";
import noodle from "../picture/noodle.jpg";
import RelatedSearches from "../components/RelatedSearches";
import time from "../picture/icons8-time.png";
import member from "../picture/icons8-member.png";
import teacher from "../picture/五條悟老師.jpeg";

const SearchResult = () => {
  function ResultLi() {
    return (
      <li className="result-li">
        <div className="picture-wrapper">
          <img src={noodle} />
        </div>
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
          <div className="time-member">
            <ul>
              <li>
                <img src={time} />
                <span>30分鐘</span>
              </li>
              <li>
                <img src={member} />
                <span>3人份</span>
              </li>
            </ul>
          </div>
          <div className="author-wrapper">
            <span className="author-headshot">
              <img src={teacher} />
            </span>
            <span className="author-name">
              <span>五條悟</span>
            </span>
          </div>
        </div>
        {/* <div className="picture-wrapper">
          <img src={noodle} />
        </div> */}
      </li>
    );
  }

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
            <div className="search-result-wrapper">
              <ul className="result-ul">
                <ResultLi />
                <ResultLi />
                <ResultLi />
              </ul>
            </div>
          </div>
          <div className="content-right">
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
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
