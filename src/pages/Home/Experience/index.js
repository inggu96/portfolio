import { motion } from "framer-motion";
import React from "react";
import { Divider } from "../../../components/Common";
import styles from "./experience.module.scss";

const Experience = () => {
  return (
    <motion.div>
      <section className={styles.skilsWrap}>
        <h1>💻 주요경력</h1>
        <Divider />
        <div className={styles.skillsItemWrap}>
          <div className={styles.skillsTitle}>
            <p>FrameWork & Library</p>
          </div>
          <div className={styles.skillsItem}></div>
        </div>
      </section>
    </motion.div>
  );
};

export default Experience;
