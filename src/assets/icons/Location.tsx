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

const Location = ({
  color = "black",
  transform,
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="Location"
    transform={transform}
  >
    <title>Location</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Location" fill="#000000">
        <path
          d="M7.9998,7.9138 C6.8948,7.9138 5.9998,7.0188 5.9998,5.9138 C5.9998,4.8088 6.8948,3.9138 7.9998,3.9138 C9.1048,3.9138 9.9998,4.8088 9.9998,5.9138 C9.9998,7.0188 9.1048,7.9138 7.9998,7.9138 M7.9998,-0.0002 C4.7388,-0.0002 2.0858,2.6528 2.0858,5.9138 C2.0858,6.6138 2.1308,7.4728 2.6628,8.8098 C3.0708,9.8378 5.8608,14.0448 6.7058,15.3098 C6.9948,15.7418 7.4798,16.0008 7.9998,16.0008 C8.5198,16.0008 9.0048,15.7418 9.2928,15.3098 C10.1388,14.0448 12.9278,9.8378 13.3368,8.8098 C13.8698,7.4718 13.9148,6.6128 13.9148,5.9138 C13.9148,2.6528 11.2608,-0.0002 7.9998,-0.0002"
          id="🎨-Icon-Color"
        ></path>
      </g>
    </g>
  </Svg>
);

export default Location;
