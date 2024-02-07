import React, { useEffect } from "react";
import { ShareBox } from "../styles/ShareBox";
import Fade from "react-reveal/Fade";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import { grayTop } from "../../assets/images";

const { Kakao } = window;
export default function Share() {
  // 배포한 자신의 사이트
  const realUrl = "https://mobile-wedding-chh.netlify.app";
  // 로컬 주소 (localhost 3000 같은거)
  const resultUrl = window.location.href;

  // 재랜더링시에 실행되게 해준다.
  useEffect(() => {
    // init 해주기 전에 clean up 을 해준다.
    Kakao.cleanup();
    // 자신의 js 키를 넣어준다.
    Kakao.init(process.env.REACT_APP_KAKAOMAP_API_KEY);
    // 잘 적용되면 true
    //console.log(Kakao.isInitialized());
  }, []);

  const shareKakao = () => {
    Kakao.Share.sendDefault({
      objectType: "feed",
      content: {
        title: "손창경 ❤ 조하나 결혼합니다.",
        description:
          "2024년 3월 24일 일요일 오전 11시 30분 인천아시아드웨딩컨벤션 브릴리에홀",
        imageUrl: "https://i.ibb.co/xjJQFbL/intro-image1.jpg",
        link: {
          mobileWebUrl: realUrl,
        },
      },
      buttons: [
        {
          title: "모바일 청첩장 보기",
          link: {
            mobileWebUrl: realUrl,
          },
        },
      ],
    });
  };

  return (
    <ShareBox className="relative spacerT50 bg-gray">
      <Fade bottom cascade delay={500}>
        <div className="bg-img-top">
          <img src={grayTop} alt="" width="100%" className="bg-point" />
        </div>
      </Fade>
      <section className="flex">
        <div>
          <CopyToClipboard
            text="https://mobile-wedidng-chh.netlify.app"
            onCopy={() => alert("클립보드에 복사되었습니다.")}
          >
            <button className="btn btn-share" style={{ marginRight: "0.5rem" }}>
              URL 복사하기
            </button>
          </CopyToClipboard>
        </div>

        <div>
          <button className="btn btn-share" onClick={shareKakao}>
            카카오톡 공유하기
          </button>
        </div>
      </section>
    </ShareBox>
  );
}
