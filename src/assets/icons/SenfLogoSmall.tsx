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

const SenfLogoSmall = ({
  color = "black",
  transform,
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="SenfLogoSmall"
    transform={transform}
  >
    <title>SenfLogoSmall</title>
    <defs>
      <polygon
        id="path-1"
        points="1.505 0.0002 14.495 0.0002 14.495 16 1.505 16"
      ></polygon>
    </defs>
    <g
      id="Senf-S"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <mask id="mask-2" fill="white">
        <use xlinkHref="#path-1"></use>
      </mask>
      <g id="Clip-5"></g>
      <path
        d="M2.643,14.8622 C3.591,15.5262 5.203,16.0002 7.597,16.0002 C12.172,16.0002 14.495,14.1982 14.495,10.8562 C14.495,8.0352 12.196,6.8032 9.185,6.1632 C7.597,5.8072 6.388,5.7122 6.388,4.8352 C6.388,4.0532 7.052,3.6502 8.427,3.6502 C9.873,3.6502 11.437,4.3612 12.456,5.3092 C12.551,5.3812 14.139,4.2432 14.139,2.9152 C14.139,2.1812 13.76,1.5172 12.907,0.9952 C11.959,0.4032 10.489,0.0002 8.379,0.0002 C4.184,0.0002 1.861,1.8722 1.861,5.0252 C1.861,8.2012 4.421,9.1972 6.981,9.7422 C8.498,10.0502 9.683,10.2162 9.683,11.1642 C9.683,11.9462 9.019,12.3492 7.573,12.3492 C5.962,12.3492 4.042,11.4962 3.07,10.5952 C2.904,10.4772 1.505,11.7092 1.505,12.8472 C1.505,13.6062 1.837,14.3172 2.643,14.8622"
        id="Fill-4"
        fill="#FFD96B"
        mask="url(#mask-2)"
      ></path>
    </g>
  </Svg>
);

export default SenfLogoSmall;
