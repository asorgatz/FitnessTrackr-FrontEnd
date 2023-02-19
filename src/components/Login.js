import React, { useState } from "react";
import { login } from "../api";

const Login = (props) => {
  const setUser = props.setUser;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const ifError = (user) => {
    if (!user.token) {
      setError(user);
    }
  };

  return (
    <div>
      <h3>Login</h3>
      <form
        onSubmit={async (ev) => {
          const user = await login(ev, username, password);
          if (!user.error) {
            setUser(user.user);
          } else {
            ifError(user);
          }
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
          <button>Login</button>
          {error.message && <p>{error.message}</p>}
      </form>
    </div>
  );
};

export default Login;
