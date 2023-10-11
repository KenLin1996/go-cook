import React from "react";
import CardHeader from "./CardHeader";
import CardContent from "./CardContent";

const RecipeCard = ({ recipes, title }) => {
  return (
    <section className="recipe-card">
      <CardHeader title={title} />
      <div className="recipe-card-content">
        {recipes.map((recipe, index) => (
          <CardContent key={index} recipe={recipe} />
        ))}
      </div>
    </section>
  );
};

export default RecipeCard;
