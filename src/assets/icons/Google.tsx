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

const Google = ({
  color = "black",
  transform,
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="Google"
    transform={transform}
  >
    <title>Google</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Group" transform="translate(0.181800, -0.000300)">
        <path
          d="M3.5108,6.51 C4.1328,4.626 5.9028,3.273 7.9998,3.273 C9.1268,3.273 10.1458,3.673 10.9458,4.328 L13.2728,2 C11.8548,0.764 10.0368,0 7.9998,0 C4.8468,0 2.1318,1.799 0.8268,4.434 L3.5108,6.51 Z"
          id="Fill-2"
          fill="#EA4335"
        ></path>
        <path
          d="M10.6938,12.0087 C9.9668,12.4777 9.0438,12.7277 7.9998,12.7277 C5.9108,12.7277 4.1458,11.3847 3.5178,9.5127 L0.8248,11.5567 C2.1288,14.1957 4.8438,16.0007 7.9998,16.0007 C9.9548,16.0007 11.8238,15.3057 13.2228,13.9997 L10.6938,12.0087 Z"
          id="Fill-5"
          fill="#34A853"
        ></path>
        <path
          d="M13.2228,14 C14.6858,12.635 15.6368,10.603 15.6368,8 C15.6368,7.528 15.5638,7.018 15.4548,6.546 L7.9998,6.546 L7.9998,9.637 L12.2908,9.637 C12.0788,10.676 11.5108,11.481 10.6938,12.009 L13.2228,14 Z"
          id="Fill-8"
          fill="#4A90E2"
        ></path>
        <path
          d="M3.518,9.5122 C3.359,9.0382 3.273,8.5292 3.273,8.0002 C3.273,7.4792 3.356,6.9782 3.511,6.5102 L0.827,4.4332 C0.291,5.5072 0,6.7172 0,8.0002 C0,9.2802 0.297,10.4872 0.825,11.5572 L3.518,9.5122 Z"
          id="Fill-10"
          fill="#FBBC05"
        ></path>
      </g>
    </g>
  </Svg>
);

export default Google;
