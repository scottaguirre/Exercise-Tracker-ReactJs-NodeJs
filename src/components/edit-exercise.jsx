import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

class EditExercise extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8000/exercises/" + this.props.match.params.id)
      .then(res => {
        console.log(res.data.username);
        if (res.data !== null) {
          this.setState({
            username: res.data.username,
            description: res.data.description,
            duration: res.data.duration,
            date: new Date()
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
      .post(
        "http://localhost:8000/exercises/update/" + this.props.match.params.id,
        exercise
      )
      .then(res => console.log(res.data));

    window.location = "/";
  };

  render() {
    return (
      <div>
        <h3>Edit Exercise Log</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="">Username:</label>
            <input
              ref="userInput"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.changeName}
            ></input>
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
              value="Update Exercise Log"
              className="btn btn-primary"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default EditExercise;
