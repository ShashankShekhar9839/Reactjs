import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageNav from "../../components/PageNav/PageNav";
import Button from "../../components/Button/Button";
import { useAuth } from "../../contexts/FakeAuthContext";
import styles from "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("shashank@example.com");
  const [password, setPassword] = useState("qwerty");

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (isAuthenticated) navigate("/app", { replace: true });
    },
    [isAuthenticated, navigate]
  );

  function handleSubmit(e) {
    e.preventDefault();

    if (email && password) login(email, password);
  }
  return (
    <>
      <PageNav />
      <div className={styles.loginWrapper}>
        <h2>This is a fake Authentication 😊</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.inpWrapper}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>

          <div className={styles.inpWrapper}>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <Button type="primary" label="Login" />
        </form>
      </div>
    </>
  );
};

export default Login;
