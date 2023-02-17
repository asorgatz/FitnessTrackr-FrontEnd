import React, { useState } from "react";
import { register } from "../api";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMessage] = useState("");

  const ifError = (response) => {
    if (response.error) {
      setError(response);
    } else {
      setSuccessMessage(response);
    }
  };

  return (
    <div>
      <h3>Register</h3>
      <form
        onSubmit={async (ev) => {
          const result = await register(ev, username, password);
          ifError(result);
        }}
      >
        <input
          placeholder="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
        />
        <button>Register</button>
        {error.message ? <p>{error.message}</p> : <p>{successMsg.message}</p>}
      </form>
    </div>
  );
};

export default Register;
