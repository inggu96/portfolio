import React from "react";
import Project from "./Project";
import Intro from "./Intro";
import Experience from "./Experience";
import Title from "./Title";
import styles from "./home.module.scss";
import { motion } from "framer-motion";
import Skills from "./Skills";

const Home = () => {
  return (
    <main className={styles.homeWrap}>
      <motion.div animate={{ y: 0 }} initial={{ y: 150 }}>
        <Title />
        <Intro />
        <Experience />
        <Skills />
        <Project />
      </motion.div>
    </main>
  );
};

export default Home;
