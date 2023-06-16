import React from "react";
import styles from "./movieTitle.module.scss";

const MovieTitle = () => {
  return (
    <section className={styles.TitleWrap}>
      <div className={styles.logo}>무비셀렉터</div>
      <div className={styles.logoCaption}>
        코드스테이츠 팀프로젝트 - 영화 평점 조회사이트
      </div>
      <img
        src="https://user-images.githubusercontent.com/122377401/232440342-4ff41ad6-b3ca-439c-8c71-35e27ddc322c.png"
        alt=""
      />
      <div className={styles.projectItem}>
        <h1>🎨 무비셀렉터</h1>
        <p>애정하는 영화 리뷰 및 평점 등록 사이트</p>
        <p>Team name : 무비셀렉터 ( 영화 평점사이트 제작 ) </p>
        <p> Team members : 주양아(팀장), 이인국, 구성미, 신현중 </p>
      </div>
    </section>
  );
};

export default MovieTitle;
