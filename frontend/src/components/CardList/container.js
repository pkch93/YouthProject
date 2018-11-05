import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  switchCards = category => {
    // data에 담긴 카테고리 분류
    const { data } = this.props;

    switch (category) {
      case "policy":
        return {
          ...data.policies
        };
      case "intern":
        return {
          ...data.interns
        };
      case "event":
        return {
          ...data.events
        };
      case "govern":
        return {
          ...data.governs
        };
      default:
        return {
          ...data.policies
        };
    }
  };

  render() {
    return <App {...this.props} switchCards={this.switchCards} />;
  }
}
