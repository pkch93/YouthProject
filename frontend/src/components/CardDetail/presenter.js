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
          />
        </div>
      </div>
    );
  }
}
