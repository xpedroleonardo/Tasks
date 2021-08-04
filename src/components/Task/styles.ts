import styled from "styled-components";

export const Main = styled.main`
  padding: 2rem;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;

  form,
  aside {
    width: 48%;
  }

  .separator {
    width: 100%;
    height: 1px;
    border: 1px solid var(--border);
    margin: 1.5rem 0;
  }

  form fieldset {
    border: none;
  }

  form fieldset legend,
  aside h1 {
    font-weight: 600;
    font-size: 2rem;
    line-height: 2.625rem;
    color: var(--text-gray);
  }

  @media (max-width: 700px) {
    main.main {
      flex-direction: column;
      flex-wrap: nowrap;
    }

    form,
    aside {
      width: 100%;
    }
  }
`;

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 20px;

  label {
    color: var(--text-gray);
    font-weight: 500;
  }

  input {
    color: var(--text-gray);
    width: 100%;
    background: var(--background);
    border: 1px solid var(--border);
    border-radius: 4px;

    font-size: 1rem;
    line-height: 24px;
    padding: 13px 16px;
  }

  textarea {
    color: var(--text-gray);
    width: 100%;
    height: 180px;
    resize: none;

    background: var(--background);
    border: 1px solid var(--border);
    border-radius: 4px;

    font-size: 1rem;
    line-height: 24px;
    padding: 13px 16px;

    ::-webkit-scrollbar {
      display: block;
      width: 3px;
    }

    ::-webkit-scrollbar-thumb {
      background-color: var(--text-gray);
    }

    ::-webkit-scrollbar-track-piece:start {
      background: transparent;
      margin-top: 20px;
    }

    ::-webkit-scrollbar-track-piece:end {
      background: transparent;
      margin-bottom: 20px;
    }
  }
`;

export const Collapse = styled.section`
  width: auto;
  background: var(--background);
  height: fit-content;
  border: solid 1px var(--border);
  border-radius: 8px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.45);
  transition: background-color 0.25s;
  will-change: background-color;
`;

export const TitleCollapse = styled.summary`
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  span {
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--text-gray);
  }
`;

export const DescriptionCollapse = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border-top: #f5f5f5 solid 2px;
  padding: 16px 16px 0;
  font-size: 14px;
  line-height: 21px;

  .creator {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-wrap: wrap;
    gap: 15px;
    color: var(--text-gray);
  }

  p {
    line-height: 21px;
    margin-bottom: 16px;
    word-wrap: break-word;
    color: var(--text-gray);
  }
`;

export const Button = styled.button`
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5rem;
  border: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.9rem 0.8rem;
  background: var(--primary);
  color: var(--text-white);
  border-radius: 8px;
  transition: 0.5s all;

  :hover {
    filter: brightness(0.9);
  }

  @media (max-width: 700px) {
    line-height: 24px;
  }
`;
