import React from "react";
import Project from "./Project";
import Intro from "./Intro";
import Title from "./Title";
import styles from "./home.module.scss";
import { motion } from "framer-motion";
import Skills from "./Skills";
import Experience from "./Experience";

const Home = () => {
  return (
    <main className={styles.homeWrap}>
      <motion.div animate={{ y: 0 }} initial={{ y: 150 }}>
        <Title />
        <Intro />
        <Skills />
        <Experience />
        <Project />
      </motion.div>
    </main>
  );
};

export default Home;
