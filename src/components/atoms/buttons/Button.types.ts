/** @format */

import { MouseEventHandler } from "react";
export interface ButtonProps {
  text?: string;
  variant?: "primary" | "white" | "secondary";
  icon?: string;
  borderStyle?: "dashed" | "solid";
  loading?: boolean;
  disabled?: boolean;
  size?: "small" | "big";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
