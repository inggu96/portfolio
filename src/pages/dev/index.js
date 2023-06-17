import React from "react";
import { ScrollProgress } from "../../components/Common";
import styles from "./dev.module.scss";

const LogoAnimation = () => {
  return (
    <div className={styles.ScrollWrap}>
      <ScrollProgress />
    </div>
  );
};

export default LogoAnimation;
