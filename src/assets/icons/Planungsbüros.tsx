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

const Planungsbüros = ({
  color = "black",
  transform,
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="Planungsbüros"
    transform={transform}
  >
    <title>Planungsbüros</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Planungsbüros" fill="#000000">
        <path
          d="M5.5,0 C5.22385763,0 5,0.223857625 5,0.5 L5,15.5 C5,15.7761424 5.22385763,16 5.5,16 L13.5,16 C14.1461732,16 14.67,15.4761732 14.67,14.83 L14.67,1.17 C14.67,0.523826843 14.1461732,0 13.5,0 L5.5,0 Z M11.67,4.33 L11.67,5 C11.67,5.55228475 11.2222847,6 10.67,6 L8.33,6 C7.77771525,6 7.33,5.55228475 7.33,5 L7.33,4.33 C7.33,3.77771525 7.77771525,3.33 8.33,3.33 L10.67,3.33 C11.2222847,3.33 11.67,3.77771525 11.67,4.33 Z M3.5,0 L2.5,0 C1.85382684,0 1.33,0.523826843 1.33,1.17 L1.33,14.83 C1.33,15.4761732 1.85382684,16 2.5,16 L3.5,16 C3.77614237,16 4,15.7761424 4,15.5 L4,0.5 C4,0.223857625 3.77614237,0 3.5,0 Z"
          id="🎨-Icon-Color"
        ></path>
      </g>
    </g>
  </Svg>
);

export default Planungsbüros;
