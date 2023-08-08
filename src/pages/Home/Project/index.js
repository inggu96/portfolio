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
  const goDemo = () => {
    navigate("http://test123bukit.s3-website.ap-northeast-2.amazonaws.com/");
  };
  const goGit = () => {
    navigate("http://test123bukit.s3-website.ap-northeast-2.amazonaws.com/");
  };
  const goDetail = () => {
    navigate("/movie");
  };
  return (
    <section className={styles.projectWrap}>
      <h1>💻 프로젝트</h1>
      <Divider />
      <div className={styles.cardWrap}>
        <div className={styles.projectContent}>
          <div className={styles.projectCard}>
            <Card sx={{ maxWidth: 450 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  width="250"
                  image="https://user-images.githubusercontent.com/122377401/259013017-1935dea4-2631-4279-b79b-e8cc69eb6e20.jpeg"
                  alt="Movie"
                />
                <div className={styles.buttonWrap}>
                  <div className={styles.goOut}>
                    <button>
                      <a href="https://github.com/inggu96/select_movie">
                        <img
                          src="https://cdn.icon-icons.com/icons2/509/PNG/512/Github_icon-icons.com_49946.png"
                          alt="icon"
                          width="30"
                          height="30"
                        />
                      </a>
                    </button>
                  </div>
                  <div>
                    <button className={styles.goDetail}>
                      <a href="http://test123bukit.s3-website.ap-northeast-2.amazonaws.com/">
                        👉 보러가기
                      </a>
                    </button>
                  </div>
                </div>

                <CardContent>
                  <div className={styles.projectTitle}>
                    <Typography gutterBottom variant="h5" component="div">
                      <p>무비셀렉터 ( 팀프로젝트 )</p>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <p>제작기간 : 2023.03.13 - 2023.04.14</p>
                      <div className={styles.projectText}>
                        <p> 🎬 영화 평점 및 리뷰 등록사이트 </p>
                        <p>메인페이지</p>
                        <p>- react-slick 캐러셀을 구현해 포스터 슬라이드화 </p>
                        <p>- 클릭 시 해당영화 프리뷰모달 안내 </p>
                        <p>프리뷰 기능</p>
                        <p>- 포스터 클릭시 프리뷰구현 좋아요/북마크기능 </p>
                        <p>- 기능상세내용, 리뷰미리보기 , 평균평점기능 구현</p>
                      </div>
                      <p className={styles.accentM}>
                        <span>React</span> <span>JavaScript</span>
                        <span>Scss</span>
                        <span>Framer-motion</span> <span>Recoil</span>
                        <span>Axios</span>
                      </p>
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>{" "}
        <div className={styles.projectContent}>
          <div className={styles.projectCard}>
            <Card sx={{ maxWidth: 450 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="250"
                  width="250"
                  image="https://user-images.githubusercontent.com/122377401/259013028-a5553ffc-4ea2-4762-abd5-1ca0abc6fe4f.jpeg"
                  alt="Movie"
                />
                <div className={styles.buttonWrap}>
                  <div className={styles.goOut}>
                    <button>
                      <a href="https://github.com/inggu96/select_movie">
                        <img
                          src="https://cdn.icon-icons.com/icons2/509/PNG/512/Github_icon-icons.com_49946.png"
                          alt="icon"
                          width="30"
                          height="30"
                        />
                      </a>
                    </button>
                  </div>
                  <div>
                    <button className={styles.goDetail}>
                      <a href="http://applemusic.s3-website.ap-northeast-2.amazonaws.com/">
                        👉 보러가기
                      </a>
                    </button>
                  </div>
                </div>

                <CardContent>
                  <div className={styles.projectTitle}>
                    <Typography gutterBottom variant="h5" component="div">
                      <p>위플리 ( 개인프로젝트 )</p>
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      <p>제작기간 : 2023.05.20 - 2023.07.31</p>
                      <div className={styles.projectText}>
                        <p> 🎬 유튜브 영상 뮤직플레이어 </p>
                        <p>- Youtube Api 호출해 영상 구현</p>
                        <p>- Api를 바탕으로 뮤직플레이어 기능 </p>
                        <p>- 개발자 추천리스트 모달구현 </p>
                      </div>
                      <p className={styles.accentM}>
                        <span>React</span> <span>JavaScript</span>
                        <span>Redux</span>
                        <span>Framer-motion</span> <span>Scss</span>
                        <span>Axios</span> <span>Mui</span>{" "}
                        <span>Youtube Api</span>
                      </p>
                    </Typography>
                  </div>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
