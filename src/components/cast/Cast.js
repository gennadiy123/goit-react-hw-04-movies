import React, { Component } from "react";
import Services from "../Services";

export default class Cast extends Component {
  state = {
    cast: [],
    error: null
  };

  componentDidMount() {
    const id = this.props.location.state.id;

    Services.getMovieCast(id).then(({ data }) => {
      this.setState({ cast: data.cast });
    });
  }

  render() {
    const { cast } = this.state;
    return (
      <div>
        <ul>
          {cast.map(cast => (
            <li
              key={cast.cast_id}
              name="scroll-to-element"
            >
              <div>
                <img
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                      : null
                  }
                  alt={cast.name}
                  className="imageCast"
                />
                <p>{cast.name}</p>
                <p>Character: {cast.character}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
