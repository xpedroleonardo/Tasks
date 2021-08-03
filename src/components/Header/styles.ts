import styled from "styled-components";

export const HeaderGrid = styled.section`
  height: 5.5rem;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);

  a,
  a img {
    height: 1.5rem;
    width: 1.5rem;
  }

  h1 {
    justify-self: center;

    font-weight: 600;
    font-size: 1rem;
  }
`;
