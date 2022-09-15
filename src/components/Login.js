import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUserId, usersDb }) => {
  const navigate = useNavigate();

  // states for store users, user username and password
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrror] = useState(false);

  //  handle login function check username and password and then logged in user
  const handleLogin = () => {
    usersDb.map((user) => {
      if (
        user.userData.username === username &&
        user.userData.password === password
      ) {
        setErrror(false);
        setUserId(user.userData.id);
        navigate("/main");
      } else if (usersDb.length) {
        setErrror(true);
        setUsername("");
        setPassword("");
      }
      return 0;
    });
  };

  return (
    <div className="login-container">
      <form className="login-form">
        {/* alert div for wrong username or password ------------------*/}
        {error ? (
          <div
            className="alert alert-warning alert-dismissible fade show"
            role="alert"
          >
            <strong>Wrong username or password !</strong> You should check your
            username or password
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
        ) : (
          ""
        )}
        {/* --------------------alert box----------------------------- */}
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Enter your Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Enter your Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2">
          <button
            onClick={handleLogin}
            className="btn btn-primary"
            type="button"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
