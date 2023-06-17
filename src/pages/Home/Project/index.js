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
                height="200"
                width="250"
                image="https://user-images.githubusercontent.com/122377401/232440342-4ff41ad6-b3ca-439c-8c71-35e27ddc322c.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  무비셀렉터
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  코드스테이츠 팀프로젝트
                  <p>2023.03.13 - 2023.04.14 </p>
                  <p>애정하는 영화 리뷰 및 평점 등록 사이트</p>
                  <p>
                    <Stack direction="row" spacing={1}>
                      <Chip label="React" color="primary" />
                      <Chip label="JavaScript" color="primary" />
                    </Stack>
                  </p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={styles.projectCaption}>
          <p className={styles.accent}>무비셀렉터</p>
          <div className={styles.dividerM}></div>
          <p>
            코드스테이츠에서 처음으로 진행하게된 팀 프로젝트이며 총 1달동안
            진행하였습니다
          </p>
          <p>
            내용 : 영화 평점을 기록하는 사이트이며 기본적인 주제임에도
            타과제들과 차별화를 위해 프리뷰모달 등 기획단계에서부터 많은 노력을
            기울였습니다
          </p>
          <p>
            <p className={styles.accentM}>
              Language : <span>JavaScript</span>
            </p>
            <p className={styles.accentM}>
              FrameWork / Library : <span>React</span> <span>Redux </span>
              <span>Mui</span>
            </p>
            <p className={styles.accentM}>
              Markup : <span>HTML , CSS , SCSS , Emotion</span>
            </p>
            <p className={styles.accentM}>
              Tool : <span>Git , GitHub</span>
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
