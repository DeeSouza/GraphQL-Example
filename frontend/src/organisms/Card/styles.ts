import styled from "styled-components";

export const Container = styled.div`
  height: 500px;
  width: 300px;
  border-radius: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: #424242 0px 0px 13px -1px;
`;

export const Header = styled.header`
  height: 340px;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background: url("https://img.hype.games/cdn/b874b2a3-a2cf-45df-941f-c920452a9bb8bak-cover.jpg")
    no-repeat top center #cccccc;
  background-size: cover;
`;

export const Details = styled.div`
  background-color: #242734;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;

  strong {
    color: #fff;
    font-size: 1.6rem;
    display: block;
    padding: 15px;
  }

  .info {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    font-size: 1.4rem;

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
    }
  }
`;
