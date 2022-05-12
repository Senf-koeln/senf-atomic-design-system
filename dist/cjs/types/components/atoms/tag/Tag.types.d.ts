/** @format */
import { MouseEventHandler } from "react";
export interface TagProps {
    text?: string;
    variant?: "primary" | "white" | "secondary" | "plus";
    icon?: string;
    iconColor?: string;
    fillWidth?: "max" | undefined;
    active?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
