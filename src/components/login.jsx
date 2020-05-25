import React, { Component, useState } from "react";

const LogIn = () => {
  const [username, setUsername] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    console.log(username);
  };

  const handleInput = e => {
    setUsername(e.target.value);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="name"
          value={username}
          placeholder="Enter username"
          onChange={handleInput}
        />
        <input type="submit" value="Submit" onClick={handleSubmit} />
      </form>
    </div>
  );
};

export default LogIn;
