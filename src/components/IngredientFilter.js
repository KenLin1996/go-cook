import React, { useState } from "react";
import { Link } from "react-router-dom";
import magnifier from "/Users/ken/Desktop/go-cook-project/src/picture/search-icon.png";
import close from "/Users/ken/Desktop/go-cook-project/src/picture/icons8-close-16.png";

const IngredientFilter = ({ prop, mode, onFilter, recipesData }) => {
  const [inputValue, setInputValue] = useState("");
  const [divContents, setDivContents] = useState([]);
  const [composing, setComposing] = useState(false);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleCompositionStart = () => {
    setComposing(true);
  };

  const handleCompositionEnd = () => {
    setComposing(false);
  };

  const handleEnterKey = (event) => {
    if (!composing && event.key === "Enter" && inputValue.trim()) {
      setDivContents([...divContents, inputValue]);
      setInputValue("");
      handleFilter();
    }
  };

  const handleClearDiv = (index) => {
    setDivContents(divContents.filter((_, i) => i !== index));
    handleFilter();
  };

  const handleFilter = () => {
    if (mode === "include") {
      const filteredResults = recipesData.filter((recipe) => {
        return recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(inputValue.toLowerCase())
        );
      });
      onFilter(filteredResults);
    } else if (mode === "exclude") {
      const filteredResults = recipesData.filter((recipe) => {
        return !recipe.ingredients.some((ingredient) =>
          ingredient.toLowerCase().includes(inputValue.toLowerCase())
        );
      });
      onFilter(filteredResults);
    }
  };

  return (
    <div className={"ingredient-filter"}>
      <label htmlFor="search_included_ingredients">{prop}</label>
      <div>
        <div className="ingredient-search">
          <img src={magnifier} className="search-icon" alt="搜尋圖標" />
          <input
            className="ingredient-input"
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            onCompositionStart={handleCompositionStart}
            onCompositionEnd={handleCompositionEnd}
            onKeyDown={handleEnterKey}
            placeholder="請輸入食材..."
          />
        </div>
      </div>
      <div className="chips">
        {divContents.map((content, index) => (
          <span className="chip">
            {content}
            <Link width="30px" onClick={() => handleClearDiv(index)}>
              <img src={close} alt="關閉圖標" />
            </Link>
          </span>
        ))}
      </div>
    </div>
  );
};

export default IngredientFilter;
