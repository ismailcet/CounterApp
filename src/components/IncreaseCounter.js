import React, { Component } from "react";
import { increaseCounter } from "../redux/actions/counterActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "./css/Buttons.css";

class IncreaseCounter extends Component {
  render() {
    return (
      <div>
        <button
          className="increaseBtn btn"
          onClick={(e) => {
            this.props.dispatch(increaseCounter());
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { action: bindActionCreators(increaseCounter, dispatch) }; //We get action from redux
}

export default connect(mapDispatchToProps)(IncreaseCounter);
