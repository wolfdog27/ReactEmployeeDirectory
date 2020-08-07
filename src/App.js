import React, { Component } from 'react';
import axios from "axios"
import './App.css';

function EmployeeCard({ img, name, phone }) {
  return (
    <div>
      <img src={img} alt={name.first} />
      <div>
        <p>{`${name.title} ${name.first} ${name.last}`}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
}

const styles= {
  empContainer: {
    display:"flex",
    flexWrap:"wrap",
    justifyContent:"center"
  }
}

class App extends Component {
  state = {
    users: [],
    numInput: 0,
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  makeRequest = async () => {
    const URL = `https://randomuser.me/api/?results=${this.state.numInput}&nat=us`;

    try {
      let results = await axios.get(URL)
      this.setState({ users: results.data.results });
    } catch (e) {
      console.log("ERROR:  ", e);
    }

  }

  renderEmployees = () => {
    return this.state.users.map((user) => (
      <EmployeeCard 
        key={user.id.value} 
        img={user.picture.large} 
        name={user.name} 
        phone={user.phone} />
    ));
  }

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
        <button disabled={isNumberEntered} onClick={this.makeRequest}>
          {isNumberEntered ? "Please Enter A Number" : "Submit"}
        </button>

        <div style={styles.empContainer}>{this.renderEmployees()}</div>
      </div>
    );
  }
}

export default App;
