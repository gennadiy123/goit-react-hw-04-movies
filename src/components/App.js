import React from "react";
import HomePage from "./pages/HomePage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

const activeStyle = {
  color: "palevioletred"
};

const App = () => (
  <>
    <NavLink exact to="/" activeStyle={activeStyle}>
      Home
    </NavLink>
    <span> </span>
    <NavLink to="/movies" activeStyle={activeStyle}>
      Movies
    </NavLink>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path='/movies/:movieId' component={MovieDetailsPage} />
      <Route exact path="/movies" component={MovieDetailsPage} />
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
