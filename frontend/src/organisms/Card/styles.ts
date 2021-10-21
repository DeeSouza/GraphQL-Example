import styled from "styled-components";

export const Container = styled.div`
  height: 500px;
  width: 300px;
  border-radius: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Header = styled.header`
  height: 300px;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background-color: #cccccc;
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

    .price {
      font-size: 1.2rem;
      color: #fff;
      font-weight: bold;
    }

    .rating {
      font-size: 1.2rem;
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
    }
  }
`;
