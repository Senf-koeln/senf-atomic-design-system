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

const User = ({
  color = "black",
  transform,
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="User"
    transform={transform}
  >
    <title>User</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="User" fill="#000000">
        <path
          d="M8,9.3957 C3.99,9.3957 0.739,11.8387 0.739,14.8527 C0.739,15.4867 1.252,15.9997 1.886,15.9997 L14.114,15.9997 C14.748,15.9997 15.261,15.4867 15.261,14.8527 C15.261,11.8387 12.01,9.3957 8,9.3957 M8,7.844 C9.94,7.844 11.512,6.088 11.512,3.922 C11.512,1.756 10.189,0 8,0 C5.811,0 4.488,1.756 4.488,3.922 C4.488,6.088 6.06,7.844 8,7.844"
          id="🎨-Icon-Color"
        ></path>
      </g>
    </g>
  </Svg>
);

export default User;
