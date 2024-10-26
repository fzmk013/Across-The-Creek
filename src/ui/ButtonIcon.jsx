/** @format */

import styled from "styled-components";

const ButtonIcon = styled.button`
  background: none;
  border: none;
  padding: 0.6rem;
  border-radius: 5px;
  transition: all 0.2s;
  position: relative;
  left: 80%;

  &:hover {
    background-color: #f3f4f6;
  }

  & svg {
    width: 2.2rem;
    height: 2.2rem;
    color: #087f5b;
  }
`;

export default ButtonIcon;
