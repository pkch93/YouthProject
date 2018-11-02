import React, { Component } from "react";
import Ionicon from "react-ionicons";
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
            <span className="card__type">취업진로상담 / 고용노동부</span>
            <h1
              className="card__title"
              onClick={isModalOpen ? modalClose : modalOpen}
            >
              고용복지플러스센터
            </h1>
            <span className="card__slogan">
              고용, 복지, 서민금융 서비스를 한 곳에서 One-stop으로 지원하는
              협업모델
            </span>
          </div>
          <div className="card__mid">
            <span className="card__age">연령: 만 18세 이상 ~ 만 39세 이하</span>
            <span className="card__school">학력: 대졸 예정, 대졸</span>
          </div>
          <div className="card__bot">
            <div className="card__thumb">
              <Ionicon icon="ios-thumbs-up-outline" />
              <span>(10)</span>
            </div>
            <div className="card__comment">
              <Ionicon icon="ios-chatboxes-outline" />
              <span>(15)</span>
            </div>
            <div className="card__detail">
              <Ionicon icon="ios-add-circle-outline" />
            </div>
          </div>
        </div>
      </>
    );
  }
}
