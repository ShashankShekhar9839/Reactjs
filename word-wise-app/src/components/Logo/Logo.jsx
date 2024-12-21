import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./logo.module.css";

const Logo = () => {
  return (
    <>
      <NavLink to="/" className={styles.anchor}>
        <div className={styles.logo}>
          <img src="https://img.freepik.com/free-vector/earth-globe-design_1053-559.jpg?t=st=1734590050~exp=1734593650~hmac=c6e98e7b566e03208a3c74644837526b3bc620082228b2acbfeff7fe9821a635&w=740" />
          <h2>WorldWise</h2>
        </div>
      </NavLink>
    </>
  );
};

export default Logo;
