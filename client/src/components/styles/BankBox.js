import styled from "styled-components";

const BankBox = styled.div`
  .account-container {
    overflow: hidden;
    cursor: pointer;
    transition: height 0.3s ease-in-out;
    height: 40px; /* 토글되지 않았을 때의 높이 */
  }

  .account-container.open {
    height: 200px; /* 토글되었을 때의 높이 */
  }

  .account-box {
    font-family: "SUIT-Regular";
    border: 1px solid #eee;
    border-radius: 0.3rem;
    width: 85%;
    height: 3rem;

    .arrow {
      position: absolute;
      right: 1rem;
      top: 30%;
    }

    .btn-account {
      color: #1e1e1e;
      top: 15%;
      border-radius: 0.3rem;
      background-color: #f9f9f9;
      border: 1px solid #eee;
      height: 2rem;
      width: 5rem;
    }

    .btn-account-kakao {
      background-color: #ffdf00;
      border: none;
      width: 4.5rem;
    }

    .margin10 {
      margin: 10px;
    }
  }

  .account-box-sub {
    height: 0;
    border: none;
    border-radius: 0 0 0.3rem 0.3rem;
    overflow: hidden;
    transition: height 0.6s ease-in-out;
  }

  .account-box-sub.open-g {
    height: 90px;
    border: 1px solid #eee;
  }

  .account-box-sub.open-b {
    height: 180px;
    border: 1px solid #eee;
  }

  .btn-call {
    margin: 1rem;
    width: 10rem;
    border-radius: 2rem !important;
    border: 1px solid #ddd !important;
  }

  .modal {
    margin: auto;
    background-color: rgba(0, 0, 0, 0.5);
    transition: all 0.5s;
    position: fixed;
    z-index: 9999;
    left: 0;
    top: 0;
    height: 100vh;
    opacity: 0;
    visibility: hidden;
    width: 100%;

    .modal-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 0.3rem;
      background-color: #fff;
      width: 22rem;

      .modal-box-title {
        height: 3rem;
        background-color: #f7f7f7;
        border-radius: 0.3rem 0.3rem 0 0;
        margin-bottom: 0.4rem;
      }

      .modal-container {
        font-family: "SUIT-Regular";
        padding: 0.5rem;

        .modal-box-about {
          padding-bottom: 0.5rem;

          .about-g {
            color: #668eaa;
          }

          .about-b {
            color: #ce8383;
          }
        }
      }
    }

    .btn-close {
      border: none;
    }
  }

  .modal-open {
    opacity: 1;
    visibility: visible;
    display: block;
  }

  @media screen and (max-width: 440px) {
    .modal-box {
      width: 90% !important;
    }
  }

  @media screen and (max-width: 350px) {
    .account-box-sub.open-b {
      height: 190px;
      border: 1px solid #eee;
    }
  }
`;

export { BankBox };
