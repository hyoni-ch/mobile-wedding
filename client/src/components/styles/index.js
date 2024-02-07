import styled from "styled-components";

const MainBox = styled.div`
  background-color: #fff;
  max-width: 440px;
  margin: 0 auto;
  line-height: 1.5;
  text-align: center;

  .w-full {
    width: 100%;
  }

  .w-90 {
    width: 90%;
  }

  .w-33 {
    width: 33.3333%;
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flex-col {
    flex-direction: column;
  }

  .flex-start {
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .flex-evenly {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  .spacerB {
    padding-bottom: 100px;
  }

  .spacerB50 {
    padding-bottom: 50px;
  }

  .spacerT {
    padding-top: 100px;
  }

  .spacerT50 {
    padding-top: 50px;
  }

  .nanumFont {
    font-family: "NanumSquareRound";
  }

  .sygmaFont {
    font-family: "sygmaFont";
  }

  .notoSansFont {
    font-family: "Noto Sans KR", sans-serif;
  }

  .suitFont {
    font-family: "SUIT-Regular";
  }

  .lineHeight {
    line-height: 2;
  }

  .text-left {
    text-align: left;
  }

  .text-center {
    text-align: center;
  }

  .font-size-095 {
    font-size: 0.95rem;
  }

  .pointColor {
    color: rgb(208, 140, 149);
  }

  .bg-gray {
    --tw-bg-opacity: 1;
    background-color: rgba(249, 249, 249, var(--tw-bg-opacity));
  }

  .bg-pink {
    background-color: #f8f5f3;
  }

  .hidden {
    display: none;
  }

  .relative {
    position: relative;
  }

  .bg-img {
    position: absolute;
    top: -50px;
    left: 0;
    z-index: 1;
  }

  .bg-img-top {
    position: absolute;
    top: -18px;
    left: 0;
    z-index: 1;
  }

  .bg-point {
    // filter: invert(73%) sepia(28%) saturate(714%) hue-rotate(306deg)
    //   brightness(86%) contrast(88%);
  }

  .title {
    //font-family: "iceJaram-Rg";
    font-family: "OG_Renaissance_Secret-Rg";
    text-align: center;
    font-size: 1rem;
    margin: 40px;
  }

  .line {
    width: 90%;
    border: 1px dashed #eee;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  .line2 {
    background-color: #fff;
    border-opacity: 1;
    border-color: rgb(238, 238, 238);
    border: 0 solid #e5e5e5;
    border-right-width: 1px;
    width: 1px;
    height: 1rem;
    margin-left: 0.2rem;
    margin-right: 0.2rem;
  }

  .line3 {
    border: 1px solid #f8f8f8;
    margin-bottom: 0.5rem;
    margin-top: 0.5rem;
  }

  .btn {
    font-family: "SUIT-Regular";
    padding: 0.6rem;
    font-size: 0.925rem;
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 5px;
    cursor: pointer;
    color: #222;
  }
`;

const VideoBox = styled.div`
  height: calc(${window.innerHeight}-84) px;
`;

const FooterBox = styled.footer`
  font-family: "SUIT-Regular";
  padding: 2rem;
  padding-bottom: 4rem;
  font-size: 0.9rem;

  @media screen and (max-width: 440px) {
    font-size: 0.8rem;
  }
`;

export { MainBox, VideoBox, FooterBox };
