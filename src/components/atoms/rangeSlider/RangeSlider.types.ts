/** @format */

import { ChangeEventHandler } from "react";

export interface RangeSliderProps {
  rangeValue: number;
  setRangeValue: (x: boolean) => void;
  rangeMin: number;
  rangeMax: number;
  lineColor?: string;
  lineBorderColor?: string;
  thumbColor?: string;
  thumbBorderColor?: string;
  leftTick?: string;
  rightTick?: string;
}
