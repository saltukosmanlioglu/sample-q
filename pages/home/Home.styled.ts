import styled from "styled-components";

export const Home = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  button {
    width: calc((100% / 4) - 30px);
    padding: 20px;
    border-radius: 12px;
    height: 200px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  }
`;
