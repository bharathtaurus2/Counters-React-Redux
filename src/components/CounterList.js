import React from "react";
import { connect } from "react-redux";

import Counter from "./Counter";

class CounterList extends React.Component {
  renderList = () => {
    if (this.props.counters.length === 0) {
      return null;
    }

    return this.props.counters.map(counter => {
      return <Counter key={counter.id} id={counter.id} value={counter.value} />;
    });
  };

  render() {
    return <div>{this.renderList()}</div>;
  }
}

const mapStateToProp = state => {
  return { counters: state.counters };
};

export default connect(mapStateToProp)(CounterList);
