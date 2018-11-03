import React, { Component } from "react";
import "./styles.scss";

export default class presenter extends Component {
  render() {
    return (
      <div className="feedback">
        <form className="">
          <input
            type="text"
            className="form__input"
            placeholder="피드백 내용을 입력해주세요."
          />
          <input type="submit" className="form__submit" />
        </form>
        <span className="feedback__comment">
          신청 절차가 너무 까다롭고, 신청한 후에도 결과가 나오는데까지 너무 오래
          걸렸습니다. 신청을 좀 단순화할 필요가 있을 것 같습니다.
        </span>
        <span className="feedback__comment">
          나이, 학력, 취업상태에 제한이 없어 누구나 신청할 수 있는 것이 큰
          장점인 것 같아요!
        </span>
        <span className="feedback__comment">
          일원화된 서비스라고는 하는데 일처리가 너무 늦어서 체감효과가 미미한 것
          같습니다.
        </span>
      </div>
    );
  }
}
