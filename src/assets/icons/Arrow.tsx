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

const Arrow: FC<SVGRProps> = ({ color = "black", transform }) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="Arrow"
    transform={transform}
  >
    <title>Arrow</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Arrow" fill={color}>
        <path
          d="M2.29289322,5.05179322 C2.65337718,4.69130926 3.22060824,4.66357972 3.61289944,4.96860461 L3.70710678,5.05179322 L7.82310678,9.16779322 C7.90433654,9.24902298 8.02817693,9.26256127 8.12361023,9.2084081 L8.17689322,9.16779322 L12.2928932,5.05179322 C12.6834175,4.66126893 13.3165825,4.66126893 13.7071068,5.05179322 C14.0675907,5.41227718 14.0953203,5.97950824 13.7902954,6.37179944 L13.7071068,6.46600678 L9.59110678,10.5820068 C8.75441698,11.4186966 7.42190796,11.458539 6.53799728,10.7015339 L6.40889322,10.5820068 L2.29289322,6.46600678 C1.90236893,6.07548249 1.90236893,5.44231751 2.29289322,5.05179322 Z"
          id="🎨-Icon-Color"
          transform="translate(8.000000, 7.999900) scale(-1, -1) rotate(90.000000) translate(-8.000000, -7.999900) "
        ></path>
      </g>
    </g>
  </Svg>
);

export default Arrow;
