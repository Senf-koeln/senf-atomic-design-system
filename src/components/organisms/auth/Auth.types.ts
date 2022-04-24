/** @format */

import { MouseEventHandler } from "react";
export interface AuthProps {
  text?: string;
  variant?: "register" | "login";
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
