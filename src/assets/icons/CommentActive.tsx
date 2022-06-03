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

const CommentActive = ({
  color = "black",
  transform,
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="CommentActive"
    transform={transform}
  >
    <title>CommentActive</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Icons/Comment.fill" fill="#000000">
        <path
          d="M9.9998,0 L5.9998,0 C3.1048,0 0.7498,2.355 0.7498,5.25 L0.7498,7.705 C0.7498,9.376 1.5668,10.962 2.9358,11.946 C3.1328,12.088 3.2498,12.313 3.2498,12.549 L3.2498,15.25 C3.2498,15.535 3.4108,15.796 3.6668,15.922 C3.7718,15.975 3.8868,16 3.9998,16 C4.1608,16 4.3208,15.948 4.4538,15.847 L8.0508,13.108 C8.1808,13.01 8.3428,12.955 8.5058,12.955 L9.9998,12.955 C12.8948,12.955 15.2498,10.6 15.2498,7.705 L15.2498,5.25 C15.2498,2.355 12.8948,0 9.9998,0"
          id="🎨-Icon-Color"
        ></path>
      </g>
    </g>
  </Svg>
);

export default CommentActive;
