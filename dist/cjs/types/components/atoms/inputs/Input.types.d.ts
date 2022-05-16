/** @format */
import { ChangeEventHandler } from "react";
export interface InputProps {
    id?: string;
    type?: React.HTMLInputTypeAttribute | "textarea";
    label?: string;
    note?: string;
    icon?: string;
    placeholder?: string;
    required?: boolean;
    error?: boolean;
    success?: boolean;
    disabled?: boolean;
    rows?: number;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onClick?: ChangeEventHandler<HTMLInputElement>;
    receiveValue: (value?: string) => void;
}
