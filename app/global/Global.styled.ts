import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
  }

  a {
    text-decoration: none;
    color: #000;
    cursor: pointer;
  }

  button {
    outline: none;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
`;

export default GlobalStyle;
