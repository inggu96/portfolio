import React from "react";
import styles from "./home.module.scss";

const Home = () => {
  return (
    <main className={styles.mainWrap}>
      <div className={styles.titleWrap}>
        <p>성장하는 개발자 이인국입니다</p>
        <div className={styles.titleContent}>
          <h1>이인국 | Portfolio</h1>
        </div>
        <div className={styles.introWrap}>
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
            <div>Language : JavaScript</div>
            <div>FrameWork / Library : React , Redux , Mui</div>
            <div>Markup : HTML , CSS , SCSS , Emotion</div>
            <div>Tool : Git , GitHub</div>
          </div>
          <div className={styles.eduWrap}></div>
        </div>
      </div>
      <div className={styles.projectWrap}>
        <div>
          코드스테이츠 팀프로젝트 : 무비셀렉터 제작기간 : 2023.03.13 -
          2023.04.14
        </div>
      </div>
    </main>
  );
};

export default Home;
