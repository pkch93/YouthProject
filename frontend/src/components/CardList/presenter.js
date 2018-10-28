import React, { Component } from "react";
import Card from "../Card";

import "./styles.scss";

export default class presenter extends Component {
  render() {
    return (
      <section className="card-list">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </section>
    );
  }
}
