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

const Apple = ({
  color = "black",
  transform,
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="Apple"
    transform={transform}
  >
    <title>Apple</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Apple" fill="#000000">
        <path
          d="M11.0787,0 L11.1927,0 C11.2837,1.128 10.8527,1.971 10.3297,2.582 C9.8157,3.188 9.1127,3.776 7.9757,3.687 C7.8997,2.575 8.3307,1.794 8.8537,1.185 C9.3387,0.618 10.2267,0.112 11.0787,0 M14.5221,11.7444 L14.5221,11.7764 C14.2021,12.7444 13.7461,13.5744 13.1901,14.3444 C12.6821,15.0434 12.0591,15.9834 10.9481,15.9834 C9.9881,15.9834 9.3501,15.3664 8.3651,15.3494 C7.3241,15.3324 6.7511,15.8654 5.7991,16.0004 L5.4751,16.0004 C4.7761,15.8984 4.2121,15.3454 3.8011,14.8464 C2.5891,13.3724 1.6521,11.4684 1.4781,9.0314 L1.4781,8.3154 C1.5521,6.5724 2.3991,5.1544 3.5251,4.4674 C4.1201,4.1014 4.9371,3.7904 5.8461,3.9294 C6.2361,3.9904 6.6351,4.1234 6.9841,4.2554 C7.3151,4.3824 7.7291,4.6084 8.1211,4.5964 C8.3861,4.5884 8.6501,4.4504 8.9181,4.3524 C9.7021,4.0694 10.4711,3.7444 11.4841,3.8974 C12.7021,4.0814 13.5661,4.6224 14.1001,5.4574 C13.0701,6.1124 12.2551,7.1004 12.3951,8.7874 C12.5181,10.3194 13.4091,11.2164 14.5221,11.7444"
          id="🎨-Logo-Color"
        ></path>
      </g>
    </g>
  </Svg>
);

export default Apple;
