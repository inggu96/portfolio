import { Divider } from "@mui/material";
import React from "react";
import styles from "./experience.module.scss";

const Experience = () => {
  return (
    <section className={styles.experienceWrap}>
      <div className={styles.experienceContent}>
        <h1>👣 업무경력</h1>
        <Divider />
        <div>
          <div>
            2020.09 ~ 2022.09 일가자인력 부산점 소장 2년4개월간의 근무 ( 새벽 -
            오전 프리랜서 )
          </div>
          <div>
            2020.05 ~ 2022.09 굿모닝간호요양보호사교육원 행정실장 및 광고제작
            업무를 2년4개월간 수행( 오후 프리랜서 )
          </div>
          <div>
            2017.02 ~ 2020.02 제 10전투비행단 수원에 위치한 공군비행단에서
            공군부사관으로써 3년간의 항공정비업무를 수행함
          </div>
        </div>
      </div>
      <div className={styles.experienceContent}>
        <h1>👨🏻‍🎓 교육</h1>
        <Divider />
        <div>
          <div>
            <span className={styles.accent}>
              2023.01 ~ 2023.04 코드스테이츠 프론트엔드과정 4개월 수료
            </span>
          </div>
          <div>2021.11 ~ 2023.06 세계사이버대학교 사회복지학 전공</div>
          <div>
            <span className={styles.accent}>
              2019.06 ~ 2019.11 sbs아카데미컴퓨터아트학원 수원점
              웹퍼블리싱(4개월) 및 포토샵(1개월) 과정 수료
            </span>
          </div>
          <div>2015.02 ~ 2017.03 영진전문대학교 항공정비과 졸업</div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
