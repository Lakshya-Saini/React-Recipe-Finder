import React from "react";
import { Link } from "react-router-dom";

const Recipes = props => {
  const { recipe } = props;

  return (
    <React.Fragment>
      {recipe.recipe.totalTime > 0 && (
        <div className="col-md-4 mb-4">
          <div className="card text-center">
            <img
              src={recipe.recipe.image}
              alt="Image"
              className="text-center"
              style={{
                borderRadius: "50%",
                width: "70%",
                margin: "20px auto 0px auto"
              }}
            />
            <div className="card-body">
              <h5 className="card-title mb-3" style={{ fontWeight: "400" }}>
                {recipe.recipe.label}
              </h5>
              <div className="mb-3">{recipe.recipe.totalTime} min</div>
              <Link
                to={{
                  pathname: `/recipe/${recipe.recipe.label}`,
                  recipe: recipe
                }}
                className="btn btn-primary btn-block shadow-none"
              >
                <i className="fas fa-chevron-right"></i> See Recipe
              </Link>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Recipes;
