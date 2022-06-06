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

const AllOrganizationTypes = ({
  color = "black",
  transform,
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="AllOrganizationTypes"
    transform={transform}
  >
    <title>AllOrganizationTypes</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="AllOrganizationTypes" fill="#000000">
        <path
          d="M4,7 C5.65685425,7 7,5.65685425 7,4 C7,2.34314575 5.65685425,1 4,1 C2.34314575,1 1,2.34314575 1,4 C1,5.65685425 2.34314575,7 4,7 Z M12,7 C13.6568542,7 15,5.65685425 15,4 C15,2.34314575 13.6568542,1 12,1 C10.3431458,1 9,2.34314575 9,4 C9,5.65685425 10.3431458,7 12,7 Z M4,15 C5.65685425,15 7,13.6568542 7,12 C7,10.3431458 5.65685425,9 4,9 C2.34314575,9 1,10.3431458 1,12 C1,13.6568542 2.34314575,15 4,15 Z M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z"
          id="🎨-Icon-Color"
        ></path>
      </g>
    </g>
  </Svg>
);

export default AllOrganizationTypes;
