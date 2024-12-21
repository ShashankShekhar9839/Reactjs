import React from "react";
import styles from "./header.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Header = () => {
  return (
    <div className={styles.header}>
      <h3>The Atomic Blog</h3>
      <div>
        <span>
          🚀 <strong>30 atomic posts found</strong>
        </span>
        <Input />
        <Button />
      </div>
    </div>
  );
};

export default Header;
