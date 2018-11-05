import React, { Component } from "react";
import Card from "../Card";

import "./styles.scss";

export default class presenter extends Component {
  render() {
    const { match, searchKeyword, switchCards } = this.props;

    return (
      <section className="card-list">
        {Object.values(switchCards(match.params.category))
          .filter(data => {
            // 검색할 때 어떤 DB column을 기준으로 할 것인지
            // 각 테이블마다 제목을 뜻하는 column의 이름이 달라 발생하는 문제
            return (
              (data.type === "policy"
                ? data.busiNm.indexOf(searchKeyword)
                : data.type === "intern"
                  ? data.collectJobsNm.indexOf(searchKeyword)
                  : data.type === "event"
                    ? data.eventNm.indexOf(searchKeyword)
                    : data.type === "govern"
                      ? data.bsnsNm.indexOf(searchKeyword)
                      : "") > -1
            );
          })
          .map(data => {
            return <Card key={data._id} data={data} match={match} />;
          })}
      </section>
    );
  }
}
