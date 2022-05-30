/** @format */

import * as React from "react";
import { SVGProps } from "react";
import styled from "styled-components";

interface SVGRProps {
  transform?: string;
}

const Svg = styled.svg`
  transform: ${({ transform }) => (transform ? transform : undefined)};
`;

const DotAllTopics = ({ transform }: SVGProps<SVGSVGElement> & SVGRProps) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="Dot-all-topics"
    transform={transform}
  >
    <title>Dot-all-topics</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Icons/Dot.all-colors">
        <image
          id="idea-type-all-"
          x="0"
          y="0"
          width="16"
          height="16"
          xlinkHref="data:image/png;base64,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"
        ></image>
      </g>
    </g>
  </Svg>
);

export default DotAllTopics;
