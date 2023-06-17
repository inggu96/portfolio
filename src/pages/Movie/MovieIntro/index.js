import React from "react";
import styles from "./movieIntro.module.scss";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const MovieIntro = () => {
  return (
    <section className={styles.MovieIntroWrap}>
      <div className={styles.PlanWrap}>
        <div className={styles.ProjectPlanTitle}>💻 프로젝트 기획의도</div>
        <div className={styles.divider}></div>
        <div className={styles.MovieIntroContent}>
          <p className={styles.MovieIntroItem}>
            기본 숙제같은 주제지만 뻔한 주제에서도 저희사이트에 차별성을
            담기위해서 기획단계때부터 많은 노력을 기울였습니다 이같이 사용자의
            입장에서 편의성을 고려한 기능들을 4가지 구현하였고, 사용자 간의
            취향을 공유함으로써 개발자가 추천하는 것이 아닌 사용자의 트렌드가
            반영될 수 있게 노력했습니다. 또한, 사용자의 트렌드와 별개로 개발자의
            의도가 담긴 각 카테고리별 캐로셀을 구현하여, 개발자가 직접 추천하고
            싶은 영화도 추천할 수 있게 제작하였습니다. 이러한 기능들을 구현하여,
            사용자들이 보다 편리하게 영화 정보를 찾고, 서로의 취향을 공유하며
            더욱 다양한 영화를 경험할 수 있게 노력했습니다.
          </p>
        </div>
      </div>
      <div className={styles.PlanWrap}>
        <div className={styles.ProjectPlanTitle}>💻 프로젝트 담당역할</div>
        <div className={styles.divider}></div>
        <div className={styles.MovieIntroContent}>
          <div className={styles.projectCard}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://user-images.githubusercontent.com/122377401/232974475-da31f4ba-88d7-426d-8052-7e2790befba7.gif"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <p>
                      - react-slick 캐러셀 구현 마우스 오버 시 평점확인 클릭 시
                      해당영화 프리뷰
                    </p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
          <div className={styles.projectCard}>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="200"
                  image="https://user-images.githubusercontent.com/122377401/232974475-da31f4ba-88d7-426d-8052-7e2790befba7.gif"
                  alt="green iguana"
                />
                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    <p>
                      - react-slick 캐러셀 구현 마우스 오버 시 평점확인 클릭 시
                      해당영화 프리뷰
                    </p>
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        </div>
      </div>

      <div className={styles.PlanIntro}>
        <div className={styles.ProjectPlanTitle}>💡 프로젝트 상세 소개</div>
        <div className={styles.divider}></div>
        <div className={styles.MovieIntroContent}>
          <p className={styles.MovieIntroItem}>
            <p>핵심기능 </p>
            <p>
              영화 조회 : 사이트 내 Top10 영화와 카테고리 별 영화를 조회할 수
              있습니다.
            </p>
            <p>
              프리뷰 : 메인페이지에서 포스터 클릭 시, 프리뷰 모달을 통해
              영화정보 및 최신 리뷰 확인 가능합니다.
            </p>
            <p>
              리뷰 작성 및 부가 기능 : 별점&코멘트를 포함하여 영화 리뷰를 남길
              수 있으며, 리뷰에 대해 공감&비공감을 체크할 수 있습니다.
            </p>
            <p>
              관련 영화 추천 : 영화 상세페이지에서 관련 영화를 추천받을 수
              있습니다.
            </p>
            <p>
              좋아요&북마크 : 좋아요, 북마크 기능을 통해 마음에 드는 영화 목록을
              저장할 수 있으며 마이페이지에서 확인 가능합니다.
            </p>
            <p>
              유저 페이지 : 다른 유저의 프로필을 조회하여 소개글과 유저가
              좋아하는 영화, 북마크로 담은 영화, 유저가 남긴 리뷰를 확인할 수
              있습니다.
            </p>
            <p>
              영화 검색 : 영화 목록을 조회 하고 검색 할 수 있습니다.
              영화&회원&리뷰 : 관리자 페이지를 통해 영화 · 회원 · 리뷰 삭제/수정
              가능합니다.
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MovieIntro;
