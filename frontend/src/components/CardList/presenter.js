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
          ...this.props.data.policies
        };
    }
  };

  render() {
    const { match, searchKeyword } = this.props;

    return (
      <section className="card-list">
        {Object.values(this.switchCards(match.params.category))
          .filter(data => {
            return (
              (data.type === "policy"
                ? data.busiNm.indexOf(searchKeyword)
                : data.type === "intern"
                  ? data.collectJobsNm.indexOf(searchKeyword)
                  : data.type === "event"
                    ? data.eventNm.indexOf(searchKeyword)
                    : data.type === "govern"
                      ? data.bsnsNm.indexOf(searchKeyword)
                      : "") > -1
            );
          })
          .map(data => {
            return <Card key={data._id} data={data} match={match} />;
          })}
      </section>
    );
  }
}
