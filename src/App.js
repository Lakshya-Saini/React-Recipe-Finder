import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/layouts/Navbar";
import Index from "./components/layouts/Index";
import RecipeDetail from "./components/recipes/RecipeDetails";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/recipe/:name" component={RecipeDetail} />
          </Switch>
        </div>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
