import React, { Component } from "react";
import { Link } from "react-router-dom";
import Services from "../Services";
import queryString from "query-string";

export default class MoviesPage extends Component {
  state = {
    query: "",
    movies: [],
    params: ""
  };

componentDidMount() {
  const query = queryString.parse(this.props.location.search).query
  console.log(query)
  if(query !== "") {
    Services.searchMovie(query).then(({ data: { results } }) =>
      this.setState({ movies: results })
    )}

}


  handleSubmit = e => {
    e.preventDefault();
    Services.searchMovie(this.state.query).then(({ data: { results } }) =>
      this.setState({ movies: results, params: {
        pathname: "/movies", search: `query=${this.state.query}`
      } }))
      
    
    this.props.history.push({
      pathname: "/movies", search: `query=${this.state.query}`
    })
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
          <input type="submit" value="Search" />
        </form>
        <ul>
          {this.state.movies.map(movie => {
            return (
              <li key={movie.id}>
                <Link
                  to={{
                    pathname: `/movies/${movie.id}`,
                    state: { params: {...this.state.params}, id: movie.id }
                  }}
                >
                  <h2 className="movieTitle">{movie.title}</h2>
                </Link>
              </li>
            ); 
          })}
        </ul>
      </>
    );
  }
}
