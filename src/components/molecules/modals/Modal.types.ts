/** @format */

import { MouseEventHandler } from "react";
export interface ModalProps {
  x?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  openModal: boolean;
  children: React.ReactNode;
}
