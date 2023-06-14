import React from "react";
import styles from "./project.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
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
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image="https://user-images.githubusercontent.com/122377401/232440342-4ff41ad6-b3ca-439c-8c71-35e27ddc322c.png"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  팀프로젝트 : 무비셀렉터
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  코드스테이츠 팀프로젝트 : 무비셀렉터 제작기간 : 2023.03.13 -
                  2023.04.14 <p>애정하는 영화 리뷰 및 평점 등록 사이트</p>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
        <div className={styles.projectItem}>
          <h1>무비셀렉터</h1>
          <p>애정하는 영화 리뷰 및 평점 등록 사이트</p>
          <p>Team name : 무비셀렉터 ( 영화 평점사이트 제작 ) </p>
          <p> Team members : 주양아(팀장), 이인국, 구성미, 신현중 </p>
          <p>
            Link :
            (http://test123bukit.s3-website.ap-northeast-2.amazonaws.com/)
          </p>
          <p> github readme 제작 : 이인국</p>
          <p>주요기능 </p>
          <p>
            영화 조회 : 사이트 내 Top10 영화와 카테고리 별 영화를 조회할 수
            있습니다.
          </p>
          <p>
            프리뷰 : 메인페이지에서 포스터 클릭 시, 프리뷰 모달을 통해 영화정보
            및 최신 리뷰 확인 가능합니다.{" "}
          </p>
          <p>
            리뷰 작성 및 부가 기능 : 별점&코멘트를 포함하여 영화 리뷰를 남길 수
            있으며, 리뷰에 대해 공감&비공감을 체크할 수 있습니다.{" "}
          </p>
          <p>
            관련 영화 추천 : 영화 상세페이지에서 관련 영화를 추천받을 수
            있습니다.
          </p>
          <p>
            좋아요&북마크 : 좋아요, 북마크 기능을 통해 마음에 드는 영화 목록을
            저장할 수 있으며 마이페이지에서 확인 가능합니다.{" "}
          </p>
          <p>
            유저 페이지 : 다른 유저의 프로필을 조회하여 소개글과 유저가 좋아하는
            영화, 북마크로 담은 영화, 유저가 남긴 리뷰를 확인할 수 있습니다.{" "}
          </p>
          <p>
            영화 검색 : 영화 목록을 조회 하고 검색 할 수 있습니다.
            영화&회원&리뷰 : 관리자 페이지를 통해 영화 · 회원 · 리뷰 삭제/수정
            가능합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Project;
