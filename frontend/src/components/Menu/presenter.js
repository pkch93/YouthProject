import React, { Component } from "react";
import Ionicon from "react-ionicons";
import { Link } from "react-router-dom";

import "./styles.scss";

export default class presenter extends Component {
  render() {
    const { match, isMenuOpen, menuClose } = this.props;

    return (
      <>
        <section className="menu">
          <h1 className="menu__logo">
            <Link to="/">
              <img src={require("../../images/logo.png")} alt="logo" />
            </Link>
          </h1>
          <ul className="menu__items">
            <Link to="/policy">
              <li
                className={
                  match.params.category === "policy" ||
                  match.params.category === undefined
                    ? "menu__item menu__item--active"
                    : "menu__item"
                }
              >
                청년취업정책
                <Ionicon
                  icon={
                    match.params.category === "policy" ||
                    match.params.category === undefined
                      ? "ios-checkbox"
                      : "ios-checkbox-outline"
                  }
                />
              </li>
            </Link>
            <Link to="/intern">
              <li
                className={
                  match.params.category === "intern"
                    ? "menu__item menu__item--active"
                    : "menu__item"
                }
              >
                청년인턴
                <Ionicon
                  icon={
                    match.params.category === "intern"
                      ? "ios-school"
                      : "ios-school-outline"
                  }
                />
              </li>
            </Link>
            <Link to="/event">
              <li
                className={
                  match.params.category === "event"
                    ? "menu__item menu__item--active"
                    : "menu__item"
                }
              >
                채용행사
                <Ionicon
                  icon={
                    match.params.category === "event"
                      ? "ios-chatbubbles"
                      : "ios-chatbubbles-outline"
                  }
                />
              </li>
            </Link>
            <Link to="/govern">
              <li
                className={
                  match.params.category === "govern"
                    ? "menu__item menu__item--active"
                    : "menu__item"
                }
              >
                정부지원일자리
                <Ionicon
                  icon={
                    match.params.category === "govern"
                      ? "ios-contacts"
                      : "ios-contacts-outline"
                  }
                />
              </li>
            </Link>
          </ul>
        </section>

        <section
          className={
            isMenuOpen ? "menu-drawer menu-drawer--open" : "menu-drawer"
          }
        >
          <div className="menu-drawer__close">
            <Ionicon icon="ios-close" onClick={menuClose} />
          </div>
          <ul className="menu__items">
            <Link to="/policy" onClick={() => menuClose()}>
              <li
                className={
                  match.params.category === "policy"
                    ? "menu__item menu__item--active"
                    : "menu__item"
                }
              >
                청년취업정책
                <Ionicon
                  icon={
                    match.params.category === "policy"
                      ? "ios-checkbox"
                      : "ios-checkbox-outline"
                  }
                />
              </li>
            </Link>
            <Link to="/intern" onClick={() => menuClose()}>
              <li
                className={
                  match.params.category === "intern"
                    ? "menu__item menu__item--active"
                    : "menu__item"
                }
              >
                청년인턴
                <Ionicon
                  icon={
                    match.params.category === "intern"
                      ? "ios-school"
                      : "ios-school-outline"
                  }
                />
              </li>
            </Link>
            <Link to="/event" onClick={() => menuClose()}>
              <li
                className={
                  match.params.category === "event"
                    ? "menu__item menu__item--active"
                    : "menu__item"
                }
              >
                채용행사
                <Ionicon
                  icon={
                    match.params.category === "event"
                      ? "ios-chatbubbles"
                      : "ios-chatbubbles-outline"
                  }
                />
              </li>
            </Link>
            <Link to="/govern" onClick={() => menuClose()}>
              <li
                className={
                  match.params.category === "govern"
                    ? "menu__item menu__item--active"
                    : "menu__item"
                }
              >
                정부지원일자리
                <Ionicon
                  icon={
                    match.params.category === "govern"
                      ? "ios-contacts"
                      : "ios-contacts-outline"
                  }
                />
              </li>
            </Link>
          </ul>
        </section>

        <div
          className={
            isMenuOpen
              ? "menu-drawer__dim menu-drawer__dim--open"
              : "menu-drawer__dim"
          }
          onClick={menuClose}
        />
      </>
    );
  }
}
