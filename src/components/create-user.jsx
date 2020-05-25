import React, { useState } from "react";

const CreateUser = () => {
  const [username, setUsername] = useState("");

  const changeName = e => {
    setUsername(e.target.value);
  };
  const onSubmit = async e => {
    e.preventDefault();
    const data = await fetch("http://localhost:8000/users/add", {
      method: "POST",
      mode: "cors",
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ username })
    });
    const result = await data.json();
    console.log(result);
    console.log(username);
    setUsername("");
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={changeName}
            placeholder="Create Username"
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
