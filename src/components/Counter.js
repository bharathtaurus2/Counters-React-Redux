import React from "react";

import { connect } from "react-redux";
import { selectCounter, add, subtract } from "../actions";

class Counter extends React.Component {
  handleAdd = e => {
    e.preventDefault();
    this.props.add(this.props.id, this.props.value);
  };

  handleSubtract = e => {
    e.preventDefault();

    this.props.subtract(this.props.id, this.props.value);
  };

  handleSelction = () => {
    this.props.selectCounter(this.props.id);
  };

  render() {
    return (
      <div onClick={this.handleSelction}>
        <h3>{this.props.value}</h3>
        <button onClick={this.handleAdd}>+</button>
        <button onClick={this.handleSubtract}>-</button>
      </div>
    );
  }
}

export default connect(
  null,
  { add, selectCounter, subtract }
)(Counter);
