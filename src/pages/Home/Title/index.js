import React, { useEffect, useState } from "react";
import CodeIcon from "@mui/icons-material/Code";

import CodeOffIcon from "@mui/icons-material/CodeOff";
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
        <span>👋</span>
        <p>
          지속적인 성장과 직관적인 UI개발을 즐기는 프론트엔드개발자 이인국입니다
          !<br />
          부족함을 매워가며 얻는 성취감과 함께 즐기면서 나아가겠습니다 !
          <br />
        </p>
      </div>
    </section>
  );
};

export default Title;
