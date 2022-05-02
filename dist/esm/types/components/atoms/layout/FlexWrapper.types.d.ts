/** @format */
import { MouseEventHandler } from "react";
export interface FlexWrapperProps {
    direction?: "vertical" | "horizontal";
    gap?: string;
    width?: string;
    height?: string;
    margin?: string;
    alignItems?: "flex-start" | "center" | "flex-end";
    justifyContent?: "flex-start" | "center" | "flex-end";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
