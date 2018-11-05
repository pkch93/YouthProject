import React, { Component } from "react";
import Feedback from "../Feedback";

import "./styles.scss";
import "../../shared/modal.scss";

export default class presenter extends Component {
  switchCategory = category => {
    const { data } = this.props;

    switch (category) {
      // 각 카테고리 별로 DB에 저장된 column 명이 다르다.
      // 그래서 어쩔 수 없이 switch문으로 하나하나 불러왔다.
      case "policy":
        return (
          <>
            <div className="policy">
              <h1 className="policy__title">{data.busiNm}</h1>
              <span className="policy__info">{data.dtlBusiNm}</span>
              <span className="policy__info">{data.busiSum}</span>
              <span className="policy__info">
                담당기관명: {data.chargerOrgNm}
              </span>
              <span className="policy__info">나이: {data.ageEtcCont}</span>
              <span className="policy__info">학력: {data.edubgEtcCont}</span>
              <span className="policy__info">취업상태: {data.empEtcCont}</span>
              <span className="policy__info">신청URL : {data.relInfoUrl}</span>
              <span className="policy__info">
                온라인신청 가능 여부: {data.onlineApplPossYn}
              </span>
            </div>
            <Feedback />
          </>
        );
      case "intern":
        return (
          <>
            <div className="policy">
              <h1 className="policy__title">{data.collectJobsNm}</h1>
              <span className="policy__info">사업장명: {data.companyNm}</span>
              <span className="policy__info">근무지역: {data.regionNm}</span>
              <span className="policy__info">최소학력: {data.minEdubg}</span>
              <span className="policy__info">최대학력: {data.maxEdubg}</span>
              <span className="policy__info">선발인원: {data.selPsncnt}</span>
              <span className="policy__info">
                모집인원: {data.collectPsncnt}
              </span>
              <span className="policy__info">신청일자: {data.applyDt}</span>
              <span className="policy__info">
                상세보기 URL: {data.detailUrl}
              </span>
            </div>
            <Feedback />
          </>
        );
      case "event":
        return (
          <>
            <div className="policy">
              <h1 className="policy__title">{data.eventNm}</h1>
              <span className="policy__info">지역: {data.area}</span>
              <span className="policy__info">행사기간: {data.eventTerm}</span>
            </div>
            <Feedback />
          </>
        );
      case "govern":
        return (
          <>
            <div className="policy">
              <h1 className="policy__title">{data.bsnsNm}</h1>
              <span className="policy__info">{data.rcritPblancNm}</span>
              <span className="policy__info">
                기관명: {data.executeInsttNm}
              </span>
              <span className="policy__info">
                근무지역명: {data.workAreaCodeNm}
              </span>
              <span className="policy__info">
                임금구분: {data.wageSeCodeNm}
              </span>
              <span className="policy__info">임금: {data.wageAmount}</span>
              <span className="policy__info">
                모집공고시작일: {data.rcritBeginDe}
              </span>
              <span className="policy__info">
                모집공고마감일: {data.rcritEndDe}
              </span>
            </div>
            <Feedback />
          </>
        );
      default:
        return "";
    }
  };

  render() {
    const { data, isModalOpen, modalClose } = this.props;

    return (
      <div
        className={isModalOpen ? "modal" : "modal modal--none"}
        onClick={modalClose}
      >
        <div className="modal__content">
          <div
            className="card-detail"
            onClick={e => {
              e.stopPropagation();
            }}
          >
            <div className="card-detail__wrapper">
              {this.switchCategory(data.type)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
