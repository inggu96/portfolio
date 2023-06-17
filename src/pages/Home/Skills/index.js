import React from "react";
import { Divider } from "../../../components/Common";
import styles from "./skills.module.scss";

const Skills = () => {
  return (
    <section className={styles.skilsWrap}>
      <h1>💻 기술 스택</h1>
      <Divider />
      <div className={styles.skillsItemWrap}>
        <div className={styles.skillsItemLeft}>
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
        <div className={styles.skillsItemRight}>
          <div>
            <p>
              virutal DOM의 장단점을 알고 컴포넌트 재사용 에 익숙하고 기본적인
              hook 사용에 능숙합니다. Context API 를 이용하여 다크테마 를
              구현해본 경험이 있습니다. ErrorBoundary 와 Suspense 를 활용하여
              로딩과 에러에 대한 처리를 분리한 경험이 있습니다.
            </p>
          </div>
          <div>
            <p>
              scss 함수형 문법을 사용하여 가독성이 높은 css와 색상을 전역으로
              관리가능합니다
            </p>
          </div>
          <div>
            <p>
              es6 문법을 사용하는 것에 익숙하고 JavaScript의 동작 원리 를
              이해하고 있습니다. 브라우저 환경과 Node.js 환경의 차이점 을 알고
              있습니다.
            </p>
          </div>
          <div>
            <p>redux를 사용해 컴포넌트별 State를 전역으로 관리 가능합니다</p>
          </div>
          <div>
            <p>
              협업도구인 git과 gitHub를 능숙하게 사용하며 코드와 브랜츠를
              원활하게 관리하고 공유할수 있습니다 !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
