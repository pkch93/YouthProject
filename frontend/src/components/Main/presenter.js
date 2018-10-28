import React, { Component } from "react";
import Ionicon from "react-ionicons";
import CardList from "../CardList";
import Filter from "../Filter";

import "./styles.scss";

export default class presenter extends Component {
  render() {
    const { isMenuOpen, menuOpen, menuClose } = this.props;

    return (
      <>
        <div className="main__menu">
          <div className="main__menu-wrapper">
            <Ionicon
              icon="ios-menu"
              onClick={isMenuOpen ? menuClose : menuOpen}
            />
            <span>청춘어람</span>
          </div>
        </div>
        <section className="main">
          <h1 className="main__title">전체 정책</h1>
          <Filter />
          <div className="main__divider" />
          <CardList />
        </section>
      </>
    );
  }
}
