import styled from "styled-components";

export const MovieCard = styled.button`
  border-radius: 12px;
  overflow: hidden;
  width: calc(25% - 30px);
  height: 400px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

  img {
    object-fit: fill;
  }
`;
