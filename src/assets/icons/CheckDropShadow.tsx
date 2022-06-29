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

const CheckDropShadow: FC<SVGRProps> = ({ color = "black", transform }) => (
  <Svg
    width="16px"
    height="16px"
    viewBox="0 0 19 15"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    aria-labelledby="CheckDropShadow"
    transform={transform}
  >
    <title>CheckDropShadow</title>

    <g filter="url(#filter0_d_102_944)">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.7929 3.54139C14.1834 3.15087 14.8166 3.15087 15.2071 3.54139C15.5676 3.90188 15.5953 4.46911 15.2903 4.8614L15.2071 4.95561L10.0561 10.1066C9.23751 10.9252 7.93489 10.9642 7.0702 10.2235L6.94389 10.1066L4.79289 7.95561C4.40237 7.56508 4.40237 6.93192 4.79289 6.54139C5.15338 6.18091 5.72061 6.15318 6.1129 6.45821L6.20711 6.54139L8.35811 8.69239C8.41278 8.74707 8.49092 8.76365 8.55983 8.74215C8.58037 8.73574 8.59854 8.72373 8.61598 8.71113C8.63323 8.69866 8.64945 8.68483 8.6645 8.66978L13.7929 3.54139Z"
        fill="white"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M13.7929 3.54139C14.1834 3.15087 14.8166 3.15087 15.2071 3.54139C15.5676 3.90188 15.5953 4.46911 15.2903 4.8614L15.2071 4.95561L10.0561 10.1066C9.23751 10.9252 7.93489 10.9642 7.0702 10.2235L6.94389 10.1066L4.79289 7.95561C4.40237 7.56508 4.40237 6.93192 4.79289 6.54139C5.15338 6.18091 5.72061 6.15318 6.1129 6.45821L6.20711 6.54139L8.35811 8.69239C8.41278 8.74707 8.49092 8.76365 8.55983 8.74215C8.58037 8.73574 8.59854 8.72373 8.61598 8.71113C8.63323 8.69866 8.64945 8.68483 8.6645 8.66978L13.7929 3.54139Z"
        stroke="white"
        fill="white"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_102_944"
        x="0"
        y="0.748501"
        width="20"
        height="16.5027"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="2" />
        <feGaussianBlur stdDeviation="2" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.52549 0 0 0 0 0.486275 0 0 0 0 0.388235 0 0 0 0.18 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow_102_944"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow_102_944"
          result="shape"
        />
      </filter>
    </defs>
  </Svg>
);

export default CheckDropShadow;
