/** @format */

import { MouseEventHandler } from "react";
export interface ProfilePageProps {
  title?: string;
  body?: string;
  projectRoomsSize?: number;
  img?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
