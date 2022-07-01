import styled from "styled-components";

interface ColorBoxProps {
  colorCode: string;
  isActive: boolean;
}

export const Container = styled.div`
  display: flex;
  gap: .5rem;
`;

export const ColorBox = styled.button<ColorBoxProps>`

  width: 1.75rem;
  height: 1.75rem;
  display: block;
  border-radius: .25rem;
  background: ${(props) => props.colorCode};
  border: ${(props) => props.isActive ? '1px solid #000000' : 'none'}

`