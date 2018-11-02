import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  switchCategory = category => {
    switch (category) {
      case "policy":
        return "청년취업정책";
      case "intern":
        return "청년인턴";
      case "event":
        return "채용행사";
      case "govern":
        return "정부지원일자리";
      default:
        return "전체";
    }
  };

  render() {
    return <App {...this.props} switchCategory={this.switchCategory} />;
  }
}
