/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import { ShapeProps } from "./Shape.types";

const StyledWrapper = styled.div<ShapeProps>`
  position: ${({ position }) => (position ? position : "relative")};
  width: 100%;
  height: 70px;
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : "0px")};
  z-index: -1;
  display: flex;
  flex-direction: column;
  pointer-events: none;
`;

const Shapes = [
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 390 464"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M 390 464.613 L 0 464.613 L 0 71.912 C 0 71.912 36.092 36.859 111.8 46.425 C 187.508 55.991 219.827 62.556 257.92 53.187 C 296.013 43.818 304.708 17.337 331.24 5.334 C 357.772 -6.668 390 5.334 390 5.334 Z"
      fill="rgb(254, 217, 87)"
    ></path>
  </svg>,

  <svg
    width="100%"
    height="100%"
    viewBox="0 0 390 500"
    preserveAspectRatio="none"
    style={{ marginTop: "-10px" }}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M139 84.5C65 68.9 22 91 0 107.5V0H390.5V54C363.5 45.5 334 47 313.5 63.5C288.5 83.6219 231.5 104 139 84.5Z"
      fill="#FED957"
    />
  </svg>,
];

const Shape: FC<ShapeProps> = ({ variant, position, marginTop }) => {
  return (
    <StyledWrapper position={position} marginTop={marginTop}>
      {Shapes[variant]}
    </StyledWrapper>
  );
};

export default Shape;
