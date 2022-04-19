import React, { Component } from "react";
import { increaseByTwoCounter } from "../redux/actions/counterActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./css/Buttons.css";
class IncreaseByTwoCounter extends Component {
  render() {
    return (
      <div>
        <button
          className="increaseByTwoBtn btn"
          onClick={() => {
            this.props.dispatch(increaseByTwoCounter());
          }}
        >
          +2
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { action: bindActionCreators(increaseByTwoCounter, dispatch) };
}

export default connect(mapDispatchToProps)(IncreaseByTwoCounter);
