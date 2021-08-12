import styled from "styled-components";

export const SectionHeader = styled.section`
  height: 5.5rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);

  h1 {
    grid-column: 2;
    justify-self: center;
    font-weight: bold;
    font-size: 1.05rem;
    color: var(--text-white);
  }

  aside {
    grid-column: 3;
    justify-self: end;
    height: 3rem;

    a {
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 3rem;
        border-radius: 50%;
      }
    }
  }
`;

export const Main = styled.main`
  padding: 1.2rem;

  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const New = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  a {
    background: var(--primary);
    text-decoration: none;
    font-weight: 500;
    font-size: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.8rem;
    gap: 0.7rem;
    width: fit-content;

    border: 1px solid var(--border);
    border-radius: 8px;
    color: var(--text-white);
    transition: 0.5s all;

    :hover {
      filter: brightness(0.9);
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: initial;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Empty = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  gap: 25px;

  img {
    width: 20rem;
  }

  .empty-text {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 15px;

    h2 {
      color: var(--text-gray);
      line-height: 24px;
      font-weight: 500;
    }

    span {
      color: var(--text-gray);
    }
  }
`;
