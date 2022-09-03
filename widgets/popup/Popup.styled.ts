import styled from "styled-components";

export const Popup = styled.div`
  position: fixed;
  width: 300px;
  bottom: 80px;
  right: 40px;
  border-radius: 12px;
  background-color: #fff;
  padding: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  & > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  p {
    margin-top: 20px;
  }
`;
