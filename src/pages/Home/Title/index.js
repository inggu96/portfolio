import React, { useEffect, useState } from "react";
import styles from "./title.module.scss";

const Title = () => {
  const TypingWord = "Front Developer";
  const [blogTitle, setBlogTitle] = useState("");
  const [count, setCount] = useState(0);
  useEffect(() => {
    const typingInterval = setInterval(() => {
      setBlogTitle((prevTitleValue) => {
        let result = prevTitleValue
          ? prevTitleValue + TypingWord[count]
          : TypingWord[0];
        setCount(count + 1);

        if (count >= TypingWord.length) {
          setCount(0);
          setBlogTitle("");
        }

        return result;
      });
    }, 200);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <section className={styles.titleWrap}>
      <div className={styles.titleContent}>
        <div className={styles.titleItem}>
          <img
            className={styles.titleImg}
            src="https://user-images.githubusercontent.com/122377401/233068509-b6392661-ad76-4bf9-a00f-f76ee0b537d0.jpeg"
            alt=""
          />
        </div>
        <div className={styles.titleItem}>
          <h1>이인국</h1>
          <p>{blogTitle}</p>
        </div>
      </div>
      <div className={styles.titleCaption}>
        <p>
          <span>👋</span> 퍼블리셔와 프론트엔드를 공부하며 지속적으로 성장하는
          개발자 이인국입니다!
        </p>
        <p>
          <span></span>{" "}
        </p>
        <p>
          <a href="https://github.com/inggu96">
            💻 GitHub : https://github.com/inggu96
          </a>
        </p>
        <p>
          <a href="https://velog.io/@96_inggu">
            🕶️ Blog : https://velog.io/@96_inggu
          </a>
        </p>
      </div>
    </section>
  );
};

export default Title;
