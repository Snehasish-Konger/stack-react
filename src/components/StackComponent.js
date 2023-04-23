import React, { Component } from "react";
import Stack from "../utils/Stack";
import "./StackComponent.css";
class StackComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stack: new Stack(),
    };
  }

  handlePush = (event) => {
    event.preventDefault();
    const { stack } = this.state;
    const value = this.refs.input.value;
    stack.push(value);
    this.setState({ stack });
    this.refs.input.value = "";
  };

  handlePop = (event) => {
    event.preventDefault();
    const { stack } = this.state;
    stack.pop();
    this.setState({ stack });
  };

  render() {
    return (
      <div className="stack-container">
        <h1 className="stack-title">Stack Data Structure</h1>
        <p>Read the blog from here:<a href="https://scientyficworld.org/stack-data-structure-using-reactjs/" rel="noopener noreferrer dofollow" target="_blank" >Stack Data Structure in React.js</a></p>
        <form>
          <input
            type="text"
            ref="input"
            className="stack-input"
            placeholder="Enter a value to push to the stack"
          />
          <div className="stack-buttons">
            <button
              className="stack-button push-button"
              onClick={this.handlePush}
            >
              Push
            </button>
            <button
              className="stack-button pop-button"
              onClick={this.handlePop}
            >
              Pop
            </button>
          </div>
        </form>

        <h3>Stack Stats:</h3>
        <div className="stack-stats">
          <p className="stack-stat">Top Element: {this.state.stack.peek()}</p>
          <p className="stack-stat">
            Stack Size: {this.state.stack.items.length}
          </p>
        </div>
        <div className="stack">
          <h3>Stack Items:</h3>
          <ul className="stack-items">
            {this.state.stack.items.map((item, index) => (
              <li className="stack-item" key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default StackComponent;
