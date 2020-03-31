import React, { Component } from "react";
import Services from "../Services";
import { Link } from "react-router-dom";

class HomePage extends Component {
  state = {
    movies: []
  };

  componentDidMount() {
    Services.getTrending().then(data =>
      this.setState({ movies: data.data.results })
    );
  }

  render() {
    return (
      <>
        <h2>Trending today</h2>
        <ul>
          {this.state.movies.map(movie => (
            <li key={movie.id}>
              <Link
                to={{
                  pathname: `movies/${movie.id}`,
                  state: {
                    id: movie.id,
                    params: ""
                  }
                }}
              >
                {movie.title || movie.name}
              </Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default HomePage;
