import React from "react";

import CounterList from "./CounterList";
import { connect } from "react-redux";
import { addCounter, removeCounter, selectCounter } from "../actions";

class App extends React.Component {
  state = { nextId: 0 };
  handleAddCounter = e => {
    e.preventDefault();
    this.props.addCounter(this.state.nextId);
    this.setState({ nextId: this.state.nextId + 1 });
  };

  handleRemoveCounter = e => {
    e.preventDefault();
    if (this.props.selected > -1) {
      this.props.removeCounter(this.props.selected);
      this.props.selectCounter(this.props.selected - 1);
    }
  };

  render() {
    return (
      <div>
        <button onClick={this.handleAddCounter}>Add Counter</button>
        <button onClick={this.handleRemoveCounter}>Remove Counter</button>
        <CounterList />
      </div>
    );
  }
}

const mapStateToProp = state => {
  if (state.selected) {
    return { selected: state.selected.id };
  }
  return { selected: -1 };
};

export default connect(
  mapStateToProp,
  {
    addCounter,
    removeCounter,
    selectCounter
  }
)(App);
