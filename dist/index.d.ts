import { MouseEventHandler, FC, ChangeEventHandler } from 'react';

interface ButtonProps {
    text?: string;
    primary?: boolean;
    disabled?: boolean;
    size?: "small" | "medium" | "large";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/** @format */

declare const Button: FC<ButtonProps>;

/** @format */

interface InputProps {
    id?: string;
    type?: string;
    label?: string;
    note?: string;
    placeholder?: string;
    required?: boolean;
    error?: boolean;
    success?: boolean;
    disabled?: boolean;
    rows?: string;
    value?: string;
    setValue?: ChangeEventHandler<HTMLInputElement>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

/** @format */

declare const Input: FC<InputProps>;

/** @format */
interface IconProps {
    icon?: number;
    color?: string;
}

/** @format */

/**
 * An Icon is a piece of visual element, but we must ensure its accessibility while using it.
 * It can have 2 purposes:
 *
 * - *decorative only*: for example, it illustrates a label next to it. We must ensure that it is ignored by screen readers, by setting `aria-hidden` attribute (ex: `<Icon icon="check" aria-hidden />`)
 * - *non-decorative*: it means that it delivers information. For example, an icon as only child in a button. The meaning can be obvious visually, but it must have a proper text alternative via `aria-label` for screen readers. (ex: `<Icon icon="print" aria-label="Print this document" />`)
 */
declare const Icon: FC<IconProps>;

export { Button, Icon, Input };
