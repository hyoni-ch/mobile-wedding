import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Edit({ selectedPost, setSelectedPost }) {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    setName(selectedPost.name);
    setContent(selectedPost.content);
  }, [selectedPost]);

  const onSubmit = e => {
    e.preventDefault();

    if (name === "" || content === "") {
      return alert("모든 항목을 채워주세요.");
    }

    const passwordInput = prompt("비밀번호를 입력하세요: ");

    if (passwordInput !== selectedPost.password) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      let body = {
        name: name,
        content: content,
        postNum: selectedPost.postNum,
      };

      axios
        .post("/api/guestbook/edit", body)
        .then(response => {
          if (response.data.success) {
            alert("글 수정이 완료되었습니다.");
            setSelectedPost(null);
          } else {
            alert("글 수정이 실패하였습니다.");
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  };

  const onCancel = () => {
    setSelectedPost(null);
  };

  return (
    <div className="upload-box">
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

            <div style={{ display: "flex" }}>
              <div
                className="btn btn-upload-submit edit"
                onClick={e => {
                  onSubmit(e);
                }}
              >
                수정하기
              </div>
              <div className="btn btn-upload-submit cancel" onClick={onCancel}>
                취소하기
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
