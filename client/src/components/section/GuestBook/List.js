import React, { useState, useEffect } from "react";
import axios from "axios";
import Edit from "./Edit";
import moment from "moment";
import "moment/locale/ko";

export default function List() {
  const [guestbookList, setGuestbookList] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  useEffect(() => {
    axios
      .post("/api/guestbook/list")
      .then(response => {
        if (response.data.success) {
          setGuestbookList([...response.data.guestbookList]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, [guestbookList]);

  const handleEdit = post => {
    setSelectedPost(post);
  };

  const handleDelete = post => {
    const passwordInput = prompt("비밀번호를 입력하세요: ");
    if (passwordInput !== post.password) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      if (window.confirm("정말로 삭제하시겠습니까?")) {
        let body = {
          postNum: post.postNum,
        };
        axios
          .post("api/guestbook/delete", body)
          .then(response => {
            if (response.data.success) {
              alert("방명록이 삭제되었습니다.");
            }
          })
          .catch(err => {
            alert("방명록 삭제에 실패하였습니다.");
          });
      }
    }
  };

  const setTime = (a, b) => {
    if (a !== b) {
      return moment(b).format("YY-MM-DD HH:mm") + "(수정됨)";
    } else {
      return moment(a).format("YY-MM-DD HH:mm");
    }
  };

  return (
    <div className="guestbook-list w-90">
      {guestbookList.length === 0 && (
        <div>첫 축하의 메시지를 작성해주세요.</div>
      )}

      {guestbookList.length > 0 && (
        <ul className="guestbook-ul">
          {guestbookList.map((list, index) => (
            <div key={index}>
              {selectedPost === null && (
                <li className="guestbook-li w-full">
                  <div className="w-full">
                    <div className="name-box">
                      <div className="name">{list.name}</div>
                      <div className="date small">
                        {setTime(list.createdAt, list.updatedAt)}
                      </div>
                      <div className="small btn-ud">
                        <div className="edit" onClick={() => handleEdit(list)}>
                          수정
                        </div>
                        <div
                          className="delete"
                          onClick={() => handleDelete(list)}
                        >
                          삭제
                        </div>
                      </div>
                    </div>
                    <div className="content-box">{list.content}</div>
                  </div>
                </li>
              )}
            </div>
          ))}

          {selectedPost && (
            <Edit
              selectedPost={selectedPost}
              setSelectedPost={setSelectedPost}
            />
          )}
        </ul>
      )}
    </div>
  );
}
