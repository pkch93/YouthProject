import React, { Component } from "react";
import Ionicon from "react-ionicons";

import "./styles.scss";

export default class presenter extends Component {
  render() {
    return (
      <>
        <div className="filter__wrapper">
          <ul className="filter__items">
            <li className="filter__item filter__item--active">#전체</li>
            <li className="filter__item">#인기순</li>
            <li className="filter__item">#온라인 신청</li>
          </ul>
        </div>
        <div className="filter__search">
          <input
            type="text"
            name=""
            placeholder="검색할 사업명을 입력하세요."
          />
          <Ionicon icon="ios-search" />
        </div>
      </>
    );
  }
}
