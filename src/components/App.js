import React, { lazy, Suspense } from "react";
import { NavLink, Switch, Route, Redirect } from "react-router-dom";
import "./App.css";

const activeStyle = {
  color: "palevioletred"
};

const HomePage = lazy(() => import("./pages/HomePage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage"));

const App = () => (
  <>
    <div className="links">
      <NavLink exact to="/" activeStyle={activeStyle}>
        Home
      </NavLink>
      <span> </span>
      <NavLink to="/movies" activeStyle={activeStyle}>
        Movies
      </NavLink>
    </div>
    <Switch>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={HomePage} />
        <Route path="/movies/:movieId" component={MovieDetailsPage} />
        <Route exact path="/movies" component={MoviesPage} />
      </Suspense>
      <Redirect to="/" />
    </Switch>
  </>
);

export default App;
