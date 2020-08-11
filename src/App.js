import React, { Component } from 'react';
import axios from "axios"
import TableBody from "./components/TableBody"
import './App.css';



class App extends Component {
  state = {
    users: [],
    search: '',
  };


  componentDidMount(){
    this.makeRequest()
  }
  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  makeRequest = async () => {
    const URL = `https://randomuser.me/api/?results=100&nat=us`;

    try {
      let results = await axios.get(URL)
      this.setState({ users: results.data.results });
    } catch (e) {
      console.log("ERROR:  ", e);
    }

  }


  render() {
    const isNumberEntered = this.state.numInput === 0
    return (
      <div className="App container">
        <h1>React Employee Directory</h1>
        <label htmlFor="search">
        <input
            id="search"
            name="search"
            value={this.state.search}
            type="text"
            onChange={this.handleInputChange}
          />
        </label>
        <button disabled={isNumberEntered} onClick={this.makeRequest}>
          {isNumberEntered ? "Please Enter A Number" : "Submit"}
        </button>

        <table className="table">
          <thead>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Number</th>
            <th scope="col">Email</th>
          </thead>
        {this.state.users.map((eachOne,index) => <TableBody key={index} name={eachOne.name} src={eachOne.picture.medium} email={eachOne.email} number={eachOne.phone}  />)}
        </table>
      </div>
    );
  }
}

export default App;
