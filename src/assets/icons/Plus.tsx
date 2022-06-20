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

const Plus: FC<SVGRProps> = ({ color = "black", transform }) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="Plus"
    transform={transform}
  >
    <title>Plus</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Plus" fill={color}>
        <path
          d="M8,2.5 C8.37969577,2.5 8.69349096,2.78215388 8.74315338,3.14822944 L8.75,3.25 L8.75,7.25 L12.75,7.25 C13.1642136,7.25 13.5,7.58578644 13.5,8 C13.5,8.37969577 13.2178461,8.69349096 12.8517706,8.74315338 L12.75,8.75 L8.75,8.75 L8.75,12.75 C8.75,13.1642136 8.41421356,13.5 8,13.5 C7.62030423,13.5 7.30650904,13.2178461 7.25684662,12.8517706 L7.25,12.75 L7.25,8.75 L3.25,8.75 C2.83578644,8.75 2.5,8.41421356 2.5,8 C2.5,7.62030423 2.78215388,7.30650904 3.14822944,7.25684662 L3.25,7.25 L7.25,7.25 L7.25,3.25 C7.25,2.83578644 7.58578644,2.5 8,2.5 Z"
          id="🎨-Icon-Color"
        ></path>
      </g>
    </g>
  </Svg>
);

export default Plus;
