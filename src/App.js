import React, { Component } from 'react';
import axios from "axios"
import TableBody from "./components/TableBody"
import './App.css';



class App extends Component {
  state = {
    users: [],
    initialUsers: [],
    search: '',
  };

  toggle = false

  componentDidMount(){
    this.makeRequest()
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    let filtereUsers = this.state.initialUsers.filter(item => item.name.last.toLowerCase().includes(value))
    this.setState({users: filtereUsers, search: value})
    
  };

  handleSort = () => {
      console.log("im here");

  if (this.toggle) {
    this.setState({users: this.state.users.sort(function(a, b){
    
      if(a.name.last < b.name.last) { return -1; }
      if(a.name.last > b.name.last) { return 1; }
      return 0;
      
  }) })
  this.toggle = false
  } else {
    this.setState({users: this.state.users.sort(function(a, b){
    
      if(a.name.last < b.name.last) { return 1; }
      if(a.name.last > b.name.last) { return -1; }
      return 0;
      
  }) })
  this.toggle = true
  }
  }

  makeRequest = async () => {
    const URL = `https://randomuser.me/api/?results=100&nat=us`;

    try {
      let results = await axios.get(URL)
      this.setState({ 
          users: results.data.results,
          initialUsers: results.data.results
       });
    } catch (e) {
      console.log("ERROR:  ", e);
    }

  }


  render() {

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


        <table className="table">
          <thead>
            <th scope="col">Image</th>
            <button scope="col" onClick={this.handleSort}>Name</button>
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