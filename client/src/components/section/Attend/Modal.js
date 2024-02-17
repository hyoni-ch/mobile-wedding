import React, { useState } from "react";
import axios from "axios";

export default function Modal({ modalIsOpen, closeModal }) {
  const [who, setWho] = useState("신랑측");
  const [go, setGo] = useState("참석");
  const [name, setName] = useState("");
  const [num, setNum] = useState(0);
  const [sNum, setSNum] = useState(0);
  const [food, setFood] = useState("O");

  const onSubmit = e => {
    e.preventDefault();

    if (name === "") {
      return alert("성함을 작성해주세요.");
    }

    let body = {
      who: who,
      go: go,
      name: name,
      num: num,
      sNum: sNum,
      food: food,
    };

    axios
      .post("/api/rsvp/submit", body)
      .then(response => {
        if (response.data.success) {
          alert("참석 정보 전달이 완료되었습니다.");
          closeModal();
        } else {
          alert("참석 정보 전달에 실패하였습니다.");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <section className={`modal  ${modalIsOpen ? "modal-open" : ""}`}>
      <form onSubmit={onSubmit}>
        <div className="modal-box flex flex-col">
          <div className="radio w-full">
            <label className="radio-label ">분류 *</label>
            <div className="flex w-full">
              <div>
                <input
                  type="radio"
                  value="신랑측"
                  name="who"
                  id="radio1"
                  checked={who === "신랑측"}
                  onChange={e => {
                    setWho(e.currentTarget.value);
                  }}
                />
                <label for="radio1">신랑 측</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="신부측"
                  name="who"
                  id="radio2"
                  checked={who === "신부측"}
                  onChange={e => {
                    setWho(e.currentTarget.value);
                  }}
                />
                <label for="radio2">신부 측</label>
              </div>
            </div>
          </div>

          <div className="radio w-full">
            <label className="radio-label">참석 *</label>
            <div className="flex w-full">
              <div>
                <input
                  type="radio"
                  value="참석"
                  name="go"
                  id="radio3"
                  checked={go === "참석"}
                  onChange={e => {
                    setGo(e.currentTarget.value);
                  }}
                />
                <label for="radio3">참석</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="불참"
                  name="go"
                  id="radio4"
                  checked={go === "불참"}
                  onChange={e => {
                    setGo(e.currentTarget.value);
                  }}
                />
                <label for="radio4">불참</label>
              </div>
            </div>
          </div>

          <div className="radio w-full">
            <label className="radio-label">성함 *</label>
            <div className="flex w-full">
              <div>
                <input
                  type="text"
                  placeholder="참석 대표자 성함을 입력해 주세요."
                  onChange={e => {
                    setName(e.currentTarget.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="radio w-full">
            <label className="radio-label">대인 인원</label>
            <div className="flex w-full">
              <div>
                <input
                  type="number"
                  placeholder="본인 포함 인원을 입력해 주세요."
                  onChange={e => {
                    setNum(e.currentTarget.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="radio w-full">
            <label className="radio-label">소인 인원</label>
            <div className="flex w-full">
              <div>
                <input
                  type="number"
                  placeholder="7세 이하의 인원을 입력해 주세요."
                  onChange={e => {
                    setSNum(e.currentTarget.value);
                  }}
                />
              </div>
            </div>
          </div>

          <div className="radio w-full">
            <label className="radio-label">식사</label>
            <div className="flex w-full">
              <div>
                <input
                  type="radio"
                  value="O"
                  id="radio5"
                  name="food"
                  checked={food === "O"}
                  onChange={e => {
                    setFood(e.currentTarget.value);
                  }}
                />
                <label for="radio5">O</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="X"
                  id="radio6"
                  name="food"
                  checked={food === "X"}
                  onChange={e => {
                    setFood(e.currentTarget.value);
                  }}
                />
                <label for="radio6">X</label>
              </div>
              <div>
                <input
                  type="radio"
                  value="미확정"
                  id="radio7"
                  name="food"
                  checked={food === "미확정"}
                  onChange={e => {
                    setFood(e.currentTarget.value);
                  }}
                />
                <label for="radio7">미확정</label>
              </div>
            </div>
          </div>

          {/* 버튼 */}
          <div className="flex w-full">
            <div className="btn btn-close" onClick={closeModal}>
              닫기
            </div>
            <div
              className="btn btn-submit"
              onClick={e => {
                onSubmit(e);
              }}
            >
              참석 정보 전달하기
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
