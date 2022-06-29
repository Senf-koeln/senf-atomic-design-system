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

const Mail: FC<SVGRProps> = ({ color = "black", transform }) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="Mail-fill"
    transform={transform}
  >
    <title>Mail-fill</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Group-6" transform="translate(0.000000, 1.654800)">
        <path
          d="M14,12.69 L2,12.69 C0.895,12.69 0,11.795 0,10.69 L0,2 C0,0.896 0.895,-1.77635684e-15 2,-1.77635684e-15 L14,-1.77635684e-15 C15.105,-1.77635684e-15 16,0.896 16,2 L16,10.69 C16,11.795 15.105,12.69 14,12.69"
          id="Fill-2"
          fill={color}
        ></path>
        <path
          d="M12.3849,3.4756 L8.7199,6.8816 C8.2959,7.2746 7.6409,7.2746 7.2179,6.8816 L3.5529,3.4756"
          id="Stroke-4"
          stroke="#FFFFFF"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></path>
      </g>
    </g>
  </Svg>
);

export default Mail;
