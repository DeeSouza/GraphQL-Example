import styled from "styled-components";

type ContainerProps = {
  show: boolean;
};

export const Container = styled.main<ContainerProps>`
  min-height: calc(100% - 51px);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  transform: ${({ show }) =>
    show ? "translate(380px, 0)" : "translate(0px, 0)"};
  transition: all 0.5s ease-in-out;

  @media screen and (min-width: 1024px) {
    display: flex;
    flex-direction: row;
  }
`;
