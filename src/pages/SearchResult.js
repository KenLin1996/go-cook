import React, { useState } from "react";
import { Link } from "react-router-dom";
import IngredientFilter from "../components/IngredientFilter";
import noodle from "../picture/noodle.jpg";
import RelatedSearches from "../components/RelatedSearches";
import clock from "../picture/icons8-time.png";
import member from "../picture/icons8-member.png";
import AuthorName from "../components/AuthorName";
import TimeAndMember from "../components/TimeAndMember";
import recipes from "../recipes";

const SearchResult = () => {
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);

  function ResultLi({
    picture,
    title,
    ingredients,
    time,
    servings,
    author,
    headshot,
  }) {
    return (
      <>
        <Link to="/RecipeDetail" className="result-li">
          <div className="picture-wrapper">
            <img src={picture} alt="食物圖片" />
          </div>
          <div className="li-describe">
            <div className="describe-title">
              <h2>{title}</h2>
            </div>
            <div className="ingredients-wrappeer">
              <div className="ingredients-list">
                <div>
                  {ingredients.map((ingredient, index) => (
                    <span key={index} style={{ marginRight: "3px" }}>
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <TimeAndMember
              clock={clock}
              time={time}
              member={member}
              servings={servings}
            />

            <AuthorName headshot={headshot} author={author} />
          </div>
        </Link>
      </>
    );
  }

  const handleRecipeFilter = (filteredResults) => {
    setFilteredRecipes(filteredResults);
  };

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
                {filteredRecipes.map((recipe, index) => (
                  <ResultLi
                    key={index}
                    picture={recipe.picture}
                    title={recipe.title}
                    ingredients={recipe.ingredients}
                    time={recipe.time}
                    servings={recipe.servings}
                    author={recipe.author}
                    headshot={recipe.headshot}
                  />
                ))}
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
              <IngredientFilter
                prop={"顯示食譜中包含："}
                mode="include"
                recipesData={recipes}
                onFilter={handleRecipeFilter}
              />
              <IngredientFilter
                prop={"顯示食譜中不包含："}
                mode="exclude"
                recipesData={recipes}
                onFilter={handleRecipeFilter}
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResult;
