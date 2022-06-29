/** @format */

import React, { FC } from "react";
import { SVGProps } from "react";
import styled from "styled-components";

interface SVGRProps {
  color?: string;
  transform?: string;
}

const Svg = styled.svg`
  transform: ${({ transform }) => (transform ? transform : undefined)};
`;

const Check: FC<SVGRProps> = ({ color = "black", transform }) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="Check"
    transform={transform}
  >
    <title>Check</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Check" fill={color}>
        <path
          d="M11.7928932,4.54139322 C12.1834175,4.15086893 12.8165825,4.15086893 13.2071068,4.54139322 C13.5675907,4.90187718 13.5953203,5.46910824 13.2902954,5.86139944 L13.2071068,5.95560678 L8.05610678,11.1066068 C7.23751222,11.9252013 5.93488982,11.964182 5.07019737,11.2235489 L4.94389322,11.1066068 L2.79289322,8.95560678 C2.40236893,8.56508249 2.40236893,7.93191751 2.79289322,7.54139322 C3.15337718,7.18090926 3.72060824,7.15317972 4.11289944,7.45820461 L4.20710678,7.54139322 L6.35810678,9.69239322 C6.42088735,9.75517379 6.51461787,9.7677299 6.58977843,9.73006156 L6.64189322,9.69239322 L11.7928932,4.54139322 Z"
          id="🎨-Icon-Color"
        ></path>
      </g>
    </g>
  </Svg>
);

export default Check;
