import React from "react";
import styles from "./sidebar.module.css";
import Logo from "../Logo/Logo";

const SideBar = () => {
  return (
    <div className={styles.sidebar}>
      <Logo />
    </div>
  );
};

export default SideBar;
