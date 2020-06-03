import { createGlobalStyle } from 'styled-components';
import 'font-awesome/css/font-awesome.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
    display: flex;
    flex-flow: column;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    font-family: 'Nunito Sans', sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
