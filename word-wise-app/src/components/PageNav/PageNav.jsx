import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./pagenav.module.css";
import Logo from "../Logo/Logo";

const PageNav = () => {
  return (
    <div className={styles.nav}>
      <Logo />
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
