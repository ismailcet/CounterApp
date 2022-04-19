import React, { Component } from "react";
import { resetCounter } from "../redux/actions/counterActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./css/Buttons.css";

class ResetCounter extends Component {
  render() {
    return (
      <div>
        <button
          className="resetBtn btn"
          onClick={() => {
            this.props.dispatch(resetCounter());
          }}
        >
          Reset
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { action: bindActionCreators(resetCounter, dispatch) };
}

export default connect(mapDispatchToProps)(ResetCounter);
