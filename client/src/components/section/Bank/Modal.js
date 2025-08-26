import React from "react";
import { IoCall, IoCloseSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

export default function Modal({ modalIsOpen, closeModal }) {
  return (
    <section className={`modal  ${modalIsOpen ? "modal-open" : ""}`}>
      <div className="modal-box flex flex-col">
        <div className="modal-box-title flex w-full">연 락 하 기</div>

        <div className="modal-container flex flex-col w-full">
          <div className="modal-box-about flex w-full">
            <div className="w-33 about-g">신랑</div>
            <div className="w-33">손철수</div>
            <div className="flex-evenly w-33 ">
              <a href="tel:01012345678">
                <IoCall size="20" color="#668eaa" />
              </a>
              <a href="sms:01012345678">
                <IoIosMail size="22" color="#668eaa" />
              </a>
            </div>
          </div>
          <div className="modal-box-about flex w-full">
            <div className="w-33 about-g">신랑 아버지</div>
            <div className="w-33">손가나</div>
            <div className="flex-evenly w-33 ">
              <a href="tel:01012345678">
                <IoCall size="20" color="#668eaa" />
              </a>
              <a href="sms:01012345678">
                <IoIosMail size="22" color="#668eaa" />
              </a>
            </div>
          </div>
          <div className="modal-box-about flex w-full">
            <div className="w-33 about-g">신랑 어머니</div>
            <div className="w-33">김다라</div>
            <div className="flex-evenly w-33 ">
              <a href="tel:01012345678">
                <IoCall size="20" color="#668eaa" />
              </a>
              <a href="sms:01012345678">
                <IoIosMail size="22" color="#668eaa" />
              </a>
            </div>
          </div>
        </div>
        <div className="line3 w-90"></div>

        <div className="modal-container flex flex-col w-full">
          <div className="modal-box-about flex w-full">
            <div className="w-33 about-b">신부</div>
            <div className="w-33">조영희</div>
            <div className="flex-evenly w-33 ">
              <a href="tel:01012345678">
                <IoCall size="20" color="#ce8383" />
              </a>
              <a href="sms:01012345678">
                <IoIosMail size="22" color="#ce8383" />
              </a>
            </div>
          </div>
          <div className="modal-box-about flex w-full">
            <div className="w-33 about-b">신부 아버지</div>
            <div className="w-33">조마바</div>
            <div className="flex-evenly w-33 ">
              <a href="tel:01012345678">
                <IoCall size="20" color="#ce8383" />
              </a>
              <a href="sms:01012345678">
                <IoIosMail size="22" color="#ce8383" />
              </a>
            </div>
          </div>
          <div className="modal-box-about flex w-full">
            <div className="w-33 about-b">신부 어머니</div>
            <div className="w-33">조사아</div>
            <div className="flex-evenly w-33 ">
              <a href="tel:01012345678">
                <IoCall size="20" color="#ce8383" />
              </a>
              <a href="sms:01012345678">
                <IoIosMail size="22" color="#ce8383" />
              </a>
            </div>
          </div>
        </div>

        <div className="btn btn-close" onClick={closeModal}>
          <IoCloseSharp />
        </div>
      </div>
    </section>
  );
}
