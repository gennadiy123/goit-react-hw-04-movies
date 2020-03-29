import React, { Component } from "react";
import Services from "../Services";

export default class MoviesPage extends Component {
  state = {
    query: "",
    movies: []
  };

  handleSubmit = e => {
    Services.searchMovie(this.state.query).then(({ data: { results } }) =>
      this.setState({ movies: results })
    );
    e.preventDefault();
  };

  handleChange = e => {
    this.setState({ query: e.target.value });
  };

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.query}
            onChange={this.handleChange}
          />
          <input type="submit" value="Search"/>
        </form>
        <ul>
          {this.state.movies.map((movie, key) => {
            const path = `https://image.tmdb.org/t/p/original${movie.poster_path}`;
            return (
              <li key={key}>
                <h2>{movie.title}</h2>
                <img src={path} alt={movie.title} width={300} />
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}
