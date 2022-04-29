/** @format */

import { MouseEventHandler } from "react";
export interface TertiaryButtonProps {
  text?: string;
  iconLeft?: string;
  iconRight?: string;
  fillWidth?: "max" | undefined;
  loading?: boolean;
  disabled?: boolean;
  size?: "small" | "big";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
