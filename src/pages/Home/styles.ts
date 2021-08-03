import styled from "styled-components";
import chesvronUpImg from "../../assets/images/chevron-up.svg";

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
  }

  aside {
    grid-column: 3;
    justify-self: end;

    img {
      width: 3rem;
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
    text-decoration: none;
    color: #000;
    font-weight: bold;
    font-size: 1rem;

    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.8rem;
    gap: 0.7rem;
    width: fit-content;

    border: 2px solid #000000;
    border-radius: 8px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: initial;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 24px;
`;

export const Collapse = styled.details`
  width: 580px;
  height: fit-content;
  border: solid 2px #000;
  border-radius: 8px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.3);

  &[open] {
    summary {
      img {
        display: none;
      }

      &:after {
        content: url(${chesvronUpImg});
        cursor: pointer;
        height: 24px;
      }
    }
  }
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
  }

  img {
    cursor: pointer;
  }
`;

export const MainCollapse = styled.main`
  display: flex;
  flex-direction: column;
  gap: 20px;

  border-top: var(--border) solid 2px;
  padding: 16px 16px 0;
  font-size: 14px;
  line-height: 21px;

  .creator {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 15px;
  }

  p {
    line-height: 21px;
  }
`;

export const FooterCollapse = styled.footer`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
  padding: 16px;

  .separator {
    width: 100%;

    border: 1px solid #000000;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 24px;
  }

  section span {
    font-weight: 500;
    font-size: 16px;
    line-height: 19px;
  }

  section aside,
  section .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
`;
