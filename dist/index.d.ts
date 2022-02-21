import { MouseEventHandler, FC, ChangeEventHandler } from 'react';

interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const Button: FC<ButtonProps>;

interface InputProps {
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

declare const Input: FC<InputProps>;

export { Button, Input };
