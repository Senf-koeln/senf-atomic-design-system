/** @format */

import { MouseEventHandler } from "react";
export interface BoxProps {
  flexDirection?: "column" | "row";
  gap?: string;
  width?: string;
  height?: string;
  margin?: string;
  left?: string | number;
  right?: string | number;
  zIndex?: string | number;
  alignItems?: "flex-start" | "center" | "flex-end";
  justifyContent?: "flex-start" | "center" | "flex-end";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  position?: "fixed" | "absolute" | "relative" | "sticky";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
