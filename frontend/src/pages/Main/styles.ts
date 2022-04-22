import styled from "styled-components";

export const Container = styled.main`
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;
