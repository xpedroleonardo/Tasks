import styled from "styled-components";

export const Main = styled.main`
  padding: 2rem;

  section {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;

    img.avatar {
      width: 20%;

      min-height: 150px;
      max-height: 270px;
      min-width: 150px;
      max-width: 270px;
      border-radius: 50%;
    }
  }

  @media (max-width: 700px) {
    form {
      width: 100%;
    }

    section img.avatar {
      width: 70%;
    }
  }
`;

export const Group = styled.div`
  width: 80%;
  max-width: 350px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    color: var(--text-gray);
    width: 100%;
    background: var(--background);
    border: 1px solid var(--border);
    border-radius: 4px;

    font-size: 1rem;
    line-height: 24px;
    padding: 13px 16px;

    &#imageInput {
      display: none;
    }
  }

  label {
    color: var(--text-gray);
    font-weight: 500;

    &#image {
      font-weight: normal;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 15px;

      width: 100%;
      background: var(--background);
      border: 1px solid var(--border);
      border-radius: 4px;

      padding: 13px 16px;

      span {
        line-height: 24px;
        width: auto;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  button {
    width: 100%;
    font-weight: bold;
    font-size: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    color: var(--text-white);
    padding: 0.9rem 0.8rem;
    background: var(--primary);
    border: 1px solid var(--border);
    border-radius: 8px;
  }
`;
