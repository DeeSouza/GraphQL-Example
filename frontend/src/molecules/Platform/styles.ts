import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  background-color: #107911;
  height: 35px;
  color: #fff;
  font-weight: 500;
  border-radius: 0.5rem;
  padding: 10px 15px;
  left: 10px;
  top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }

  span {
    margin-left: 8px;
    font-size: 0.9rem;
  }
`;
