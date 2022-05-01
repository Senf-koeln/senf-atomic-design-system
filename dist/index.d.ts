import { FC, MouseEventHandler, ChangeEventHandler } from 'react';
import * as styled_components from 'styled-components';
import { Theme } from 'styled-system';
export { default as i18n } from 'i18next';

/** @format */
interface LoaderProps {
    height?: string;
    width?: string;
}

/** @format */

declare const Loader: FC<LoaderProps>;

/** @format */

interface ButtonProps {
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

/** @format */

declare const Button: FC<ButtonProps>;

/** @format */

interface TertiaryButtonProps {
    text?: string;
    iconLeft?: string;
    iconRight?: string;
    fillWidth?: "max" | undefined;
    loading?: boolean;
    disabled?: boolean;
    size?: "small" | "big";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/** @format */

declare const TertiaryButton: FC<TertiaryButtonProps>;

/** @format */
interface IconProps {
    icon?: string;
    size?: "big" | undefined;
    color?: string;
    transform?: string;
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

/** @format */

interface InputProps {
    id?: string;
    type?: string;
    label?: string;
    note?: string;
    icon?: string;
    placeholder?: string;
    required?: boolean;
    error?: boolean;
    success?: boolean;
    disabled?: boolean;
    rows?: string;
    value?: string;
    setValue?: ChangeEventHandler<HTMLInputElement>;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onClick?: ChangeEventHandler<HTMLInputElement>;
}

/** @format */

declare const Input: FC<InputProps>;

/** @format */

interface FlexWrapperProps {
    direction?: "vertical" | "horizontal";
    gap?: string;
    width?: string;
    margin?: string;
    alignItems?: "flex-start" | "center" | "flex-end";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/** @format */

declare const FlexWrapper: FC<FlexWrapperProps>;

/** @format */
interface ShapeProps {
    variant?: string;
}

/** @format */

declare const Shape: FC<ShapeProps>;

interface TypographyProps {
    fontFamily: string;
    variant: "h1" | "h2" | "h3" | "buttonBg" | "buttonSm" | "bodyBg" | "bodySm" | "footnote";
}

declare const Typography: styled_components.StyledComponent<"p", any, TypographyProps, never>;

/** @format */
interface FormProps {
    inputItems?: Array<string>;
    margin?: string;
    maxWidth?: string;
    formik?: string;
    outsideClick?: boolean;
}

/** @format */

declare const Form: FC<FormProps>;

/** @format */

interface OrganizationCardProps {
    title?: string;
    projectRoomsSize?: number;
    organizationType?: "Vereine" | "Initiativen" | "Politik" | "Planungsbüros" | "Stadtverwaltung" | "Presse" | "Sonstige";
    img?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/** @format */

declare const OrganizationCard: FC<OrganizationCardProps>;

/** @format */

interface AuthProps {
    text?: string;
    variant?: "register" | "login";
    loading?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    formikRegisterStore?: Function;
    formikLoginStore?: Function;
    handleSubmitRegister?: Function;
    handleSubmitLogin?: Function;
}

/** @format */

declare const Auth: FC<AuthProps>;

/** @format */

declare const theme: Theme;

/** @format */
declare const GlobalStyle: styled_components.GlobalStyleComponent<{}, styled_components.DefaultTheme>;

declare const LayerWhiteFirstDefault: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
declare const LayerWhiteFirstHover: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
declare const LayerWhiteSecondDefault: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
declare const LayerWhiteSecondHover: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
declare const LayerYellowDefault: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
declare const LayerYellowHover: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
declare const LayerBrownDefault: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
declare const LayerBrownHover: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
declare const LayerGreyDefault: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
declare const LayerGreyHover: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
declare const LayerGreyButtonsDefault: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
declare const LayerGreyButtonsHover: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;

export { Auth, Button, FlexWrapper, Form, GlobalStyle, Icon, Input, LayerBrownDefault, LayerBrownHover, LayerGreyButtonsDefault, LayerGreyButtonsHover, LayerGreyDefault, LayerGreyHover, LayerWhiteFirstDefault, LayerWhiteFirstHover, LayerWhiteSecondDefault, LayerWhiteSecondHover, LayerYellowDefault, LayerYellowHover, Loader, OrganizationCard, Shape, TertiaryButton, Typography, theme };
