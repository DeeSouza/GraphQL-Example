import styled from "styled-components";

type NavMenuProps = {
  show: boolean;
};

export const NavMenu = styled.nav<NavMenuProps>`
  background-color: #000;
  height: 100%;
  width: 100%;
  max-width: 380px;
  padding-top: 60px;
  position: absolute;
  top: 0;
  left: 0;
  transform: ${({ show }) =>
    show ? "translate(0%, 0)" : "translate(-100%, 0)"};
  transition: all 0.5s ease-in-out;
  z-index: 1;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      color: #fff;
      font-size: 20px;
      padding: 10px 25px;
      cursor: pointer;
      margin: 5px 0;
      border-right: 2px solid transparent;
      background-color: transparent;
      transition: all 0.25s ease-in;

      &:hover {
        border-right: 5px solid tomato;
        background-color: #171717;
      }
    }
  }
`;
