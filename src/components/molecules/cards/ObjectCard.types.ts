/** @format */

import { MouseEventHandler } from "react";
export interface ObjectCardProps {
  title?: string;
  subTitle?: string;
  objectType?:
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
