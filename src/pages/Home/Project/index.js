import React from "react";
import styles from "./project.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import { useNavigate } from "react-router-dom";
import { Divider } from "../../../components/Common";

const Project = () => {
  const navigate = useNavigate();

  const CardMove = () => {
    navigate("/movie");
  };
  return (
    <section className={styles.projectWrap}>
      <h1>💻 프로젝트</h1>
      <Divider />
      <div className={styles.projectContent}>
        <div onClick={CardMove} className={styles.projectCard}>
          <Card sx={{ maxWidth: 450 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="300"
                width="250"
                image="https://user-images.githubusercontent.com/122377401/232440342-4ff41ad6-b3ca-439c-8c71-35e27ddc322c.png"
                alt="green iguana"
              />
            </CardActionArea>
          </Card>
        </div>
        <div className={styles.projectTitle}>
          <p>무비셀렉터</p>
          <p> 🎬 영화 평점 및 리뷰 등록사이트 </p>
          <p> Framework : React , Javascript</p>
          <p>Library : Scss ,Framer-motion , Recoil , Axios ,AWS S3 </p>
          <p>
            Link :👉
            <a href="http://test123bukit.s3-website.ap-northeast-2.amazonaws.com/">
              aa
            </a>
          </p>
          <p>
            gitHub :👉
            <a href="https://github.com/inggu96/select_movie">aa</a>
          </p>
          <p>
            Language : <span>JavaScript</span>
          </p>
          <p className={styles.accentM}>
            FrameWork / Library : <span>React</span> <span>Redux </span>
            <span>Mui</span>
          </p>
          <p className={styles.accentM}>
            Tool : <span>Git , GitHub</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
