import React, { Component } from "react";
import App from "./presenter";

export default class container extends Component {
  state = {
    isModalOpen: false
  };

  modalOpen = () => {
    this.setState({
      isModalOpen: true
    });
    document.querySelector("body").style.overflow = "hidden";
  };

  modalClose = () => {
    this.setState({
      isModalOpen: false
    });
    document.querySelector("body").style.overflow = "auto";
  };

  render() {
    return (
      <App
        {...this.state}
        {...this.props}
        modalOpen={this.modalOpen}
        modalClose={this.modalClose}
      />
    );
  }
}
