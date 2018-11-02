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
    document.querySelector("body").style.overflow = "hidden";
  };

  menuClose = () => {
    this.setState({
      isMenuOpen: false
    });
    document.querySelector("body").style.overflow = "auto";
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
