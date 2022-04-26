/** @format */
import { MouseEventHandler } from "react";
export interface ButtonProps {
    text?: string;
    variant?: "primary" | "white" | "secondary" | "plus";
    icon?: string;
    borderStyle?: "dashed" | "solid";
    fillWidth?: "max" | undefined;
    loading?: boolean;
    disabled?: boolean;
    size?: "small" | "big";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}
