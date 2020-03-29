import React, { Component } from "react";
import Services from "../Services";
import styles from "./Cast.module.css";

export default class Cast extends Component {
  state = {
    cast: [],
    error: null
  };

  componentDidMount() {
    const id = this.props.location.state.id;

    Services.getMovieCast(id)
      .then(({ data }) => {
        this.setState({ cast: data.cast });
      })
  }

  render() {
    const { cast } = this.state;
    return (
      <div>
        <ul className={styles.list}>
          {cast.map(cast => (
            <li
              className={styles.listItem}
              key={cast.cast_id}
              name="scroll-to-element"
            >
              <div className={styles.actorCard}>
                <p className={styles.character}>Character: </p>
                <p className={styles.characterName}>{cast.character}</p>
                <div className={styles.imageBox}>
                  <img
                    src={
                      cast.profile_path
                        ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                        : null
                    }
                    alt={cast.name}
                  />
                </div>
                <p className={styles.name}>{cast.name}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
