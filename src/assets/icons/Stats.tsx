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

const Stats = ({
  color = "black",
  transform,
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="Stats"
    transform={transform}
  >
    <title>Stats</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Icons/Stats" fill={color}>
        <path
          d="M6.3,9 L6.3,9 C5.7,9 5.3,9.4 5.3,10 L5.3,15 C5.3,15.6 5.7,16 6.3,16 C6.9,16 7.3,15.6 7.3,15 L7.3,10 C7.2,9.5 6.8,9 6.3,9 M13.3,3.5 L13.3,3.5 C12.7,3.5 12.3,3.9 12.3,4.5 L12.3,15 C12.3,15.6 12.7,16 13.3,16 C13.9,16 14.3,15.6 14.3,15 L14.3,4.5 C14.2,3.9 13.8,3.5 13.3,3.5 M2.8,5.9 L2.8,5.9 C2.2,5.9 1.8,6.3 1.8,6.9 L1.8,15 C1.8,15.6 2.2,16 2.8,16 C3.4,16 3.8,15.6 3.8,15 L3.8,6.9 C3.8,6.4 3.3,5.9 2.8,5.9 M9.8,0 L9.8,0 C9.2,0 8.8,0.4 8.8,1 L8.8,15 C8.8,15.6 9.2,16 9.8,16 C10.4,16 10.8,15.6 10.8,15 L10.8,1 C10.8,0.4 10.3,0 9.8,0"
          id="🎨-Icon-Color"
        ></path>
      </g>
    </g>
  </Svg>
);

export default Stats;
