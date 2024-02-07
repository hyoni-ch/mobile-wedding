import styled from "styled-components";

const AttendBox = styled.div`
  .bg-img-white {
    top: -20px;
  }

  .btn-rsvp {
    margin-top: 1rem;
    padding: 1.5rem 5rem 1.5rem 5rem !important;
    font-size: 1rem;
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
      width: 24rem;
      border-radius: 0.3rem;
      background-color: #fff;
      transform: translate(-50%, -50%);

      .radio {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;

        .radio-label {
          min-width: 70px;
        }

        input[type="radio"] {
          display: none;
        }

        input[type="radio"] + label {
          display: block;
          margin-left: 0.5rem;
          padding: 0.8rem 1rem 0.8rem 1rem;
          border: 1px solid #eee;
          border-radius: 0.5rem;
          cursor: pointer;
        }

        input[type="radio"]:checked + label {
          border: 2px solid black;
        }

        input[type="text"],
        input[type="number"] {
          padding: 1rem;
          width: 100%;
          border-radius: 0.5rem;
          border: 1px solid #ccc;
        }

        input[type="text"]::placeholder,
        input[type="number"]::placeholder {
          font-size: 0.7rem;
        }

        input[type="number"]::-webkit-inner-spin-button {
          appearance: none;
          -moz-appearance: none;
          -webkit-appearance: none;
        }
      }
    }

    .btn-close,
    .btn-submit {
      width: 50%;
      font-size: 1rem;
    }

    .btn-close {
      border-radius: 0 0 0 5px;
      background-color: #f9f9f9;
    }

    .btn-submit {
      border-radius: 0 0 5px 0;
      background-color: black;
      color: #fff;
      border: 1px solid black;
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
`;

export { AttendBox };
