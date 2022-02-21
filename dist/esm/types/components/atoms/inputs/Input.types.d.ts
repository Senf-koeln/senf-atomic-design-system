import { ChangeEventHandler } from "react";
export interface InputProps {
    id?: string;
    type?: string;
    value?: string;
    label?: string;
    note?: string;
    placeholder?: string;
    required?: boolean;
    error?: boolean;
    success?: boolean;
    disabled?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}
