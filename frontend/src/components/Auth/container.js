import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  state = {};

  render() {
    return <App {...this.props} />;
  }
}
