import styled from "styled-components";
import chesvronUpImg from "../../assets/images/chevron-up.svg";

export const Collapse = styled.details`
  width: 580px;
  height: fit-content;
  background: var(--background);
  border: solid 1px var(--border);
  border-radius: 8px;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.35);

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
    color: var(--text-gray);
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
    color: var(--text-gray);
  }

  p {
    line-height: 21px;
    color: var(--text-gray);
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

    border: 1px solid var(--text-gray);
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
