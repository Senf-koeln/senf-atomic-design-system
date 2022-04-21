/** @format */

import { MouseEventHandler } from "react";
export interface ButtonProps {
  text?: string;
  variant?: "primary" | "white" | "secondary";
  borderStyle?: string;
  loading?: boolean;
  disabled?: boolean;
  size?: "small" | "big";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
