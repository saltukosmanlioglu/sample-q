import styled from "styled-components";

export const Movie = styled.div``;

export const OtherOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  margin-top: 20px;

  & > :last-child {
    margin-left: 20px;
  }
`;
