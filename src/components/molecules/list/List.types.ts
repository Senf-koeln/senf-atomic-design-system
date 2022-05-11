/** @format */

import { MouseEventHandler, ReactNode } from "react";
export interface ListProps {
  CardType?: React.ReactNode;
  data?: Array<string>;
  onClick: MouseEventHandler<HTMLButtonElement>;
  handleButtonClick: MouseEventHandler<HTMLButtonElement>;
}
