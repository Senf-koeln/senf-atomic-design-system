/** @format */

import { MouseEventHandler } from "react";
export interface ButtonProps {
  text?: string;
  variant?: string;
  primary?: boolean;
  disabled?: boolean;
  size?: "small" | "medium" | "large";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
