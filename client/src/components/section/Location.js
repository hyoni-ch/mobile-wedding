import React, { useEffect, useState } from "react";
import { LocationBox } from "../styles/LocationBox";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import Fade from "react-reveal/Fade";
import { PiLockSimpleFill, PiLockSimpleOpenFill } from "react-icons/pi";
import {
  marker,
  kakaonavi,
  navermap,
  tmap,
  grayTop,
} from "../../assets/images";

const { kakao } = window;

export default function Location() {
  const [draggable, setDraggable] = useState(false);

  const imageSrc = marker, // 마커이미지의 주소입니다
    imageSize = new kakao.maps.Size(70, 70), // 마커이미지의 크기입니다
    imageOption = { offset: new kakao.maps.Point(27, 69) };

  const markerImage = new kakao.maps.MarkerImage(
    imageSrc,
    imageSize,
    imageOption
  );

  useEffect(() => {
    const container = document.getElementById("map");
    //마커가 표시 될 위치
    const markerPosition = new kakao.maps.LatLng(
      37.54870566496915,
      126.66766572961546
    );
    const options = {
      center: markerPosition,
      level: 3,
      draggable: draggable,
    };
    const map = new kakao.maps.Map(container, options);

    // 마커를 생성
    const marker = new kakao.maps.Marker({
      position: markerPosition,
      image: markerImage,
    });

    // // 커스텀 오버레이에 표출될 내용
    // const content = `
    //   <div class="customoverlay">
    //     <a href="https://map.kakao.com/?itemId=11394059" target="_blank">
    //       <span class="title">인천아시아드웨딩컨벤션</span>
    //     </a>
    //   </div>
    // `;

    // 커스텀 오버레이 생성
    // new kakao.maps.CustomOverlay({
    //   map: map,
    //   position: markerPosition,
    //   content: content,
    //   yAnchor: 1,
    // });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  }, [draggable]);

  const handleToggleDraggable = () => {
    setDraggable(!draggable);
  };

  return (
    <LocationBox className="flex flex-col bg-gray relative">
      <Fade bottom cascade delay={300}>
        <div className="bg-img-top ">
          <img src={grayTop} alt="" width="100%" className="bg-point" />
        </div>
      </Fade>
      <Fade bottom delay={500}>
        <h2 className="title pointColor">Location</h2>
      </Fade>

      <Fade bottom delay={500}>
        <h3>오시는 길</h3>
        <div
          className="line"
          style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}
        ></div>
      </Fade>
      <Fade bottom cascade delay={500}>
        <div>
          <p>인천 서구 염곡로 725</p>
          <p>인천아시아드주경기장 2,3번 게이트</p>
          <p>인천아시아드웨딩컨벤션 브릴리에홀</p>
        </div>

        <div className="spacerB50">
          <CopyToClipboard
            text="인천 서구 염곡로 725"
            onCopy={() => alert("클립보드에 복사되었습니다.")}
          >
            <button className="btn">주소 복사</button>
          </CopyToClipboard>
        </div>
      </Fade>

      <div className="lock relative fade">
        <button onClick={handleToggleDraggable} className="btn btn-lock ">
          {draggable ? (
            <PiLockSimpleOpenFill size="16" />
          ) : (
            <PiLockSimpleFill size="16" />
          )}
        </button>
      </div>

      <div id="map" className="map fade"></div>

      <div className="navi-bar fade">
        <div className="navi-bar-box">
          <a
            href="https://naver.me/GqNbNfGk"
            rel="noopener"
            target="_blank"
            className="flex"
          >
            <img
              src={navermap}
              draggable="false"
              className="navi-icon navi-icon-naver"
            />
            네이버지도
          </a>
        </div>

        <div className="line2"></div>

        <div className=" navi-bar-box">
          <a
            href="https://kko.to/_3sEw_A7sh"
            rel="noopener"
            target="_blank"
            className="flex"
          >
            <img
              src={kakaonavi}
              draggable="false"
              className="navi-icon navi-icon-kakao"
            />
            카카오내비
          </a>
        </div>

        <div className="line2"></div>

        <div className="navi-bar-box">
          <a
            href="https://surl.tmobiapi.com/782351bf1"
            rel="noopener"
            target="_blank"
            className="flex"
          >
            <img
              src={tmap}
              draggable="false"
              class="navi-icon navi-icon-tmap"
            />
            티맵
          </a>
        </div>
      </div>

      <section className="flex flex-col spacerT spacerB50 w-full">
        <Fade bottom delay={300}>
          <h3 className="text-left w-90">버스</h3>
          <div className="line"></div>
        </Fade>
        <Fade bottom cascade delay={300}>
          <div className="text-left font-size-095 w-90">
            <p>
              - 우성아파트[42717] : 24-1, 70, 인천e음86, 111, 111B, 302, 310
            </p>
            <p>
              - 우성아파트[42718] : 24-1, 70, 595, 인천e음86, 111, 111B, 302,
              302B, 308, 310
            </p>
            <p>- 인천아시아드주경기장(동문)[89354] : 3-2, 71, 인천e음86</p>
            <p>- 인천아시아드주경기장(동문)[89359] : 3-2, 71, 인천e음86</p>
          </div>
        </Fade>
      </section>

      <section className="flex flex-col spacerB50 w-full">
        <Fade bottom delay={300}>
          <h3 className="text-left w-90">지하철</h3>
          <div className="line"></div>
        </Fade>
        <Fade bottom cascade delay={300}>
          <div className="text-left font-size-095 w-90">
            <p>- 인천2호선 아시아드경기장역 3,4번 출구 (도보 18분)</p>
            <p>- 인천2호선 서구청역 4번 출구 (도보 20분)</p>
            <br></br>
            <p>- 셔틀버스 운행 (15분 간격)</p>
            <p className="bus-point pointColor">
              ※ 도로교통상황에 따라 배차 간격이 길어질 수 있습니다.
            </p>
            <p>- 공항철도/인천2호선 검암역 1번 출구 횡단보도 건너편 승차</p>
            <p>- 인천2호선 인천아시아드역 3번 출구 앞 승차</p>
          </div>
        </Fade>
      </section>

      <section className="flex flex-col spacerB w-full">
        <Fade bottom delay={300}>
          <h3 className="text-left w-90">주차</h3>
          <div className="line"></div>
        </Fade>
        <Fade bottom cascade delay={300}>
          <div className="text-left font-size-095 w-90">
            <p>
              - 인천아시아드주경기장 2,3번 게이트 앞 주차장 이용 (주차요금 무료)
            </p>
          </div>
        </Fade>
      </section>
    </LocationBox>
  );
}
