/** @format */

import { MouseEventHandler } from "react";
export interface IdeaCardProps {
  title?: string;
  body?: string;
  projectRoomsSize?: number;
  organizationType?:
    | "Vereine"
    | "Initiativen"
    | "Politik"
    | "Planungsbüros"
    | "Stadtverwaltung"
    | "Presse"
    | "Sonstige";
  img?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
