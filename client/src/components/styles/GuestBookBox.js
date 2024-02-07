import styled from "styled-components";

const GuestBookBox = styled.div`
  .btn-upload {
    min-height: 1.2rem;
    font-size: 1rem;
    margin-bottom: 5px;
  }

  .upload-box {
    font-family: "SUIT-Regular";

    .upload-form {
      background-color: #fff;
      border: 1px solid #eee;
      border-radius: 0.5rem;
      padding: 1.5rem;

      hr {
        margin-top: 0.1rem;
        border-right-width: 1px;
        height: 0.7rem;
        border-top-width: 0;
        border-color: #f9f9f9;
        background: #f9f9f9;
        color: #f9f9f9;
        margin-left: 0.2rem;
      }

      input {
        height: 1rem;
        padding: 0.5rem;
        border: none;
        font-family: inherit;
        font-size: 1rem;
        background: inherit;
      }

      input#name {
        width: 80%;
      }

      input#pw {
        width: 80%;
      }

      textarea {
        position: absolute;
        top: -0.4rem;
        left: 0;
        resize: none;
        line-height: 2rem;
        width: 100%;
        text-indent: 2.9rem;
        overflow: hidden;
        background: inherit;
        border: none;
        font-family: inherit;
        font-size: 1rem;
      }

      input:focus,
      textarea:focus {
        outline: none;
      }

      .margin-b03 {
        margin-bottom: 0.6rem;
      }

      .btn-upload-submit {
        background-color: #f9f9f9;
        margin-top: 0.5rem;
      }

      .btn-upload-submit.edit {
        margin-right: 0.5rem;
      }

      .btn-upload-submit.edit,
      .btn-upload-submit.cancel {
        width: 50%;
      }

      .showPswd {
        display: flex;
        justify-content: flex-end;
      }

      .upload {
        background-image: linear-gradient(
          transparent,
          transparent calc(2rem - 1px),
          #eee 0
        );
        background-size: 100% 2rem;

        .title-upload {
          padding-right: 0.5rem;
          min-width: 36px;
        }

        .title-upload.password {
          min-width: 65px;
        }

        .upload-content {
          height: 10rem;
        }
      }
    }
  }

  .guestbook-list {
    font-family: "SUIT-Regular";
    overflow: auto;
    max-height: 330px;

    .guestbook-ul {
      margin-right: 3px;
    }

    .guestbook-li {
      background-color: #fff;
      border: 1px solid #eee;
      border-radius: 5px;
      margin-bottom: 5px;
      min-height: 90px;
      padding: 1rem;

      .small {
        color: #ccc;
        font-size: 0.9rem;
      }

      .name-box {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        margin-bottom: 5px;

        .name {
          display: flex;
          justify-content: flex-start;
          min-width: 15%;
        }

        .date {
          display: flex;
          justify-content: flex-start;
        }

        .btn-ud {
          display: flex;
          justify-content: flex-end;

          .edit,
          .delete {
            cursor: pointer;
          }

          .edit {
            margin-right: 5px;
          }
        }
      }

      .content-box {
        display: flex;
        justify-content: flex-start;
        text-align: left;
      }
    }
  }
  .guestbook-list::-webkit-scrollbar {
    background-color: inherit;
  }

  .guestbook-list::-webkit-scrollbar-thumb {
    background-color: #fff;
    border: 1px solid #eee;
    border-radius: 5px;
  }

  @media (max-width: 380px) {
    input::placeholder {
      font-size: 0.6rem;
    }
  }
`;

export { GuestBookBox };
