/** @format */

import { MouseEventHandler } from "react";
export interface TertiaryButtonProps {
  text?: string;
  iconLeft?: React.ReactNode;
  iconLeftTransform?: string;
  iconRight?: React.ReactNode;
  iconRightTransform?: string;
  fillWidth?: "max" | undefined;
  loading?: boolean;
  disabled?: boolean;
  size?: "small" | "big";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
