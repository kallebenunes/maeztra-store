import styled from "styled-components";


export const Container = styled.div`
 
  display: flex;
  align-items: center;
  position: relative;

  & > button {
    color: var(--color-white);
    text-transform: uppercase;
    position: absolute;
    top: -2.25rem;
    right: -.25rem;
    padding: .5rem;
    background: transparent;
    z-index: 3;
  }

 & > img {
    max-width: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-grow: 1;
    color: #464B54;

      h1 {
        font-size: 1rem;
        margin-top: 1rem;
        text-transform: uppercase;
        font-weight: 400;
        
      }

      p {
        font-size: 1.5rem;
        text-align: center;
        padding: 2rem 3rem;
        line-height: 1.8rem;
        font-weight: 400;

        b {
          font-weight: bold;
          font-size: 1.5rem;
        }
      }

      div {

        input {
          border: 1px solid #c4c4c4;
          padding: .7rem;
          width: 100%;
          margin-bottom: 1rem;
          border-radius: .75rem;
        }

        button {
          background: var(--color-primary);
          color: var(--color-white);
          padding: .7rem;
          width: 100%;
          border-radius: .75rem;

          display: flex;
          align-items: center;
          justify-content: center;

          span {
            margin-right: .5rem;
          }
        }

        max-width: 25rem;
        width: 70%;
        /* background: red; */
      }
    }

  @media (max-width: 1024px){
    & > img {
      display: none;
    }

    div {
      padding: 2rem 0;

      p {
        /* font-size: 1.5rem;
        background: red; */
        padding: 1rem 2rem;
      }
    }
  }
  
`