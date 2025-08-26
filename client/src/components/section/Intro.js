import React from "react";
import { IntroBox } from "../styles/IntroBox";
import { intro_image1 } from "../../assets/images";

export default function Intro() {
  return (
    <IntroBox className="textAlignCenter bg-gray">
      <section className="introTop">
        <div className="wedding-name">손철수</div>
        <div className="wedding-date flex flex-col">
          {/* <img src={date_image} alt="날짜 이미지" width="65px" /> */}
          <div className="wedding-date-num wedding-date-num-1">03</div>
          <div className="wedding-date-line"></div>
          <div className="wedding-date-num wedding-date-num-2">24</div>
        </div>
        <div className="wedding-name">조영희</div>
      </section>

      <section>
        <img
          src={intro_image1}
          alt="인트로 이미지"
          width="100%"
          max-width="440px"
        />
        <ul className="lineHeight wedding-about">
          <li>2024년 3월 24일 일요일 오전 11시 30분</li>
          <li>인천아시아드웨딩컨벤션 브릴리에홀</li>
        </ul>
      </section>
    </IntroBox>
  );
}
