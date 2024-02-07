import styled from "styled-components";

const CalendarBox = styled.div`
  padding-bottom: 4rem;

  .calendar {
    color: #777777;
    margin-bottom: 3rem;

    table {
      width: 75%;

      .table-th {
        padding-bottom: 1rem;
        padding-top: 1rem;
      }

      .table-td {
        padding: 0.5rem 0.2rem;

        .td-div {
          height: 2.2rem;
        }

        .special-day {
          position: relative;

          background-color: rgba(208, 140, 149, 0.7);
          color: #fff;
          border-radius: 50%;
          font-weight: 500;
        }

        .special-day-time {
          position: absolute;
          top: 110%;
          width: 5rem;
          color: rgb(173, 134, 139);
          font-weight: 700;
          font-size: 0.8rem;
        }
      }
    }

    @media screen and (max-width: 400px) {
      table {
        width: 90%;

        .td-div {
          max-height: 2rem;
        }
      }
    }
  }
`;

export { CalendarBox };
