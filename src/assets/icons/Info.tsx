/** @format */

import * as React from "react";
import { SVGProps } from "react";
import styled from "styled-components";

interface SVGRProps {
  color?: string;
  transform?: string;
}

const Svg = styled.svg`
  transform: ${({ transform }) => (transform ? transform : undefined)};
`;

const Info = ({
  color = "black",
  transform,
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="Info"
    transform={transform}
  >
    <title>Info</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Info" fill="#000000">
        <path
          d="M10.6086957,16 L9.73913043,16 C8,16 6.60869565,14.6666667 6.60869565,13 L6.60869565,9 C6.60869565,8.83333333 6.43478261,8.66666667 6.26086957,8.66666667 L5.39130435,8.66666667 C4.69565217,8.66666667 4,8.16666667 4,7.33333333 C4,6.5 4.52173913,6 5.39130435,6 L6.26086957,6 C8,6 9.39130435,7.33333333 9.39130435,9 L9.39130435,13.1666667 C9.39130435,13.3333333 9.56521739,13.5 9.73913043,13.5 L10.6086957,13.5 C11.3043478,13.5 12,14 12,14.8333333 C12,15.6666667 11.3043478,16 10.6086957,16 M8,0 C9.2,0 10,0.8 10,2 C10,3.2 9.2,4 8,4 C6.8,4 6,3.2 6,2 C6,0.8 6.8,0 8,0"
          id="Combined-Shape"
        ></path>
      </g>
    </g>
  </Svg>
);

export default Info;
