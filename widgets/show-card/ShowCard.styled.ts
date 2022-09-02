import styled from "styled-components";

export const ShowCard = styled.div`
  border-radius: 12px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 30px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  * {
    b {
      display: block;
      margin: 4px 0;
    }

    b span {
      font-weight: normal;
    }
  }

  & > div:nth-child(1) {
    display: flex;
    flex-direction: row;

    div {
      margin-left: 20px;
      border-right: 1px solid red;
      padding-right: 20px;
      margin-right: 20px;

      p {
        margin: 12px 0;
      }
    }
  }

  & > div:nth-child(2) {
    width: 400px;

    & div {
      margin-top: 12px;
    }
  }
`;
