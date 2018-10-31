import React, { Component } from "react";

import "./styles.scss";
import "../../shared/modal.scss";

export default class presenter extends Component {
  render() {
    const { isModalOpen, modalClose } = this.props;

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
            <div className="policy">
              <h1 className="policy__title">고용복지플러스센터</h1>
              <span className="policy__slogan">
                고용, 복지, 서민금융 서비스를 한 곳에서 One-stop으로 지원하는
                협업모델
              </span>
              <span className="policy__sub-title">
                ◦ 일자리, 복지, 서민금융의 도움이 필요한 모든 국민이 한 곳에서
                한 번에 서비스를 제공받을 수 있는 새로운 개념의 서비스 기관
              </span>
              <span className="policy__age">연령: 무관</span>
              <span className="policy__school">학력: 제한 없음</span>
              <span className="job">취업상태: 제한 없음</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
