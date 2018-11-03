import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  state = {
    data: {},
    isLoaded: false,
    searchKeyword: ""
  };

  // 데이터를 모두 불러온다.
  componentDidMount() {
    fetch("http://localhost:4000/api/data/")
      .then(res => res.json())
      .then(data =>
        this.setState({
          data: Object.assign(data),
          isLoaded: true
        })
      )
      .catch(e => console.log(e));
  }

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
        return "청년취업정책";
    }
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <App
        {...this.state}
        {...this.props}
        switchCategory={this.switchCategory}
        handleChange={this.handleChange}
      />
    );
  }
}
