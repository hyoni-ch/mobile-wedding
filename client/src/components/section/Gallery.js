import React, { useState } from "react";
import {
  couple_image1,
  couple_image2,
  couple_image3,
  couple_image4,
  couple_image5,
  couple_image6,
  couple_image7,
  couple_image8,
  couple_image9,
  couple_image10,
  couple_image11,
  couple_image12,
  couple_image13,
  couple_image14,
  couple_image15,
  couple_image16,
  couple_image17,
} from "../../assets/images";
import { GalleryBox, ButtonIcon } from "../styles/GalleryBox";
import ScrollContainer from "react-indiana-drag-scroll";
import { BsHandIndexThumbFill } from "react-icons/bs";

export default function Gallery() {
  const images = [
    { path: couple_image8, top: 0, left: 0, type: "h", num: 1 },
    { path: couple_image5, top: 295, left: 0, type: "w", num: 2 },
    { path: couple_image6, top: 431.7, left: 0, type: "w", num: 3 },
    { path: couple_image4, top: 0, left: 200, type: "w", num: 4 },
    { path: couple_image2, top: 136.7, left: 200, type: "h", num: 5 },
    { path: couple_image11, top: 431.7, left: 200, type: "w", num: 6 },
    { path: couple_image1, top: 0, left: 400, type: "w", num: 7 },
    { path: couple_image10, top: 136.7, left: 400, type: "w", num: 8 },
    { path: couple_image3, top: 273.4, left: 400, type: "h", num: 9 },
    { path: couple_image12, top: 0, left: 600, type: "h", num: 10 },
    { path: couple_image15, top: 295, left: 600, type: "h", num: 11 },
    { path: couple_image16, top: 0, left: 800, type: "w", num: 12 },
    { path: couple_image7, top: 136.7, left: 800, type: "h", num: 13 },
    { path: couple_image14, top: 431.7, left: 800, type: "w", num: 14 },
    { path: couple_image17, top: 0, left: 1000, type: "w", num: 15 },
    { path: couple_image9, top: 136.7, left: 1000, type: "w", num: 16 },
    { path: couple_image13, top: 273.4, left: 1000, type: "h", num: 17 },
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const showModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const onMouseDownImage = () => {
    document.querySelector(".push").style.opacity = 0;
  };

  const onClickImage = index => {
    setSelectedImageIndex(index);
    showModal(); // 이미지 클릭 시 모달을 열도록 추가
  };

  const onNextImage = () => {
    /* next버튼을 눌렀을 때 실행되는 함수 */
    setSelectedImageIndex(prevIndex => (prevIndex + 1) % images.length);
  }; /* 이미지 Index가 하나 늘어나도록 구현 */

  const onPrevImage = () => {
    /* prev버튼을 눌렀을 때 실행되는 함수 */
    setSelectedImageIndex(prevIndex =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    ); /* 이미지 Index가 하나 줄어들도록 구현 */
  };

  return (
    <GalleryBox>
      <h2 className="title pointColor">gallery</h2>

      <section className={`modal ${modalIsOpen ? "modal-open" : ""}`}>
        <div className="modal-box">
          <img
            src={images[selectedImageIndex].path}
            alt="img"
            className={`${images[selectedImageIndex].type}`}
          />
        </div>

        <div className="img-page nanumFont">
          {images[selectedImageIndex].num}/17
        </div>

        <ButtonIcon
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="buttonIcon1"
          onClick={onPrevImage}
        >
          <path
            d="M25 30L15 20L25 10"
            stroke="#ffffff"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </ButtonIcon>
        <ButtonIcon
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          className="buttonIcon2"
          onClick={onNextImage}
        >
          <path
            d="M15 30L25 20L15 10"
            stroke="#ffffff"
            stroke-width="3"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </ButtonIcon>
        <button className="btn-close nanumFont" onClick={closeModal}>
          X
        </button>
      </section>

      <ScrollContainer className="scroll-container">
        <section className="flex flex-col relative gallery-container">
          <div style={{ paddingRight: "1rem" }}>
            {images.map((image, index) => (
              <img
                key={index}
                src={image.path}
                alt={`Image ${index + 1}`}
                style={{
                  top: `${image.top}px`,
                  left: `${image.left}px`,
                  // height: `${image.height}px`,
                }}
                className="w-full"
                onClick={() => onClickImage(index)}
                onMouseDown={onMouseDownImage}
                onTouchStart={onMouseDownImage}
              />
            ))}
          </div>

          <div className="push">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="100"
              height="40"
              viewBox="0 0 50 50"
              fill="none"
            >
              <path
                d="M-10 25L76 25"
                stroke="#fff"
                stroke-width="7"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="push-line relative"
              />
            </svg>
            <BsHandIndexThumbFill
              size="20"
              color="#fff"
              className="push-pointer"
            />
            <div className="push-p suitFont">밀어서 갤러리 사진보기</div>
          </div>
        </section>
      </ScrollContainer>
    </GalleryBox>
  );
}
