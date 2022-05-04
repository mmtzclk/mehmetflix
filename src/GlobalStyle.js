import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans', sans-serif;
    color: white;
  }

  .App{
    background: black;
  }
`;

export default GlobalStyle;
