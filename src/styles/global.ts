import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --body: #f0f2f5;
    --background: #fcfdff;
    --border: #e1e3e5;

    --primary: #abc4ff;

    --text-white: #fcfdff;
    --text-gray: #5a5a66;

  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Rubik", sans-serif;
  }

  header {
    background: var(--primary);
  }

  body {
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    background: var(--body);
  }

  .icon {
    height: 1.5rem;
    width: 1.5rem;
  }

  .container {
    /* width: min(1440px, 90vw); */
    width: min(1240px, 90vw);
    margin: 0 auto;
  }

  a,
  input,
  textarea,
  button,
  details,
  summary {
    outline: none;

    :focus {
      box-shadow: 0 0 0 2px var(--text-gray);
    }
  }


  ::-webkit-scrollbar {
    width: 3px;
  }
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-track {
    background: var(--body);
  }
  ::-webkit-scrollbar-thumb {
    background: #5a5a66;
  }
  ::-webkit-scrollbar,
  ::-webkit-scrollbar-track {
    background: var(--body);
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
