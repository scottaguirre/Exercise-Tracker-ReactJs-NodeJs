import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ExercisesList = () => {
  const [lists, setLists] = useState([]);

  const renderList = () => {
    axios
      .get("http://localhost:8000/exercises/")
      .then(res => setLists(res.data));
  };

  useEffect(() => {
    renderList();
  });

  const handleDelete = id => {
    axios.delete("http://localhost:8000/exercises/" + id).then(res => {
      if (res === "Exercise deleted.") {
        setLists(lists.filter(list => list._id !== id));
      }
    });

    console.log(id);
  };

  return (
    <div>
      <br></br>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Username</th>
            <th scope="col">Description</th>
            <th scope="col">Duration</th>
            <th scope="col">Date</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {lists.map(list => {
            return (
              <tr key={list._id}>
                <td>{list.username}</td>
                <td>{list.description}</td>
                <td>{list.duration}</td>
                <td>{list.date.substring(0, 10)}</td>
                <td>
                  <Link to={"/edit/" + list._id}>
                    <button className="btn btn-sm btn-success mr-2">
                      Edit
                    </button>
                  </Link>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={() => handleDelete(list._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ExercisesList;
