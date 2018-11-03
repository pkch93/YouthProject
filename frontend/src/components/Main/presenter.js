import React, { Component } from "react";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";

import CardList from "../CardList";
import Filter from "../Filter";

import "./styles.scss";

export default class presenter extends Component {
  render() {
    const {
      data,
      isLoaded,
      searchKeyword,

      match,
      isMenuOpen,
      menuOpen,
      menuClose,
      switchCategory,
      handleChange
    } = this.props;

    return (
      <>
        <div className="main__menu">
          <div className="main__menu-wrapper">
            <Ionicon
              icon="ios-menu"
              onClick={isMenuOpen ? menuClose : menuOpen}
            />
            <Link to="/">
              <span>청춘어람</span>
            </Link>
          </div>
        </div>
        <section className="main">
          <h1 className="main__title">
            {switchCategory(match.params.category)}
          </h1>
          <Filter searchKeyword={searchKeyword} handleChange={handleChange} />
          <div className="main__divider" />
          {isLoaded ? (
            <CardList data={data} match={match} searchKeyword={searchKeyword} />
          ) : (
            <img
              className="main__loading"
              src={require("../../images/loading.svg")}
              alt="loading"
            />
          )}
        </section>
      </>
    );
  }
}
