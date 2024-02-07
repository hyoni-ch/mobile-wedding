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
            <div className="w-33">손창경</div>
            <div className="flex-evenly w-33 ">
              <a href="tel:01057689284">
                <IoCall size="20" color="#668eaa" />
              </a>
              <a href="sms:01057689284">
                <IoIosMail size="22" color="#668eaa" />
              </a>
            </div>
          </div>
          <div className="modal-box-about flex w-full">
            <div className="w-33 about-g">신랑 아버지</div>
            <div className="w-33">손용래</div>
            <div className="flex-evenly w-33 ">
              <a href="tel:01057689284">
                <IoCall size="20" color="#668eaa" />
              </a>
              <a href="sms:01057689284">
                <IoIosMail size="22" color="#668eaa" />
              </a>
            </div>
          </div>
          <div className="modal-box-about flex w-full">
            <div className="w-33 about-g">신랑 어머니</div>
            <div className="w-33">김은희</div>
            <div className="flex-evenly w-33 ">
              <a href="tel:01057689284">
                <IoCall size="20" color="#668eaa" />
              </a>
              <a href="sms:01057689284">
                <IoIosMail size="22" color="#668eaa" />
              </a>
            </div>
          </div>
        </div>
        <div className="line3 w-90"></div>

        <div className="modal-container flex flex-col w-full">
          <div className="modal-box-about flex w-full">
            <div className="w-33 about-b">신부</div>
            <div className="w-33">조하나</div>
            <div className="flex-evenly w-33 ">
              <a href="tel:01058507465">
                <IoCall size="20" color="#ce8383" />
              </a>
              <a href="sms:01058507465">
                <IoIosMail size="22" color="#ce8383" />
              </a>
            </div>
          </div>
          <div className="modal-box-about flex w-full">
            <div className="w-33 about-b">신부 아버지</div>
            <div className="w-33">조규정</div>
            <div className="flex-evenly w-33 ">
              <a href="tel:01040179933">
                <IoCall size="20" color="#ce8383" />
              </a>
              <a href="sms:01040179933">
                <IoIosMail size="22" color="#ce8383" />
              </a>
            </div>
          </div>
          <div className="modal-box-about flex w-full">
            <div className="w-33 about-b">신부 어머니</div>
            <div className="w-33">조수정</div>
            <div className="flex-evenly w-33 ">
              <a href="tel:01041399933">
                <IoCall size="20" color="#ce8383" />
              </a>
              <a href="sms:01041399933">
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
