import React from 'react';

import './App.css';

function App() {
  return (
    <div className="App">
      <h1>React Employee Directory</h1>
      <label htmlFor="numInput">
        # of Emps
        <input id="numInput" name="numInput" />
      </label>
      <button>Submit</button>
    </div>
  );
}

export default App;
