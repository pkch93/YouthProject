import React, { Component } from "react";
import Ionicon from "react-ionicons";

import "./styles.scss";

export default class presenter extends Component {
  render() {
    const { isMenuOpen, menuClose } = this.props;

    return (
      <>
        <section className="menu">
          <h1 className="menu__logo">
            <img src={require("../../images/logo.png")} alt="logo" />
          </h1>
          <ul className="menu__items">
            <li className="menu__item menu__item--active">
              취업진로상담
              <Ionicon icon="ios-chatbubbles" />
            </li>
            <li className="menu__item">
              교육·훈련
              <Ionicon icon="ios-build-outline" />
            </li>
            <li className="menu__item">
              체험·인턴
              <Ionicon icon="ios-school-outline" />
            </li>
            <li className="menu__item">
              해외진출
              <Ionicon icon="ios-plane-outline" />
            </li>
            <li className="menu__item">
              공공일자리
              <Ionicon icon="ios-contacts-outline" />
            </li>
            <li className="menu__item">
              지원금·보조금
              <Ionicon icon="ios-card-outline" />
            </li>
            <li className="menu__item">
              창업
              <Ionicon icon="ios-bulb-outline" />
            </li>
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
            <li className="menu__item menu__item--active">
              취업진로상담
              <Ionicon icon="ios-chatbubbles" />
            </li>
            <li className="menu__item">
              교육·훈련
              <Ionicon icon="ios-build-outline" />
            </li>
            <li className="menu__item">
              체험·인턴
              <Ionicon icon="ios-school-outline" />
            </li>
            <li className="menu__item">
              해외진출
              <Ionicon icon="ios-plane-outline" />
            </li>
            <li className="menu__item">
              공공일자리
              <Ionicon icon="ios-contacts-outline" />
            </li>
            <li className="menu__item">
              지원금·보조금
              <Ionicon icon="ios-card-outline" />
            </li>
            <li className="menu__item">
              창업
              <Ionicon icon="ios-bulb-outline" />
            </li>
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
