import "./css/Counter.css";
import React, { Component } from "react";
import { connect } from "react-redux";
class Counter extends Component {
  render() {
    return (
      <div className="counter">
        <h1 className="counter-title">Counter</h1>
        <h1
          className="number"
          style={{
            color:
              this.props.counter <= -1
                ? "red"
                : Math.sign(this.props.counter) > 0
                ? "green"
                : "rgb(16, 42, 66)",
          }}
        >
          {this.props.counter}
        </h1>
      </div>
    );
  }
}

function mapStateToProps(state) {
  //Get info this component from redux .Using this function
  return { counter: state.counterReducer };
}

export default connect(mapStateToProps)(Counter);
