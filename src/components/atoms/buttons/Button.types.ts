/** @format */

import { MouseEventHandler } from "react";
export interface ButtonProps {
  text?: string;
  variant?: "primary" | "white" | "secondary" | "plus";
  icon?: string;
  transform?: string;
  borderStyle?: "dashed" | "solid";
  fillWidth?: "max" | undefined;
  loading?: boolean;
  disabled?: boolean;
  size?: "small" | "big";
  color?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
