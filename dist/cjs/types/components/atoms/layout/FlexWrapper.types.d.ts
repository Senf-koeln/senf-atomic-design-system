/** @format */
import { MouseEventHandler } from "react";
export interface FlexWrapperProps {
    flexDirection?: "column" | "row";
    gap?: string;
    width?: string;
    height?: string;
    margin?: string;
    alignItems?: "flex-start" | "center" | "flex-end";
    justifyContent?: "flex-start" | "center" | "flex-end";
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
