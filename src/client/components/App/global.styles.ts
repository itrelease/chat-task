import css from "styled-jsx/css";

export const globalStyles = css.global`
  * {
    box-sizing: border-box;
  }

  html,
  body,
  #__next {
    width: 100%;
    height: 100vh;
    height: -webkit-fill-available;
    font-family: Arial, sans-serif;
  }

  body,
  #app {
    display: flex;
  }

  body,
  p,
  h1,
  h2,
  h3,
  h4 {
    margin: 0;
  }

  #app {
    flex: 1;
  }
`;
