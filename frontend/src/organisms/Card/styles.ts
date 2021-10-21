import styled from "styled-components";

type HeaderProps = {
  cover: string;
};

export const Container = styled.div`
  height: 500px;
  width: 300px;
  border-radius: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: #424242 0px 0px 13px -1px;
  margin: 0 20px;
  transform: translateY(0);
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: translateY(10px);
  }
`;

export const Header = styled.header<HeaderProps>`
  height: 340px;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background: url(${({ cover }) => cover}) no-repeat top center #cccccc;
  background-size: cover;
`;

export const Details = styled.div`
  background: linear-gradient(#242734, #4d4a02);
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  strong {
    color: #fff;
    font-size: 1.4rem;
    display: block;
    padding: 15px;
  }

  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    font-size: 1.3rem;

    .price {
      color: #fff;
      font-weight: bold;

      span {
        color: #34da77;
      }
    }

    .rating {
      color: #fff;
      font-weight: bold;
      display: flex;
      align-items: center;

      span {
        margin-left: 5px;
        vertical-align: middle;
      }
    }

    button {
      border: none;
      background: none;
      cursor: pointer;
      height: 40px;
      background-color: #117cde;
      padding: 0px 15px;
      border-radius: 0.5rem;
      color: #fff;
      font-weight: bold;
      opacity: 1;
      transition: all 0.25s ease-out;

      &:hover {
        opacity: 0.7;
      }

      svg {
        vertical-align: middle;
      }
    }
  }
`;
