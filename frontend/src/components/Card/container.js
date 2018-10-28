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
  };

  modalClose = () => {
    this.setState({
      isModalOpen: false
    });
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
