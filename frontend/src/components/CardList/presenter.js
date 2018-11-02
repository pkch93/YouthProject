import React, { Component } from "react";
import Card from "../Card";

import "./styles.scss";

export default class presenter extends Component {
  // data에 담긴 카테고리 분류
  switchCards = category => {
    switch (category) {
      case "policy":
        return {
          ...this.props.data.policies
        };
      case "intern":
        return {
          ...this.props.data.interns
        };
      case "event":
        return {
          ...this.props.data.events
        };
      case "govern":
        return {
          ...this.props.data.governs
        };
      default:
        return {
          ...this.props.data.events,
          ...this.props.data.governs,
          ...this.props.data.interns,
          ...this.props.data.policies
        };
    }
  };

  render() {
    const { match } = this.props;

    return (
      <section className="card-list">
        {console.log(Object.values(this.switchCards(match.params.category)))}
        {Object.values(this.switchCards(match.params.category)).map(data => {
          return <Card key={data._id} data={data} match={match} />;
        })}
      </section>
    );
  }
}
