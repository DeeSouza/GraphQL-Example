import styled from "styled-components";

export const Container = styled.header`
  border-bottom: 1px solid black;
  background-color: #fff;
  box-shadow: 0 0 12px 0 #7a7a7a;
  position: relative;
  z-index: 2;

  .wrapper {
    height: 65px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 25px;
    max-width: 1280px;
    margin: 0 auto;
  }
`;
