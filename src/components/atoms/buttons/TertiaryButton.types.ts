/** @format */

import { MouseEventHandler } from "react";
export interface TertiaryButtonProps {
  text?: string;
  iconLeft?: string;
  iconLeftTransform?: string;
  iconRight?: string;
  iconRightTransform?: string;
  fillWidth?: "max" | undefined;
  loading?: boolean;
  disabled?: boolean;
  size?: "small" | "big";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
