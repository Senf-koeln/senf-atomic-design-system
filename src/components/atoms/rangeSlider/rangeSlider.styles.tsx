/** @format */

import styled from "styled-components";
import { RangeSliderProps } from "./RangeSlider.types";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Input = styled.input<RangeSliderProps>`
  -webkit-appearance: none;
  width: 100%;
  height: 10px;
  border-radius: 5px;
  background: ${({ theme, lineColor }) =>
    lineColor ? lineColor : theme.colors.brown.brown20};
  box-shadow: inset 0 0 0 2px
    ${({ theme, lineBorderColor }) =>
      lineBorderColor ? lineBorderColor : theme.colors.white.white100};
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  z-index: 0;

  &:hover {
    opacity: 1;
  }
  &::-webkit-slider-thumb {
    cursor: pointer;
    position: relative;
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    border-radius: 16px;
    z-index: 10;
    background: ${({ theme, thumbColor }) =>
      thumbColor ? thumbColor : theme.colors.primary.primary100};
    border: 2px solid
      ${({ theme, thumbBorderColor }) =>
        thumbBorderColor ? thumbBorderColor : theme.colors.primary.primary120};
  }
  &::-moz-range-thumb {
    cursor: pointer;
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 16px;
    z-index: 10;

    background: ${({ theme, thumbColor }) =>
      thumbColor ? thumbColor : theme.colors.primary.primary100};
    border: 2px solid
      ${({ theme, thumbBorderColor }) =>
        thumbBorderColor ? thumbBorderColor : theme.colors.primary.primary120};
  }
`;
