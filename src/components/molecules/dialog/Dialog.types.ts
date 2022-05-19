/** @format */

import { MouseEventHandler } from "react";
export interface DialogProps {
  x?: string;
  size?: "xxl" | "xl" | "l" | "m";
  backgroundColor?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  setOpenDialog: (x: boolean) => void;
  openDialog: boolean;
  children: React.ReactNode;
  zIndex?: number | string;
  portalId?: string;
  left?: string;
  right?: string;
  boxShadow?: string;
  overflow?: string;
}
