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

const More = ({
  color = "black",
  transform,
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="More"
    transform={transform}
  >
    <title>More</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="More" fill="#000000">
        <path
          d="M8,6.25 C8.96649831,6.25 9.75,7.03350169 9.75,8 C9.75,8.96649831 8.96649831,9.75 8,9.75 C7.03350169,9.75 6.25,8.96649831 6.25,8 C6.25,7.03350169 7.03350169,6.25 8,6.25 Z M14.25,6.25 C15.2164983,6.25 16,7.03350169 16,8 C16,8.96649831 15.2164983,9.75 14.25,9.75 C13.2835017,9.75 12.5,8.96649831 12.5,8 C12.5,7.03350169 13.2835017,6.25 14.25,6.25 Z M1.75,6.25 C2.71649831,6.25 3.5,7.03350169 3.5,8 C3.5,8.96649831 2.71649831,9.75 1.75,9.75 C0.783501688,9.75 1.18361906e-16,8.96649831 0,8 C-1.18361906e-16,7.03350169 0.783501688,6.25 1.75,6.25 Z"
          id="🎨-Icon-Color"
        ></path>
      </g>
    </g>
  </Svg>
);

export default More;
