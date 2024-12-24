import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./sidebar.module.css";
import Logo from "../Logo/Logo";
import AppNav from "../../components/AppNav/AppNav";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
    </div>
  );
};

export default SideBar;
