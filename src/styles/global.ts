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
  }

  .completed {
    /* background: #D9FFE3; */
    border: 2px solid #80ed99;
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

  /* MODAL */

  /* .modal-wrapper {
    visibility: hidden;
    opacity: 0;
  } */

  .modal-wrapper {
    height: 100vh;
    width: 100vw;

    position: fixed;
    top: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.8);

    display: flex;
    justify-content: center;
    align-items: center;

    visibility: visible;
    opacity: 1;
  }

  .modal {
    background: #F0F2F5;

    border-radius: 0.313rem;

    padding: 2.5rem;

    text-align: center;

    color: #787880;

    .button + .button {
      margin-left: 1rem;
    }

    img {
      width: 80px;
      margin-bottom: 2rem;
    }

    h3 {
      color: #5a5a66;

      font-weight: 600;
      font-size: 2rem;
      line-height: 2.625rem;

      margin-bottom: .5rem;
    }

    p {
      margin-bottom: 2rem;
    }

    a {
      text-decoration: none;
    }

    footer {
      .button {
        padding: 0.75rem 3rem;
        border-radius: 0.313rem;
        border: 0;

        font-weight: 700;
        font-size: 0.875rem;
        line-height: 1.625rem;
        text-transform: uppercase;

        transition: all 0.2s;

        cursor: pointer;

        display: inline-flex;
        justify-content: center;
        align-items: center;

        :nth-child(1) {
          color: #787880;
          background: #e1e3e5;

          :hover {
            background: #ECEEF0;
          }
        }

        &.red {
          background: #eb3b35;
          color: white;

          :hover {
            background: #FA3F38;
          }
        }

        &.green {
          background: #80ed99;
          color: white;

          :hover {
            background: #75D68B;
          }
        }
      }
    } 
  }

  /* ANIMAÇÔES */

  @keyframes up {
    from {
      opacity: 0;
      transform: translateY(35px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-up {
    transform: translateY(35px);
    opacity: 0;

    animation: up 200ms forwards;
  }

  @keyframes pop {
    from {
      opacity: 0;
      transform: scale(0);
    }

    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .animate-pop {
    transform: scale(0);
    opacity: 0;

    animation: pop 300ms forwards;
  }

  .reverse {
    animation-direction: reverse;
  }

  .back {
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .delay-1 {
    animation-delay: 100ms;
  }

  .delay-2 {
    animation-delay: 200ms;
  }


  /* RESPONSIVIDADE */

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
