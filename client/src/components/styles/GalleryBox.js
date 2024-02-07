import styled from "styled-components";

const GalleryBox = styled.div`
  .gallery-container {
    margin: auto;
    max-width: 95%;
    height: 39rem;
  }

  .gallery-container img {
    position: absolute;
    max-width: 190px;
    border-radius: 0.4rem;
  }

  .modal {
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.5s;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    opacity: 0;
    visibility: hidden;

    .modal-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 0.3rem;
      display: flex;

      img {
        background-size: cover;
      }

      img.w {
        width: 100vw;
        max-width: 1380px;
      }
      img.h {
        max-height: 100vh;
        max-width: 100vw;
      }
    }
  }
  .modal-open {
    opacity: 1;
    visibility: visible;
    display: block;
  }

  .img-page {
    position: fixed;
    left: 0rem;
    top: 0.5rem;
    left: 0.5rem;
    color: #ffff;
    font-size: 1.3rem;
  }
  .btn-close {
    background: none;
    border: none;
    color: #fff;
    font-size: 1.3rem;
    position: fixed;
    top: 0.5rem;
    right: 0.5rem;
    cursor: pointer;
    font-weight: 700;
  }

  .push {
    z-index: 20;
    position: absolute;
    right: 0;
    top: 1rem;
    max-height: 5.5rem;
    height: 100%;
    max-width: 9.2rem;
    width: 100%;
    background: rgba(0, 0, 0, 0.48);
    border-radius: 3px;
    display: flex;
    justify-content: center;
    transition: all 1s;

    .push-line {
      width: 100px;
      height: 100px;
      x: 30px;
      y: 30px;
      stroke-dasharray: 100;
      stroke-dashoffset: -100;
      animation: ani1 2.5s infinite linear;
      animation-delay: 0.3s;
    }

    .push-pointer {
      position: absolute;
      top: 1.2rem;
      right: 1rem;
      animation: ani2 2.5s infinite linear;
    }

    .push-p {
      position: absolute;
      top: 3.5rem;
      font-size: 0.85rem;
      color: #fff;
    }
  }

  @keyframes ani1 {
    0% {
    }

    40% {
      stroke-dashoffset: -90;
    }

    85% {
      stroke-dashoffset: 0;
      stroke: #f6f6f6;
    }

    100% {
      stroke-dashoffset: 90;
      stroke: #999999;
    }
  }

  @keyframes ani1-2 {
    0% {
    }

    40% {
      stroke-dashoffset: 0;
    }

    85% {
      stroke-dashoffset: 100;
      stroke: #f6f6f6;
    }

    100% {
      stroke-dashoffset: 100;
      stroke: #999999;
    }
  }

  @keyframes ani2 {
    0% {
      left: 2.3rem;
    }

    50% {
      right: 1rem;
    }
    92% {
      right: 5.6rem;
    }

    100% {
      right: 5.6rem;
    }
  }

  @media screen and (max-width: 440px) {
    .push {
      .push-line {
        stroke-dashoffset: 0;
        animation: ani1-2 2.5s infinite linear;
        animation-delay: 0.3s;
      }
    }
  }
`;

const ButtonIcon = styled.svg`
  cursor: pointer;
  position: fixed;
  top: 50vh;
  z-index: 20;

  &.buttonIcon1 {
    left: 0.5rem;
  }

  &.buttonIcon2 {
    right: 0.5rem;
  }
`;

export { GalleryBox, ButtonIcon };
