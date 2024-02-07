import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import { whiteTop } from "../../../assets/images";
import { AttendBox } from "../../styles/AttendBox";
import Modal from "./Modal";
import List from "./List";

export default function Attend() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <AttendBox className="flex flex-col spacerB relative">
      <Fade bottom cascade delay={300}>
        <div className="bg-img bg-img-white">
          <img src={whiteTop} alt="" width="100%" className="bg-point" />
        </div>
      </Fade>

      <Fade bottom delay={500}>
        <h2 className="title pointColor">Rsvp</h2>
      </Fade>

      <Fade bottom delay={500}>
        <h3>참석 정보</h3>
        <div
          className="line"
          style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}
        ></div>
      </Fade>

      <Fade bottom cascade delay={300}>
        <div className="flex flex-col">
          <p>참석의 부담은 가지지 말아주시고,</p>
          <p>정성껏 준비하기 위해 여쭙는 것이니,</p>
          <p>참석 정보를 알려주시면 감사하겠습니다.</p>
        </div>
      </Fade>

      <div className="btn btn-rsvp" onClick={showModal}>
        참석 정보 전달하기
      </div>

      <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </AttendBox>
  );
}
