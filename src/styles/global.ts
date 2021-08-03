import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --backgroud: #f0f2f5;
    --border: #e1e3e5;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
  }

  body {
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    background: var(--backgroud);
  }

  .container {
    /* width: min(1440px, 90vw); */
    width: min(1240px, 90vw);
    margin: 0 auto;
  }

  header {
    width: 100vw;
  }

  details summary {
    list-style: none;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; /* 15px */
    }
  }

  @media (max-width: 970px) {
    html {
      font-size: 87.5%; /* 14px */
    }
  }

  @media (max-width: 700px) {
    :root {
      font-size: 75%; /* 12px */
    }
  }

  @media (max-width: 590px) {
    :root {
      font-size: 62.25%; /* 10px */
    }
  }
`;
