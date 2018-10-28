import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  state = {
    isMenuOpen: false
  };

  menuOpen = () => {
    this.setState({
      isMenuOpen: true
    });
  };

  menuClose = () => {
    this.setState({
      isMenuOpen: false
    });
  };

  render() {
    return (
      <App
        {...this.state}
        {...this.props}
        menuOpen={this.menuOpen}
        menuClose={this.menuClose}
      />
    );
  }
}
