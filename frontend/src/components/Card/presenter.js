import React, { Component } from "react";
import Ionicon from "react-ionicons";
import CardDetail from "../CardDetail";

import "./styles.scss";

export default class presenter extends Component {
  switchCharge = category => {
    switch (category) {
      case "policy":
        return "청년취업정책";
      case "intern":
        return "청년인턴";
      case "event":
        return "채용행사";
      case "govern":
        return "정부지원일자리";
      default:
        return "";
    }
  };

  render() {
    const { data, match, isModalOpen, modalOpen, modalClose } = this.props;

    return (
      <>
        <CardDetail isModalOpen={isModalOpen} modalClose={modalClose} />
        <div className="card">
          <div className="card__top">
            <span className="card__type">
              {match.params.category} / {data.chargerOrgNm}
            </span>
            <h1
              className="card__title"
              onClick={isModalOpen ? modalClose : modalOpen}
            >
              {data.busiNm}
            </h1>
            <span className="card__slogan">{data.dtlBusiNm}</span>
          </div>
          <div className="card__mid">
            <span className="card__age">연령: {data.ageEtcCont}</span>
            <span className="card__school">학력: {data.edubgEtcCont}</span>
          </div>
          <div className="card__bot">
            <div className="card__thumb">
              <Ionicon icon="ios-thumbs-up-outline" />
              <span>{data.likes}</span>
            </div>
            <div className="card__comment">
              <Ionicon icon="ios-chatboxes-outline" />
              <span>{data.reviews.length}</span>
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
