import React from "react";
import PageNav from "../../components/PageNav/PageNav";
import styles from "./home.module.css";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <PageNav />
      <div className={styles.home}>
        <h2>You travel the world.</h2>
        <h2>WorldWise keeps track of your adventures.</h2>
        <p>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </p>
        <Link to="/login">
          <Button label="START TRACKING NOW" />
        </Link>
      </div>
    </>
  );
};

export default Home;
