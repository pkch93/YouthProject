import React, { Component } from "react";
import Ionicon from "react-ionicons";
import CardDetail from "../CardDetail";

import "./styles.scss";

export default class presenter extends Component {
  switchCategory = category => {
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

  switchOrg = category => {
    const { data } = this.props;

    switch (category) {
      case "policy":
        return data.chargerOrgNm;
      case "intern":
        return data.companyNm;
      case "event":
        return data.area;
      case "govern":
        return data.manageInsttNm;
      default:
        return "";
    }
  };

  switchTitle = category => {
    const { data } = this.props;

    switch (category) {
      case "policy":
        return data.busiNm;
      case "intern":
        return data.collectJobsNm;
      case "event":
        return data.eventNm;
      case "govern":
        return data.bsnsNm;
      default:
        return "";
    }
  };

  switchSlogan = category => {
    const { data } = this.props;

    switch (category) {
      case "policy":
        return data.dtlBusiNm;
      case "intern":
        return data.regionNm;
      case "event":
        return data.eventTerm;
      case "govern":
        return data.rcritPblancNm;
      default:
        return "";
    }
  };

  switchAge = category => {
    const { data } = this.props;

    switch (category) {
      case "policy":
        return data.ageEtcCont;
      case "intern":
        return "무관";
      case "event":
        return "무관";
      case "govern":
        return "무관";
      default:
        return "";
    }
  };

  switchSchool = category => {
    const { data } = this.props;

    switch (category) {
      case "policy":
        return data.edubgEtcCont;
      case "intern":
        return data.minEdubg + " 이상";
      case "event":
        return "무관";
      case "govern":
        return "무관";
      default:
        return "";
    }
  };

  render() {
    const { data, isModalOpen, modalOpen, modalClose } = this.props;

    return (
      <>
        <CardDetail isModalOpen={isModalOpen} modalClose={modalClose} />
        <div className="card">
          <div className="card__top">
            <span className="card__type">
              {this.switchCategory(data.type)} / {this.switchOrg(data.type)}
            </span>
            <h1
              className="card__title"
              onClick={isModalOpen ? modalClose : modalOpen}
            >
              {this.switchTitle(data.type)}
            </h1>
            <span className="card__slogan">{this.switchSlogan(data.type)}</span>
          </div>
          <div className="card__mid">
            <span className="card__age">연령: {this.switchAge(data.type)}</span>
            <span className="card__school">
              학력: {this.switchSchool(data.type)}
            </span>
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
