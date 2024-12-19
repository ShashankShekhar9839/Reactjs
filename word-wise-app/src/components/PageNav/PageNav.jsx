import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./pagenav.module.css";

const PageNav = () => {
  return (
    <div className={styles.nav}>
      <NavLink to="/">
        <div className={styles.logo}>
          <img src="https://img.freepik.com/free-vector/earth-globe-design_1053-559.jpg?t=st=1734590050~exp=1734593650~hmac=c6e98e7b566e03208a3c74644837526b3bc620082228b2acbfeff7fe9821a635&w=740" />
          <h2>WorldWise</h2>
        </div>
      </NavLink>
      <div>
        <ul className={styles.navList}>
          <li>
            <NavLink
              to="/product"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Product
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/pricing"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Pricing
            </NavLink>
          </li>{" "}
          <li>
            <NavLink
              to="/login"
              className={({ isActive }) => (isActive ? styles.active : "")}
            >
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PageNav;
