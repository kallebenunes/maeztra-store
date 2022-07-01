import styled from "styled-components";

export const Container = styled.div`

  margin: 2rem 11rem;
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px){
    margin: 2rem;

    grid-template-columns: 1fr;
  }

  @media (max-width: 360px){
    margin: 1rem 0;
  }

  div {
    padding: 3rem;

    h1 {
      font-size: 1.5rem;
      padding-bottom: 1rem;
    }
  }

  img {
    max-width: 100%;
    object-fit: cover;
  }

`;