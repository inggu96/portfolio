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

const Project = () => {
  const navigate = useNavigate();

  const CardMove = () => {
    navigate("/movie");
  };
  return (
    <section className={styles.projectWrap}>
      <div>Project</div>
      <p> 팀프로젝트 1개 , 개인프로젝트 1개</p>

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
      </div>
    </section>
  );
};

export default Project;
