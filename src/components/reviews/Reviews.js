import React, { Component } from "react";
import Services from "../Services";
import styles from "./Reviews.module.css";

export default class Reviews extends Component {
  state = {
    reviews: [],
    error: null
  };

  componentDidMount() {
    const id = this.props.location.state.id;
    Services.getMovieReviews(id).then(({ data: { results } }) => {
      this.setState({ reviews: results });
    });
  }

  render() {
    const { reviews } = this.state;
    console.log("this.state", this.state);
    return (
      <div>
        <ul>
          {reviews.map((review, key) => (
            <li className={styles.listItem} key={key} name="scroll-to-element">
              <article>
                <h3 className={styles.name}>{review.author}</h3>
                <section className={styles.name}>{review.content}</section>
              </article>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
