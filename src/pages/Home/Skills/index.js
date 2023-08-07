import { motion } from "framer-motion";
import React from "react";
import { Divider } from "../../../components/Common";
import styles from "./skills.module.scss";

const Skills = () => {
  return (
    <motion.div>
      <section className={styles.skilsWrap}>
        <h1>💻 기술 스택</h1>
        <Divider />
        <div className={styles.skillsItemWrap}>
          <div className={styles.skillsTitle}>
            <p>FrameWork & Library</p>
          </div>
          <div className={styles.skillsItem}>
            <div>
              <img
                src="https://techstack-generator.vercel.app/react-icon.svg"
                alt="icon"
                width="65"
                height="65"
              />
              <p>React</p>
            </div>
            <div>
              <img
                src="https://techstack-generator.vercel.app/sass-icon.svg"
                alt="icon"
                width="65"
                height="65"
              />
              <p>Scss</p>
            </div>
            <div>
              <img
                src="https://techstack-generator.vercel.app/js-icon.svg"
                alt="icon"
                width="65"
                height="65"
              />
              <p>JavaScript</p>
            </div>
            <div>
              <img
                src="https://techstack-generator.vercel.app/redux-icon.svg"
                alt="icon"
                width="65"
                height="65"
              />
              <p>Redux</p>
            </div>
            <div>
              <img
                src="https://techstack-generator.vercel.app/github-icon.svg"
                alt="icon"
                width="65"
                height="65"
              />
              <p>Git & GitHub</p>
            </div>

            <div>
              <img
                src="https://techstack-generator.vercel.app/react-icon.svg"
                alt="icon"
                width="65"
                height="65"
              />
              <p>React</p>
            </div>
            <div>
              <img
                src="https://techstack-generator.vercel.app/sass-icon.svg"
                alt="icon"
                width="65"
                height="65"
              />
              <p>Scss</p>
            </div>
            <div>
              <img
                src="https://techstack-generator.vercel.app/js-icon.svg"
                alt="icon"
                width="65"
                height="65"
              />
              <p>JavaScript</p>
            </div>
            <div>
              <img
                src="https://techstack-generator.vercel.app/redux-icon.svg"
                alt="icon"
                width="65"
                height="65"
              />
              <p>Redux</p>
            </div>
            <div>
              <img
                src="https://techstack-generator.vercel.app/github-icon.svg"
                alt="icon"
                width="65"
                height="65"
              />
              <p>Git & GitHub</p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Skills;
