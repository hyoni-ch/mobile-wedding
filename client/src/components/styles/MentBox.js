import styled from "styled-components";

const MentBox = styled.div`
  .mentImg {
    width: 30px;
    height: 30px;
    filter: invert(73%) sepia(28%) saturate(714%) hue-rotate(306deg)
      brightness(86%) contrast(88%);
    margin-bottom: 2rem;
  }

  .poetryBox {
    padding-bottom: 5rem;

    .poetry {
      p {
        margin: 0;
        max-width: 265px;
        width: 100%;
        height: 2rem;
        border-bottom: 1px solid #eee;
      }
    }
  }

  .myName {
    padding-top: 3rem;
    letter-spacing: 2px;
    line-height: 2.5;
    padding-bottom: 4rem;
  }
`;

export { MentBox };
