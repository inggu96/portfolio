import { Divider } from "@mui/material";
import React from "react";
import styles from "./experience.module.scss";

const Experience = () => {
  return (
    <section className={styles.experienceWrap}>
      <div className={styles.experienceContent}>
        <h1>👣 주요경력</h1>
        <Divider />
        <div>
          <p>2023.01 ~ 2023.04 코드스테이츠 프론트엔드과정 4개월 수료</p>
          <p>2020.05 ~ 2022.09 일가자인력 부산점 소장 2년 4개월간의 근무</p>
          <p>2017.02 ~ 2020.02 제 10전투비행단 공군부사관 3년 항공정비업무</p>
          <p>
            2019.06 ~ 2019.11 sbs아카데미컴퓨터학원 퍼블리싱(4개월)과정 수료
            <br />
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
