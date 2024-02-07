import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function List() {
  const [rsvpList, setRsvpList] = useState([]);
  const [totalAdultAttendees, setTotalAdultAttendees] = useState(0);
  const [totalChildAttendees, setTotalChildAttendees] = useState(0);

  useEffect(() => {
    axios
      .post("/api/rsvp/list")
      .then(response => {
        if (response.data.success) {
          setRsvpList([...response.data.rsvpList]);

          const filteredList = response.data.rsvpList.filter(
            item => item.go === "참석" && item.food === "O"
          );

          const adultSum = filteredList.reduce((acc, item) => {
            return acc + parseInt(item.num, 10);
          }, 0);

          const childSum = filteredList.reduce((acc, item) => {
            return acc + parseInt(item.sNum, 10);
          }, 0);

          setTotalAdultAttendees(adultSum);
          setTotalChildAttendees(childSum);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  const Style = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    max-width: 440px;
    height: 100vh;
    margin: 0 auto;
    background: #fff;
    overflow: auto;

    .go {
      background-color: pink;
    }

    .food {
      border: 2px solid black;
    }

    div {
      margin-bottom: 10px;
    }

    ul {
      width: 200px;
      margin-bottom: 10px;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 10px;

      li {
      }
    }
  `;

  return (
    <Style>
      <h2>참석 여부 리스트</h2>
      <div className="go"> 참석일 경우 핑크색 배경 </div>
      <div className="food"> 식사일 경우 검은색 테두리 </div>
      <div>참석 및 대인 식사 인원의 합 : {totalAdultAttendees}</div>
      <div>참석 및 소인 식사 인원의 합 : {totalChildAttendees}</div>
      {rsvpList.length === 0 && <div>낫띵! 없습니다!</div>}
      {rsvpList.length > 0 && (
        <div>
          {rsvpList.map((list, index) => (
            <ul
              key={index}
              className={`${list.go === "참석" ? "go" : ""} ${
                list.food === "O" ? "food" : ""
              }`}
            >
              <li>분류 : {list.who}</li>
              <li>참석 여부 : {list.go}</li>
              <li>성함 : {list.name}</li>
              <li>대인 인원 : {list.num} (본인 포함)</li>
              <li>소인 인원 : {list.sNum}</li>
              <li>식사 여부 : {list.food}</li>
            </ul>
          ))}
        </div>
      )}
    </Style>
  );
}
