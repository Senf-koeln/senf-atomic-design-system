/** @format */

import { MouseEventHandler } from "react";
export interface OrganizationCardProps {
  title?: string;
  projectRoomsSize?: number;
  organizationType?: string;
  img?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
