import styled from "styled-components";

export const Container = styled.div`
  ul {
    display: flex;
    align-items: center;

    li + li {
      margin-left: 1rem;
    }
  }
`;