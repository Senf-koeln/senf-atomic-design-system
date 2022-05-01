/** @format */
import { MouseEventHandler } from "react";
export interface FlexWrapperProps {
    direction?: "vertical" | "horizontal";
    gap?: string;
    width?: string;
    margin?: string;
    alignItems?: "flex-start" | "center" | "flex-end";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
