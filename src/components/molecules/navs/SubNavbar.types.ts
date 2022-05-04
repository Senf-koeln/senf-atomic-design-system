/** @format */

import { MouseEventHandler } from "react";
export interface SubNavbarProps {
  header?: string;
  rightFunction?: string;

  onClick?: MouseEventHandler<HTMLButtonElement>;
}
