import React, { Component } from 'react';

import './App.css';

class App extends Component {
  state = {
    numInput: 0,
  };
  render() {
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
            min="0" />
        </label>
        <button>Submit</button>

        <div className="empContainer">
          {this.state.numInput}
        </div>

      </div>
    );
  }
}

export default App;
