import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Menu from "../Menu";
import Main from "../Main";

import "./styles.scss";

export default class presenter extends Component {
  render() {
    const { isMenuOpen, menuOpen, menuClose } = this.props;

    return (
      <div className="wrapper">
        <Switch>
          <Route
            path="/:category"
            render={({ match }) => (
              <Menu
                match={match}
                isMenuOpen={isMenuOpen}
                menuClose={menuClose}
              />
            )}
          />
          <Route
            path="/"
            render={({ match }) => (
              <Menu
                match={match}
                isMenuOpen={isMenuOpen}
                menuClose={menuClose}
              />
            )}
          />
        </Switch>
        <Switch>
          <Route
            path="/:category"
            render={({ match }) => (
              <Main
                match={match}
                isMenuOpen={isMenuOpen}
                menuOpen={menuOpen}
                menuClose={menuClose}
              />
            )}
          />
          <Route
            path="/"
            render={({ match }) => (
              <Main
                match={match}
                isMenuOpen={isMenuOpen}
                menuOpen={menuOpen}
                menuClose={menuClose}
              />
            )}
          />
        </Switch>
      </div>
    );
  }
}
