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

const Search = ({
  color = "black",
  transform,
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="Search"
    transform={transform}
  >
    <title>Search</title>
    <g
      id="Icons"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g id="Search" fill="#000000">
        <path
          d="M14.4888664,12.6292515 L11.2172477,10.1091428 C11.9680745,9.12687379 12.3739488,7.92424905 12.3719367,6.68774527 C12.3719367,3.5464903 9.82624193,1 6.68596833,1 C3.54569473,1 1,3.5464903 1,6.68774527 C1,9.82900025 3.54569473,12.3754905 6.68596833,12.3754905 C7.92208581,12.3775033 9.12433482,11.9715021 10.106297,11.2204407 L12.6256183,14.4843315 C12.6953372,14.5716095 12.774554,14.650851 12.8618047,14.7205917 C13.4391319,15.1700328 14.2713783,15.0662143 14.720679,14.4887067 C15.1699796,13.911199 15.0661936,13.0786926 14.4888664,12.6292515 L14.4888664,12.6292515 Z M2.31214654,6.68774527 C2.31214654,4.27139529 4.27037326,2.3125566 6.68596833,2.3125566 C9.1015634,2.3125566 11.0597901,4.27139529 11.0597901,6.68774527 C11.0597901,9.10409525 9.1015634,11.0629339 6.68596833,11.0629339 C4.27037326,11.0629339 2.31214654,9.10409525 2.31214654,6.68774527 L2.31214654,6.68774527 Z"
          id="🎨-Icon-Color"
        ></path>
      </g>
    </g>
  </Svg>
);

export default Search;
