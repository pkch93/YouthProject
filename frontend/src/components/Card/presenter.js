import React, { Component } from "react";
import CardDetail from "../CardDetail";

import "./styles.scss";

export default class presenter extends Component {
  render() {
    const { isModalOpen, modalOpen, modalClose } = this.props;

    return (
      <>
        <CardDetail isModalOpen={isModalOpen} modalClose={modalClose} />
        <div className="card">
          <div className="card__top">
            <span className="card__type">취업진로상담</span>
            <h1 className="card__title">사업명사업명</h1>
            <span className="card__slogan">사업슬로건사업슬로건</span>
            <span className="card__org">담당기관명</span>
          </div>
          <div className="card__mid">
            <span className="card__age">연령</span>
            <span className="card__school">학력</span>
            <span className="card__online">온라인신청가능여부</span>
            <span className="card__local">지자체여부</span>
          </div>
          <div className="card__bot">
            <span
              className="card__detail"
              onClick={isModalOpen ? modalClose : modalOpen}
            >
              자세히
            </span>
          </div>
        </div>
      </>
    );
  }
}
