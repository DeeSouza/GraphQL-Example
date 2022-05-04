import styled from "styled-components";

type HeaderProps = {
  cover: string;
};

export const Container = styled.div`
  height: 200px;
  max-width: 300px;
  width: 90%;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 10px 20px;
  transform: translateY(0);
  transition: all 0.25s ease-in-out;

  &:hover {
    transform: translateY(10px);
  }
`;

export const Header = styled.header<HeaderProps>`
  height: 135px;
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  background: url(${({ cover }) => cover}) no-repeat center top #cccccc;
  background-size: cover;
`;

export const Details = styled.div`
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  background-color: #ffffff;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  strong {
    color: #000;
    font-size: 1.2rem;
    display: block;
    margin-bottom: 5px;
  }

  .info {
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1rem;

    .info-detail {
      color: #000;
      font-weight: bold;
      display: flex;
      justify-content: center;

      span {
        margin-left: 3px;
      }
    }
  }
`;
