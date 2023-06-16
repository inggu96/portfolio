import React from "react";
import styles from "./intro.module.scss";

const Intro = () => {
  return (
    <section className={styles.introWrap}>
      <div className={styles.introContent}>
        <span>introductuon</span>
        <div>Name : 이인국</div>
        <div>Birth Date : 1996/08/24</div>
        <div>Education : 영진전문대학 항공정비과 졸업</div>
      </div>
      <div className={styles.introContent}>
        <span>Contact</span>
        <div>Phone : 010-3686-4232</div>
        <div>Email : dlsrnr403@gmail.com</div>
        <div>gitHub : https://github.com/inggu96</div>
      </div>
      <div className={styles.introContent}>
        <span>skill</span>
        <div>
          Language : <span>JavaScript</span>
        </div>
        <div>
          FrameWork / Library : <span>React</span> <span>Redux </span>
          <span>Mui</span>
        </div>
        <div>
          Markup : <span>HTML , CSS , SCSS , Emotion</span>
        </div>
        <div>
          Tool : <span>Git , GitHub</span>
        </div>
      </div>
    </section>
  );
};

export default Intro;
