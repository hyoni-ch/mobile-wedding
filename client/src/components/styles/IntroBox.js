import styled from "styled-components";

const IntroBox = styled.div`
  .introTop {
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    word-break: break-all;
    color: #222222;
  }

  .wedding-name {
    letter-spacing: 0.25em;
    white-space: break-spaces;
    line-height: 2.4rem;
    width: 100%;
  }

  .wedding-date {
    width: 17rem;
    text-align: center;
    font-size: 1.2rem;
    line-height: 3.2rem;

    .wedding-date-num {
      letter-spacing: 0.1em;
      line-height: 1.8rem;
    }

    .wedding-date-num-1 {
      margin-right: 1.8rem;
    }

    .wedding-date-num-2 {
      margin-left: 1.8rem;
    }

    .wedding-date-line {
      width: 3.3rem;
      margin-left: auto;
      margin-right: auto;
      transform: rotate(-45deg);
      border-top: 1px solid #222222;
    }
  }

  .wedding-about {
    padding: 1.3rem 2rem 6rem;
  }
`;

export { IntroBox };
