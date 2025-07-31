import React, { Component } from "react";

class Counterc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    if (this.state.count > 0) {
      this.setState({ count: this.state.count - 1 });
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1>Using Class</h1>

        <h2>Count: {this.state.count}</h2>

        <button onClick={this.increment}>Increment</button>{" "}
        <button onClick={this.decrement}>Decrement</button>{" "}
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Counterc;