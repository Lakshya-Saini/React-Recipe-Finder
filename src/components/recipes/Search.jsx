import React, { Component } from "react";
import axios from "axios";
import Recipes from "./Recipes";
import Spinner from "../layouts/Spinner";

class Search extends Component {
  state = {
    recipes: [],
    recipeSearch: "",
    loader: ""
  };

  searchRecipe = event => {
    const recipeSearch = event.currentTarget.value;
    this.setState({ recipeSearch });
  };

  handleSubmit = event => {
    event.preventDefault();

    // Init Loader
    this.setState({ loader: "loading" });

    // Get recipes from API
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/https://api.edamam.com/search?q=${this.state.recipeSearch}&from=0&to=12&app_id=06c860b8&app_key=790a6ebec5e5553caaf00faaac295c2a`
      )
      .then(res => {
        this.setState({ recipes: res.data.hits, recipeSearch: "", loader: "" });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <React.Fragment>
        <h3 className="text-center mb-3 display-4">Search a Recipe</h3>
        <p className="text-center text-secondary mb-4 lead">
          Get your favourite food recipe from 1000+ recipes with just a click
        </p>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="recipeSearch"
              id="recipeSearch"
              className="form-control shadow-none"
              placeholder="Search a recipe..."
              value={this.state.recipeSearch}
              onChange={this.searchRecipe}
            />
          </div>
          <div className="form-group">
            <button
              type="submit"
              className="btn btn-primary btn-block shadow-none"
            >
              Get Recipe
            </button>
          </div>
        </form>

        {this.state.loader === "loading" && <Spinner />}

        {this.state.recipes.length !== 0 && (
          <div className="row">
            <div className="col-md-12 px-0">
              <p className="lead text-center mb-4">Search Results</p>
            </div>
            <div className="row">
              {this.state.recipes.map(recipe => (
                <Recipes key={recipe.recipe.label} recipe={recipe} />
              ))}
            </div>
          </div>
        )}
      </React.Fragment>
    );
  }
}

export default Search;
