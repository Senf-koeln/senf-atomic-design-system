/** @format */

import { MouseEventHandler } from "react";
export interface ToggleInputProps {
  checked?: boolean;
  type?: "checkbox" | "radio";
  selected?: boolean;
  receiveValue: (value?: string) => void;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
