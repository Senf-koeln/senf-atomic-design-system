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

const Facebook = ({
  color = "black",
  transform,
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="Facebook"
    transform={transform}
  >
    <title>Facebook</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Facebook" fill="#2175E2">
        <path
          d="M13.8438,0 L2.1558,0 C0.9658,0 -0.0002,0.965 -0.0002,2.156 L-0.0002,13.844 C-0.0002,15.035 0.9648,16 2.1558,16 L7.9208,16 L7.9298,10.282 L6.4448,10.282 C6.2518,10.282 6.0948,10.126 6.0948,9.933 L6.0868,8.09 C6.0868,7.896 6.2438,7.738 6.4378,7.738 L7.9208,7.738 L7.9208,5.958 C7.9208,3.891 9.1828,2.766 11.0258,2.766 L12.5388,2.766 C12.7328,2.766 12.8898,2.923 12.8898,3.116 L12.8898,4.67 C12.8898,4.864 12.7328,5.021 12.5388,5.021 L11.6108,5.021 C10.6078,5.021 10.4138,5.498 10.4138,6.197 L10.4138,7.739 L12.6168,7.739 C12.8268,7.739 12.9898,7.922 12.9648,8.13 L12.7468,9.973 C12.7258,10.15 12.5758,10.282 12.3988,10.282 L10.4238,10.282 L10.4138,16 L13.8438,16 C15.0348,16 15.9998,15.035 15.9998,13.844 L15.9998,2.156 C15.9998,0.965 15.0348,0 13.8438,0"
          id="🎨-Logo-Color"
        ></path>
      </g>
    </g>
  </Svg>
);

export default Facebook;
