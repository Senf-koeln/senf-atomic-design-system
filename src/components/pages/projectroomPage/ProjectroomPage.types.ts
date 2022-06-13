/** @format */

import { MouseEventHandler } from "react";
export interface ProjectroomPageProps {
  title?: string;
  body?: string;
  projectRoomsSize?: number;
  img?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
