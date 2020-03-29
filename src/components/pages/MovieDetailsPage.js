import React, { Component } from "react";
import Services from "../Services";
import { Link, Route } from "react-router-dom";
import Cast from "../cast/Cast";
import Reviews from "../reviews/Reviews";
import styles from "./MovieDetailsPage.module.css";

class MovieDetailsPage extends Component {
  state = {
    movie: {}
  };

  componentDidMount() {
    Services.getMovieDetails(this.props.location.state.id).then(data =>
      this.setState({ movie: data.data })
    );
  }

  render() {
    const somePath = "https://image.tmdb.org/t/p/original";
    const year = this.state.movie.release_date
      ? this.state.movie.release_date.slice(0, 4)
      : null;

    const genre = this.state.movie.genres
      ? this.state.movie.genres.map(elem => (
          <span key={elem.id}>{elem.name} </span>
        ))
      : null;

    const { match, location } = this.props;

    return (
      <>
        <Link to="/" className="goBack">
          Go back
        </Link>
        <div className="yes">
          {this.state.movie.poster_path && (
            <img
              className="image"
              alt="Poster"
              src={`${somePath}${this.state.movie.poster_path}`}
              width={300}
            />
          )}
          <div>
            <h2>
              {this.state.movie.title}({year})
            </h2>
            <p>User score: {this.state.movie.vote_average * 10}%</p>
            <h3>Overview</h3>
            <p>{this.state.movie.overview}</p>
            <h3>Genres</h3>
            <p>{genre}</p>
          </div>
        </div>
        <div>
          <p>Additional information</p>
          <ul className={styles.moreInfo}>
            <li>
              {this.state.movie.id && (
                <Link
                  to={{
                    pathname: `/movies/${this.state.movie.id}/credits`,
                    state: { ...location.state }
                  }}
                >
                  Cast
                </Link>
              )}
            </li>
            <li>
              {this.state.movie.id && (
                <Link
                  to={{
                    pathname: `/movies/${this.state.movie.id}/reviews`,
                    state: { ...location.state }
                  }}
                >
                  Reviews
                </Link>
              )}
            </li>
          </ul>
          <Route path={`${match.path}/credits`} component={Cast} />
          <Route path={`${match.path}/reviews`} component={Reviews} />
        </div>
      </>
    );
  }
}

export default MovieDetailsPage;
