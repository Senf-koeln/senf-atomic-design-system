/** @format */

import { MouseEventHandler } from "react";
export interface SwitchProps {
  id?: string;
  toggled?: boolean;
  onChange?: (value?: string) => void;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
