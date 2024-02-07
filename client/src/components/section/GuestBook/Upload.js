import React, { useState } from "react";
import { BiShow, BiHide } from "react-icons/bi";
import axios from "axios";

export default function Upload({ visible, setVisible }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [content, setContent] = useState("");
  const [showPswd, setShowPswd] = useState(false);

  const toggleShowPswd = () => {
    setShowPswd(!showPswd);
  };

  const onSubmit = e => {
    e.preventDefault();

    if (name === "" || content === "" || password === "") {
      return alert("모든 항목을 채워주세요.");
    }

    let body = {
      name: name,
      content: content,
      password: password,
    };

    axios
      .post("/api/guestbook/submit", body)
      .then(response => {
        if (response.data.success) {
          alert("글 작성이 완료되었습니다.");
          setVisible(!visible);
        } else {
          alert("글 작성에 실패하였습니다.");
        }
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <div className="upload-box w-90">
      <form className="upload-form" onSubmit={onSubmit}>
        <div className="upload-container">
          <div className="upload upload-name">
            <div className="flex-start margin-b03">
              <div className="title-upload">이름</div>
              <hr></hr>
              <input
                id="name"
                type="text"
                value={name}
                autocomplete="off"
                onChange={e => {
                  setName(e.currentTarget.value);
                }}
              />
            </div>

            <div className="upload-content relative">
              <div className="flex-start z-index">
                <div className="title-upload">내용</div>
                <hr></hr>
              </div>
              <textarea
                id="content"
                value={content}
                cols="5"
                maxLength="120"
                style={{ height: "165px" }}
                onChange={e => {
                  setContent(e.currentTarget.value);
                }}
              />
            </div>
            <div className="flex-start margin-b03">
              <div className="title-upload password">비밀번호</div>
              <hr></hr>
              <input
                id="pw"
                type={showPswd ? "text" : "password"}
                value={password}
                placeholder="글 수정, 삭제 시 사용되는 비밀번호"
                autocomplete="off"
                maxLength={10}
                onChange={e => {
                  setPassword(e.currentTarget.value);
                }}
              />
              <div className="showPswd">
                {showPswd ? (
                  <BiShow onClick={toggleShowPswd} />
                ) : (
                  <BiHide onClick={toggleShowPswd} />
                )}
              </div>
            </div>

            <div
              className="btn btn-upload-submit"
              onClick={e => {
                onSubmit(e);
              }}
            >
              글쓰기
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
