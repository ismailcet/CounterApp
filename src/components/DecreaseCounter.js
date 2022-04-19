import React, { Component } from "react";
import { decreaseCounter } from "../redux/actions/counterActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import "./css/Buttons.css";
class DecreaseCounter extends Component {
  render() {
    return (
      <div>
        <button
          className="decreaseBtn btn"
          onClick={() => {
            this.props.dispatch(decreaseCounter());
          }}
        >
          -1
        </button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return { action: bindActionCreators(decreaseCounter, dispatch) };
}

export default connect(mapDispatchToProps)(DecreaseCounter);
