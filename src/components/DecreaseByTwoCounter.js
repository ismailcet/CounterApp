import React, { Component } from "react";
import { decreaseByTwoCounter } from "../redux/actions/counterActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./css/Buttons.css";
class DecreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button
          className="decreaseByTwoBtn btn"
          onClick={() => {
            this.props.dispatch(decreaseByTwoCounter());
          }}
        >
          -2
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { action: bindActionCreators(decreaseByTwoCounter, dispatch) };
}

export default connect(mapDispatchToProps)(DecreaseByTwoCounter);
