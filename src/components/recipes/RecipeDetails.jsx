import React from "react";

const RecipeDetail = props => {
  const { recipe } = props.location;
  console.log(recipe);
  return (
    <React.Fragment>
      <div className="container">
        <div className="row mx-0">
          <div className="col-md-4 pl-0">
            <img
              src={recipe.recipe.image}
              alt="Image"
              syle={{
                width: "100%",
                marginBottom: "20px",
                borderRadius: "15px"
              }}
            />
            <h3
              id="recipe-details-label"
              className="text-left text-secondary mb-4 mt-3"
            >
              {recipe.recipe.label}
            </h3>
            <span className="badge badge-primary px-3 py-2">
              {recipe.recipe.dietLabels[0]}
            </span>
            <p className="lead text-left mt-4">{recipe.recipe.source}</p>
          </div>
          <div className="col-md-8 pr-0">
            <h4
              id="ingredients-label"
              className="text-left text-secondary mb-4"
            >
              Ingredients
            </h4>
            {recipe.recipe.ingredients.map(ing => (
              <li id="ingredients" key={ing.text}>
                {ing.text}
              </li>
            ))}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default RecipeDetail;
