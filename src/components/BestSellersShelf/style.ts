import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 11rem 2rem 11rem;

  @media (max-width: 1320px){
    /* display: none; */
    padding:0  6rem 2rem 6rem;
  }

  @media (max-width: 720px){
    padding: 2rem;
  }


  @media (max-width: 1023px){
    .swiper-button-next, 
    .swiper-button-prev {
      display: none;
    }
  }
  
  .swiper-button-next, 
  .swiper-button-prev{
    color: #000000;
    font-weight: 900;
  }

  .swiper-slide {
    height: initial;
  }

  .container-start {
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    padding: 3rem 0 1.5rem 0;
    font-family: 'Titillium Web';
    font-size: 2rem;
  }

`;
export const ColorSelector = styled.div`
  display: flex;
  gap: .5rem;
`

export const ProductCard = styled.div`

  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  div {

    div:nth-of-type(1) {
      background: #F2F2F2;
      display: flex;
      margin-bottom: 1rem;
      img {
        max-width: 100%;
      }
    }

    span {
      font-size: 1.25rem;
      font-weight: 700;
    }

    h1 {
      font-weight: 400;
      font-size: 1rem;
      padding: .5rem 0;
    }

    p {
      line-height: 1.4rem;
      font-size: 0.75rem;
      justify-self: end;
      align-self: flex-end;
      overflow: hidden; // Removendo barra de rolagem
      text-overflow: ellipsis; // Adicionando "..." ao final
      display: -webkit-box;
      -webkit-line-clamp: 3; // Quantidade de linhas
      -webkit-box-orient: vertical; 

      /* height: 68px; */
    }
  }

  & > button {
    background: var(--color-primary);
    color: var(--color-white);
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    font-family: 'Titillium Web';
    border-radius: .25rem;
    padding: .5rem 0;
    display: block;
    margin-top: .5rem;
  }
`