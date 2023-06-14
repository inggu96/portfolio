import React from "react";
import styles from "./title.module.scss";

const Title = () => {
  return (
    <section className={styles.titleWrap}>
      <p>성장하는 개발자 이인국입니다</p>
      <div className={styles.titleContent}>
        <img
          src="https://user-images.githubusercontent.com/122377401/233068509-b6392661-ad76-4bf9-a00f-f76ee0b537d0.jpeg"
          alt=""
        />
        <h1>
          이인국 <br /> Web Frontend Developer<span>.</span>
        </h1>
      </div>
    </section>
  );
};

export default Title;
