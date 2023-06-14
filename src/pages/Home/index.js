import React from "react";
import Project from "./Project";
import Intro from "./Intro";
import Experience from "./Experience";
import Title from "./Title";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <main className={styles.homeWrap}>
      <Title />
      <Intro />
      <Experience />
      <Project />
    </main>
  );
};

export default Home;
