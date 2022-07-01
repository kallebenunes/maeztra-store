import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 11rem;

  @media (max-width: 1320px){
    /* display: none; */
    padding: 1rem 6rem;
  }

  @media (max-width: 720px){
    padding: 2rem;
  }

  .container-start {
    text-align: center;
    font-weight: 700;
    font-size: 1rem;
    padding: 1rem 0;
    font-family: 'Titillium Web'
  }
`;

export const SliderItem = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-gray);
  padding: 1rem;
  height: 4rem;

  img {
    max-width: 100%;
    padding-right: 1rem;
  }
  span {
    h1 {
      font-size: 14px;
      padding-bottom: .1rem;
    }
    p {
      font-size: 12px;
    }
  }
`