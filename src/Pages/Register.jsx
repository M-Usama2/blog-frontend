import React, { useState } from "react";
import { Navigate } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function register(e) {
    e.preventDefault();
    const res = await fetch("https://blogger-z3fl.onrender.com/api/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials: "include",
    });

    if (res.ok) {
      setRedirect(true);
    } else {
      alert("Wrong Credentials");
    }
  }

  if (redirect) {
    return <Navigate to={"/login"} />;
  }

  return (
    <form onSubmit={register} className="register">
      <h1>Register</h1>
      <input
        onChange={(e) => setUsername(e.target.value)}
        type="text"
        value={username}
        placeholder="Enter your Username"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your Password"
      />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
