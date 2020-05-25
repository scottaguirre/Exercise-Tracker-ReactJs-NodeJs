import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class CreateExercise extends Component {
  state = {
    username: "",
    description: "",
    duration: 0,
    date: new Date(),
    users: ["user test"]
  };

  componentDidMount() {
    axios.get("http://localhost:8000/users/").then(res => {
      if (res.data.length > 0) {
        this.setState({
          users: res.data.map(user => user.username),
          username: res.data[0].username
        });
      }
    });
  }

  changeName = e => {
    this.setState({ username: e.target.value });
  };

  changeDescription = e => {
    this.setState({ description: e.target.value });
  };

  changeDuration = e => {
    this.setState({ duration: e.target.value });
  };

  changeDate = date => {
    this.setState({ date: date });
  };

  onSubmit = e => {
    e.preventDefault();

    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
      users: this.state.users
    };

    axios
      .post("http://localhost:8000/exercises/add/", exercise)
      .then(res => console.log(res.data));

    window.location = "/";
  };

  render() {
    return (
      <div>
        <h3>Create New Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="">Username:</label>
            <select
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.changeName}
            >
              {this.state.users.map((user, ind) => {
                return (
                  <option key={ind} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="form-group">
            <label>Description</label>
            <input
              type="text"
              className="form-control"
              value={this.state.description}
              onChange={this.changeDescription}
            />
          </div>
          <div className="form-group">
            <label>Duration</label>
            <input
              type="text"
              className="form-control"
              value={this.state.duration}
              onChange={this.changeDuration}
            />
          </div>
          <div className="form-group">
            <label>Date:</label>
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.changeDate}
              />
            </div>
          </div>
          <div className="form-group">
            <input
              type="submit"
              value="Create Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default CreateExercise;
