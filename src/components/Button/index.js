import React, { Component } from "react";
import PropTypes from "prop-types";

class Button extends Component {
  exampleMethod_returnsAValue = (number) => {
    return number + 1;
  };

  submitEvent() {
    if (this.props.emitEvent) {
      this.props.emitEvent();
    }
  }
  render() {
    const { buttonText } = this.props;
    return (
      <button onClick={() => this.submitEvent()} data-test="buttonComponent">
        {buttonText}
      </button>
    );
  }
}

Button.propTypes = {
  buttonText: PropTypes.string,
  emitEvent: PropTypes.func,
};
export default Button;
