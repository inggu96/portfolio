import React from "react";
import styles from "./intro.module.scss";
import PersonAddAltRoundedIcon from "@mui/icons-material/PersonAddAltRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AddLocationAltRoundedIcon from "@mui/icons-material/AddLocationAltRounded";
import AddIcCallRoundedIcon from "@mui/icons-material/AddIcCallRounded";
import MarkEmailReadRoundedIcon from "@mui/icons-material/MarkEmailReadRounded";
import CreateRoundedIcon from "@mui/icons-material/CreateRounded";

const Intro = () => {
  return (
    <section className={styles.introWrap}>
      <div className={styles.introContent}>
        <span>
          <PersonAddAltRoundedIcon
            style={{ fontSize: "42px" }}
            color="primary"
          />
        </span>
        <div>
          <h1>이름</h1>
          <p>이인국</p>
        </div>
      </div>
      <div className={styles.introContent}>
        <span>
          <CalendarMonthRoundedIcon
            color="primary"
            style={{ fontSize: "42px" }}
          />
        </span>
        <div>
          <h1>생년월일</h1>
          <p>1996/08/24</p>
        </div>
      </div>
      <div className={styles.introContent}>
        <span>
          <AddLocationAltRoundedIcon
            color="primary"
            style={{ fontSize: "42px" }}
          />
        </span>
        <div>
          <h1>주소지</h1>
          <p>서울특별시 종로구</p>
        </div>
      </div>
      <div className={styles.introContent}>
        <span>
          <AddIcCallRoundedIcon color="primary" style={{ fontSize: "42px" }} />
        </span>
        <div>
          <h1>전화번호</h1>
          <p>010-3696-4232</p>
        </div>
      </div>
      <div className={styles.introContent}>
        <span>
          <MarkEmailReadRoundedIcon
            color="primary"
            style={{ fontSize: "42px" }}
          />
        </span>
        <div>
          <h1>이메일</h1>
          <p>dlsrnr403@gmail.com</p>
        </div>
      </div>
      <div className={styles.introContent}>
        <span>
          <CreateRoundedIcon color="primary" style={{ fontSize: "42px" }} />
        </span>
        <div>
          <h1>학력</h1>
          <p>
            영진전문대학 <br />
            (항공정비과)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
