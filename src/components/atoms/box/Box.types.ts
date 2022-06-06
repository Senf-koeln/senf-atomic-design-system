/** @format */

import { MouseEventHandler } from "react";
export interface BoxProps {
  display?: "flex" | "inline-flex" | "inline" | "block" | "none";
  flexDirection?: "column" | "row";
  gap?: string;
  height?: string;
  width?: string;
  maxWidth?: string;
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
