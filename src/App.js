import "./App.css";
import React, { Component } from "react";

export default class App extends Component {
  // State only be changed using setState
  state = {
      Name1: "",
    Department: "",
    Rating: "",
    employees: [],
  };
  changeHandler = (e) => {
       console.log(e);
    console.log(e.target);
    console.log(e.target.name);
    console.log(e.target.type);
    console.log(e.target.name + " : " + e.target.value);
       this.setState({ [e.target.name]: e.target.value });
    console.log(this.state);
  };

  submitHandler = (e) => {
    e.preventDefault();
      console.log("submitHandler called");
    const empObj = {
      Name: this.state.Name1,
      Department: this.state.Department,
      Rating: this.state.Rating,
    };
    const arr = this.state.employees;
    arr.push(empObj);
    this.setState({ employees: arr });
  };

  render() {
    return (
      <div className="App">
        <h1 className="heading">EMPLOYEE FEEDBACK FORM</h1>
        <form>
          <label>Name : </label>
          <input
            type="text" name="Name1" value={this.state.Name} onChange={this.changeHandler} ></input>
          <br />
          <label className="depment">Department : </label>
          <input type="text" name="Department" value={this.state.Department} onChange={this.changeHandler}></input>
          <br />
          <label className="rating">Rating : </label>
          <input type="number" name="Rating" value={this.state.Rating} onChange={this.changeHandler}></input>
          <br />
          <br />
          <button className="btn btn-warning" onClick={this.submitHandler}> Submit </button>
                 </form>
        <div className="value container">
          {this.state.employees.map((value, index) => {
            return (
              <span className="container box1">
                <span key={index}> Name : {value.Name} | Department : {value.Department} | Rating : {value.Rating} </span>
              </span>
            );
          })}
        </div>
      </div>
    );
  }
}