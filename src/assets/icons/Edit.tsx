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

const Edit = ({
  color = "black",
  transform,
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="Edit"
    transform={transform}
  >
    <title>Edit</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Edit" fill="#000000">
        <path
          d="M15.25,14.5 C15.6642136,14.5 16,14.8357864 16,15.25 C16,15.6296958 15.7178461,15.943491 15.3517706,15.9931534 L15.25,16 L8,16 C7.58578644,16 7.25,15.6642136 7.25,15.25 C7.25,14.8703042 7.53215388,14.556509 7.89822944,14.5068466 L8,14.5 L15.25,14.5 Z M14.3961,-0.0004 C14.8251,-0.0004 15.2271,0.1656 15.5311,0.4666 C16.1561,1.0956 16.1561,2.1156 15.5311,2.7396 L15.5311,2.7396 L4.3581,13.9126 C4.0691,14.2026 3.7391,14.4466 3.3771,14.6396 L3.3771,14.6396 L0.9791,15.9196 C0.8791,15.9726 0.7731,15.9996 0.6641,15.9996 C0.4331,15.9996 0.2151,15.8746 0.0941,15.6726 C-0.0259,15.4726 -0.0319,15.2296 0.0801,15.0216 L0.0801,15.0216 L1.3581,12.6226 C1.5511,12.2606 1.7961,11.9306 2.0861,11.6406 L2.0861,11.6406 L13.2601,0.4676 C13.5631,0.1656 13.9661,-0.0004 14.3961,-0.0004 Z"
          id="🎨-Icon-Color"
        ></path>
      </g>
    </g>
  </Svg>
);

export default Edit;
