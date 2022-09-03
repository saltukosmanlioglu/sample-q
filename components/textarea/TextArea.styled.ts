import styled from "styled-components";

export const TextArea = styled.div<{ error: boolean }>`
  width: 100%;

  textarea {
    width: 100%;
    outline: none;
    border: none;
    border-bottom: 1px solid ${({ error }) => (error ? "red" : "gray")};
    padding: 10px;
    border-radius: 0;
  }

  b {
    height: 0;
    margin: 8px 10px 0;
    font-family: mrsea-italic;
    font-size: 13px;
    color: red;
    animation: heights 1s;

    @keyframes heights {
      0% {
        height: 0;
      }
      100% {
        height: auto;
      }
    }
  }
`;
