import React from "react";
import { MentBox } from "../styles/MentBox";
import Fade from "react-reveal/Fade";
import { intro_image2, leaf } from "../../assets/images";

export default function Ment() {
  return (
    <MentBox className="flex flex-col bg-gray">
      <section className="poetryBox">
        <Fade bottom delay={300}>
          <img
            src={leaf}
            draggable="false"
            alt="Img"
            className="mentImg pointColor"
          />
        </Fade>
        <Fade bottom cascade delay={300}>
          <div className="poetry nanumFont lineHeight flex flex-col ">
            <p>때론 오래된 친구처럼</p>
            <p>때론 처음 만나는 사람처럼</p>
            <p>그 많은 당신을 다 사랑하고 싶습니다.</p>
            <p> </p>
            <p>{`<사랑고백> 中, 이준호`}</p>
          </div>
        </Fade>
      </section>

      <section>
        <img src={intro_image2} alt="" width="100%" max-width="440px" />
      </section>

      <section>
        <Fade bottom delay={300}>
          <h2 className="title pointColor">Invite you</h2>
        </Fade>
        <Fade bottom cascade delay={300}>
          <ul className="lineHeight">
            <li>십여 년의 시간이 흘러도</li>
            <li>아무리 멀리 있어도</li>
            <li>바로 옆에 있는 것 같은 믿음을 주는 </li>
            <li>소중한 사람을 만났습니다. </li>
            <br></br>
            <li>늘 변함없이 그리고 한결같이</li>
            <li>서로를 아껴주는 두 사람이 결혼하려 합니다.</li>
            <br></br>
            <li>저희의 새로운 봄에 함께해 주시면</li>
            <li>행복한 마음으로 간직하겠습니다.</li>
          </ul>
        </Fade>
      </section>

      <section>
        <Fade bottom cascade delay={300}>
          <ul className="myName">
            <li>
              <strong>손가나</strong> · <strong>김다라</strong>의 장남{" "}
              <strong>철수</strong>
            </li>
            <li>
              <strong>조마바</strong> · <strong>조사아</strong>의 장녀{" "}
              <strong>영희</strong>
            </li>
          </ul>
        </Fade>
      </section>
    </MentBox>
  );
}
