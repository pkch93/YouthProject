import React, { Component } from "react";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";

import CardList from "../CardList";
import Filter from "../Filter";

import "./styles.scss";

export default class presenter extends Component {

   componentDidMount(){
    fetch("http://localhost:4000/api/data")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(e => console.log(e));
  }

  render() {
    const {
      match,
      isMenuOpen,
      menuOpen,
      menuClose,
      switchCategory
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
          <Filter />
          <div className="main__divider" />
          <CardList />
        </section>
      </>
    );
  }
}
