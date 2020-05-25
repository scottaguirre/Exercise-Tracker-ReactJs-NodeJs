import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import EditExercise from "./components/edit-exercise";
import CreateExercise from "./components/create-exercise";
import Navbar from "./components/navbar";
import ExercisesList from "./components/exercises-list";
import CreateUser from "./components/create-user";
import "./App.css";

class App extends Component {
  state = { name: "edwin" };

  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br />
          <Route exact path="/" component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
        </div>
      </Router>
    );
  }
}

export default App;
