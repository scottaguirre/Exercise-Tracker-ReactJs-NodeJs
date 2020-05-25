import React, { Component, useState } from "react";

const SignUp = () => {
  const [username, setUsername] = useState("");

  const handleInput = e => {
    setUsername(e.target.value);
  };

  const handleSignUp = async e => {
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
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          value={username}
          placeholder="Enter username"
          onChange={handleInput}
        />
        <input type="submit" value="Sign Up" onClick={handleSignUp} />
      </form>
    </div>
  );
};

export default SignUp;
