import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 75vh;
  background-image: linear-gradient(
    90deg,
    rgb(53, 69, 117) 5%,
    rgb(33, 45, 82) 20%,
    rgb(19, 19, 31) 60%
  );
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 1280px) {
    height: 60vh;
  }

  @media screen and (max-height: 800px) {
    height: 75vh;
  }

  @media screen and (max-width: 412px) {
    height: 90vh;
  }

  @media screen and (max-height: 720px) {
    height: 95vh;
  }
`;

export const Container = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    color: #e6e6e6;
    text-align: center;
    width: 60%;

    @media screen and (max-width: 412px) {
      width: 90%;
    }

    h2 {
      font-size: 1.8rem;
      margin-bottom: 7%;

      @media screen and (max-width: 1768px) {
        font-size: 1.6rem;
      }

      @media screen and (max-width: 1366px) {
        font-size: 1.4rem;
      }
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 600;

      @media screen and (max-width: 1768px) {
        font-size: 1.1rem;
      }

      @media screen and (max-width: 1366px) {
        font-size: 0.9rem;
      }
    }
  }

  img {
    width: 30%;

    @media screen and (max-width: 412px) {
      margin-top: 15%;
      width: 75%;
    }
  }
  @media screen and (max-width: 412px) {
    display: flex;
    flex-direction: column;
  }
`;
