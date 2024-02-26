import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import IngredientFilter from "../components/IngredientFilter";
import RelatedSearches from "../components/RelatedSearches";
import clock from "../picture/icons8-time.png";
import AuthorName from "../components/AuthorName";
import TimeAndMember from "../components/TimeAndMember";
import recipes from "../recipes";
import categories from "../categories";

const SearchResult = () => {
  const { id } = useParams();

  const selectedRecipe = recipes.filter((recipe) => recipe.category === id);

  //
  const categoryName = categories.reduce((acc, category) => {
    const subcategory = category.subcategories.find(
      (sub) => sub.id.toString() === id
    );
    if (subcategory) {
      return subcategory.name;
    }
    return acc;
  }, "");

  const numberOfRecipes = selectedRecipe.length;
  const [filteredRecipes, setFilteredRecipes] = useState(selectedRecipe);

  function ResultLi({ recipe }) {
    return (
      <>
        {/* <Link to="/recipe-detail" className="result-li"> */}
        <Link to={`/detail/${recipe.id}`} className="result-li">
          <div className="picture-wrapper">
            <img src={recipe.picture} alt="食物圖片" />
          </div>
          <div className="li-describe">
            <div className="describe-title">
              <h2>{recipe.title}</h2>
            </div>
            <div className="ingredients-wrappeer">
              <div className="ingredients-list">
                <div>
                  {recipe.ingredients.map((ingredient, index) => (
                    <span key={index} style={{ marginRight: "3px" }}>
                      {ingredient}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <TimeAndMember
              clock={clock}
              time={recipe.time}
              member={recipe.member}
              servings={recipe.servings}
            />

            <AuthorName
              headshot={recipe.headshot}
              author={recipe.author}
              headshotWidth="24px"
              headshotHeight="24px"
            />
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
              <span>{numberOfRecipes}</span> 種 <span>{categoryName}</span>{" "}
              的家常做法食譜
            </h1>
          </div>
        </header>
        <div className="content">
          <div className="content-left">
            <div className="search-result-wrapper">
              <ul className="result-ul">
                {filteredRecipes.map((recipe) => (
                  <ResultLi key={recipe.id} recipe={recipe} />
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
