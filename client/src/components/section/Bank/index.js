import React, { useState } from "react";
import { BankBox } from "../../styles/BankBox";
import Fade from "react-reveal/Fade";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiKakaoTalkFill } from "react-icons/ri";
import { LuCopy } from "react-icons/lu";
import { CopyToClipboard } from "react-copy-to-clipboard/src";
import Modal from "./Modal";

export default function Bank() {
  const [isGroomAccountsVisible, setIsGroomAccountsVisible] = useState(false);
  const [isBrideAccountsVisible, setIsBrideAccountsVisible] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const handleGroomContainerClick = () => {
    setIsGroomAccountsVisible(!isGroomAccountsVisible);
  };

  const handleBrideContainerClick = () => {
    setIsBrideAccountsVisible(!isBrideAccountsVisible);
  };

  return (
    <BankBox className="relative spacerB ">
      <Fade bottom delay={300}>
        <h2 className="title pointColor">Account</h2>
      </Fade>

      <section className="spacerB50 flex flex-col">
        <Fade bottom delay={300}>
          <h3 className="padding-3">마음 전하실 곳</h3>

          <div
            className="line padding-3 "
            style={{ marginTop: "1.5rem", marginBottom: "1.5rem" }}
          ></div>
        </Fade>
        <Fade bottom cascade delay={300}>
          <div>
            <p>참석이 어려워 직접 축하를 전하지 못하는 분들을 위해</p>
            <p>계좌번호를 기재하였습니다.</p>
            <p>넓은 마음으로 양해 부탁 드립니다.</p>
            <p>전해주시는 진심은 소중하게 간직하여</p>
            <p>좋은 부부의 모습으로 보답하겠습니다.</p>
          </div>
        </Fade>
      </section>

      <section className="flex flex-col">
        <div
          className="account-box flex relative account-container "
          onClick={handleGroomContainerClick}
        >
          <div>
            <div>신랑측</div>
            <div className="arrow">
              {isGroomAccountsVisible ? (
                <IoIosArrowUp color="#aaa" />
              ) : (
                <IoIosArrowDown color="#aaa" />
              )}
            </div>
          </div>
        </div>

        <div
          id="groom-container"
          className={`account-box account-box-sub font-size-095 relative  ${
            isGroomAccountsVisible ? "open-g" : ""
          }`}
        >
          <div className="margin10 ">
            <div className="flex " style={{ marginBottom: "5px" }}>
              <div className="text-left w-90 ">
                신랑 <strong>손창경</strong>
              </div>
              <a
                href="https://qr.kakaopay.com/Ej8YEOJNL"
                draggable="flase"
                target="_blank"
                rel="noopener"
              >
                <div className="btn-account btn-account-kakao flex ">
                  <RiKakaoTalkFill style={{ marginRight: "3px" }} />
                  <strong>pay</strong>
                </div>
              </a>
            </div>
            <div className="flex">
              <div className="text-left w-90">국민 657802-01-301076</div>
              <CopyToClipboard
                text="국민 657802-01-301076"
                onCopy={() => alert("클립보드에 복사되었습니다.")}
              >
                <div className="btn-account flex ">
                  <LuCopy style={{ marginRight: "5px" }} />
                  복사
                </div>
              </CopyToClipboard>
            </div>
          </div>
        </div>

        <div style={{ height: "5px" }}></div>

        <div
          className="account-box flex relative account-container "
          onClick={handleBrideContainerClick}
        >
          <div>
            <div>신부측</div>
            <div className="arrow">
              {isBrideAccountsVisible ? (
                <IoIosArrowUp color="#aaa" />
              ) : (
                <IoIosArrowDown color="#aaa" />
              )}
            </div>
          </div>
        </div>

        <div
          className={`account-box account-box-sub font-size-095 relative ${
            isBrideAccountsVisible ? "open-b" : ""
          }`}
        >
          <div className="margin10">
            <div className="flex" style={{ marginBottom: "5px" }}>
              <div className="w-90 text-left">
                신부 <strong>조하나</strong>
              </div>
              <a
                href="https://qr.kakaopay.com/FdigSBGyb"
                draggable="flase"
                target="_blank"
                rel="noopener"
              >
                <div className="btn-account btn-account-kakao flex">
                  <RiKakaoTalkFill style={{ marginRight: "3px" }} />
                  <strong>pay</strong>
                </div>
              </a>
            </div>
            <div className="flex">
              <div className="w-90 text-left">카카오뱅크 3333-19-4893081</div>
              <CopyToClipboard
                text="카카오뱅크 3333-19-4893081"
                onCopy={() => alert("클립보드에 복사되었습니다.")}
              >
                <div className="btn-account flex">
                  <LuCopy style={{ marginRight: "5px" }} />
                  복사
                </div>
              </CopyToClipboard>
            </div>
          </div>

          <div
            className="line"
            style={{ width: "100%", marginBottom: "1rem" }}
          ></div>

          <div className="margin10 ">
            <div className="flex" style={{ marginBottom: "5px" }}>
              <div className="w-full text-left">
                아버지 <strong>조규정</strong> · 어머니 <strong>조수정</strong>
              </div>
            </div>

            <div className="flex">
              <div className="w-90 text-left">신한 110-541-508666</div>
              <CopyToClipboard
                text="신한 110-541-508666"
                onCopy={() => alert("클립보드에 복사되었습니다.")}
              >
                <div className="btn-account flex">
                  <LuCopy style={{ marginRight: "5px" }} />
                  복사
                </div>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </section>

      <section className="fade">
        <button className="btn btn-call" onClick={showModal}>
          연락하기
        </button>
      </section>

      <Modal modalIsOpen={modalIsOpen} closeModal={closeModal} />
    </BankBox>
  );
}
