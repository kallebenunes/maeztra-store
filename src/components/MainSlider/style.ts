import styled from "styled-components";

export const Container = styled.div`
  
  .swiper-button-next, 
  .swiper-button-prev{
    color: #000000;
    font-weight: 900;
  }

  .swiper-button-next {
    right: 100px;
  }
  .swiper-button-prev{
    left: 100px;
  }

  .swiper-pagination-bullet {
    background: transparent;
    opacity: 1;
    border: 2px solid var(--color-primary);
    width: 1rem;
    height: 1rem;
  }

  .swiper-pagination-bullet-active {
    background: var(--color-primary);
  }

  @media (max-width: 720px){
    .swiper-button-next {
      right: 20px;
    }
    
    .swiper-button-prev{
      left: 20px;
    }
  }

  @media (max-width: 360px){
    .swiper-button-next {
      right: 10px;
    }
    
    .swiper-button-prev{
      left: 10px;
    }
  }

`

export const SlideItem = styled.div`

  font-family: 'Montserrat';
  color: var(--color-white);

  img {
    max-width: 100%;
    min-height: 320px;
    object-fit: cover;
  }

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    
  }

  p {
    font-weight: 300;
    line-height: 1.5rem;
    font-size: 20px;
    max-width: 450px;
    margin: 2.5rem 0;
  }

  a {
    display: flex;
    justify-content: center;
    max-width: 7rem;
    background: var(--color-primary);
    color: var(--color-white);
    border-radius: .5rem;
    padding: .5rem;
    font-weight: 400;
    font-size: 1rem;
  }

  div {
    position: absolute;
    padding: 0 22rem;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  
  }

  @media (max-width: 1024px){
    h1 {
      font-size: 1.5rem;
      
    }

    div {
      padding: 10rem;
    }
  }

  @media (max-width: 720px){
    div {
      padding: 6rem;
    }
  }

  @media (max-width: 360px){

    h1 {
      font-size: 1.5rem;
    }

    div {
      padding: 3rem;
    }

    p {
      font-size: 1rem;
    }
  }

`

export const MainSliderMobile = styled.div`

  display: none;

  @media (max-width: 720px){
    display: block;
  }


`