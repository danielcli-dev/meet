import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class NumberOfEvents extends Component {
  state = {
    query: 32,
    infoText: "",
  };

  handleInputChanged = (event) => {
    const value = event.target.value;
    this.props.updateEvents(null, value);

    if (value < 0) {
      this.setState({
        query: value,
        infoText:
          "The number of events selected is negative. Please try another number",
      });
    } else if (value > 32) {
      this.setState({
        query: value,
        infoText:
          "The number of events selected is too high. Please try another number",
      });
    } else {
      return this.setState({ query: value, infoText: "" });
    }
  };

  render() {
    return (
      <div className="NumberOfEvents">
        <label>Number of Events: </label>
        <input
          type="number"
          className="number"
          value={this.state.query}
          onChange={this.handleInputChanged}
        />
        <ErrorAlert text={this.state.infoText} />
      </div>
    );
  }
}
export default NumberOfEvents;
