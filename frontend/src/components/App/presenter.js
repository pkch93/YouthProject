import React, { Component } from "react";
import Menu from "../Menu";
import Main from "../Main";

import "./styles.scss";

export default class presenter extends Component {
  render() {
    const { isMenuOpen, menuOpen, menuClose } = this.props;

    return (
      <div className="wrapper">
        <Menu isMenuOpen={isMenuOpen} menuClose={menuClose} />
        <Main
          isMenuOpen={isMenuOpen}
          menuOpen={menuOpen}
          menuClose={menuClose}
        />
      </div>
    );
  }
}
