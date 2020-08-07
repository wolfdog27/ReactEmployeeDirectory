import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    numInput: 0,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    const isNumberEntered = this.state.numInput === 0
    return (
      <div className="App">
        <h1>React Employee Directory</h1>
        <label htmlFor="numInput">
          # of Emps
        <input
            id="numInput"
            name="numInput"
            value={this.state.numInput}
            type="number"
            min="0"
            onChange={this.handleInputChange}
          />
        </label>
        <button disabled={isNumberEntered}>
          {isNumberEntered ? "Please Enter A Number" : "Submit"}
        </button>

        <div className="empContainer">
          {this.state.numInput}
        </div>

      </div>
    );
  }
}

export default App;
