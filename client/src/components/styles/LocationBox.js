import styled from "styled-components";

const LocationBox = styled.div`
  @font-face {
    font-family: "NanumSquareRound";
    src: url("https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_two@1.0/NanumSquareRound.woff")
      format("woff");
    font-weight: normal;
    font-style: normal;
  }

  .map {
    width: 90%;
    height: 300px;
  }

  // 커스텀 오버레이
  // .customoverlay {
  //   position: relative;
  //   bottom: 85px;
  //   border-radius: 10px;
  // }
  // .customoverlay:nth-of-type(n) {
  //   border: 0;
  //   box-shadow: 0px 1px 2px #888;
  // }
  // .customoverlay a {
  //   display: block;
  //   text-decoration: none;
  //   text-align: center;
  //   border-radius: 10px;
  //   font-size: 14px;
  //   font-weight: bold;
  //   color: black;
  //   overflow: hidden;
  //   background: rgba(255, 255, 255, 1)
  //     url(https://drive.google.com/uc?id=1JQxS92rW-m4ikQU1Dl9HaHhZ-9Khc61i)
  //     no-repeat right 10px;
  // }
  // .customoverlay .title {
  //   font-family: "NanumSquareRound";
  //   text-align: center;
  //   font-size: 15px;
  //   font-weight: 400;
  //   margin: 15px 35px 12px 22px;
  //   display: block;
  //   color: rgb(208, 140, 149);
  // }

  // .customoverlay:hover {
  //   scale: 1.05;
  // }

  // .customoverlay:after {
  //   content: "";
  //   position: absolute;
  //   margin-left: -12px;
  //   left: 50%;
  //   bottom: -12px;
  //   width: 22px;
  //   height: 12px;
  //   background: url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png");
  // }

  .lock {
    width: 100%;
    padding-bottom: 1rem;
    .btn-lock {
      position: absolute;
      bottom: 0.5rem;
      left: 1.3rem;
      padding-bottom: 5px;
    }
  }

  .navi-bar {
    width: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "SUIT-Regular";
    margin-top: 1.2rem;
    padding: 12px 0px 12px 0px;
    border: 1px solid #eee;
    border-radius: 7px;
    gap: 0.5rem;
    background-color: #fff;

    .navi-bar-box {
      width: 33.3333333%;
    }

    .navi-icon {
      padding-right: 5px;
    }

    .navi-icon-naver {
      width: 1.4rem;
    }

    .navi-icon-kakao {
      width: 1.2rem;
    }

    .navi-icon-tmap {
      width: 1rem;
    }
  }
  .bus-point {
    font-size: 0.8rem;
    padding-left: 1rem;
  }

  @media screen and (max-width: 400px) {
    .navi-bar {
      font-size: 0.8rem;
    }
  }
`;

export { LocationBox };
