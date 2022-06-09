/// <reference types="react" />
import * as styled_components from 'styled-components';
import { FC, MouseEventHandler, ChangeEventHandler, FunctionComponent } from 'react';
import { Theme } from 'styled-system';
import * as i18next from 'i18next';

declare const LayerWhiteGradientBordersDefault: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
declare const LayerWhiteFirstDefault: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
declare const LayerWhiteFirstHover: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
declare const LayerWhiteFirstActive: styled_components.FlattenInterpolation<styled_components.ThemeProps<any>>;
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

/** @format */
interface LoaderProps {
    height?: string;
    width?: string;
}

/** @format */

declare const Loader: FC<LoaderProps>;

/** @format */
interface RangeSliderProps {
    rangeValue: number;
    setRangeValue: (x: boolean) => void;
    rangeMin: number;
    rangeMax: number;
    lineColor?: string;
    lineBorderColor?: string;
    thumbColor?: string;
    thumbBorderColor?: string;
    leftTick?: string;
    rightTick?: string;
}

/** @format */

declare const RangeSlider: FC<RangeSliderProps>;

/** @format */

interface ButtonProps {
    text?: string;
    variant?: "primary" | "white" | "secondary" | "plus";
    icon?: string;
    transform?: string;
    borderStyle?: "dashed" | "solid";
    fillWidth?: "max" | undefined;
    loading?: boolean;
    disabled?: boolean;
    size?: "small" | "big";
    color?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/** @format */

declare const Button: FC<ButtonProps>;

/** @format */

declare const RoundedButton: FC<ButtonProps>;

/** @format */

interface TertiaryButtonProps {
    text?: string;
    iconLeft?: React.ReactNode;
    iconLeftTransform?: string;
    iconRight?: React.ReactNode;
    iconRightTransform?: string;
    fillWidth?: "max" | undefined;
    loading?: boolean;
    disabled?: boolean;
    size?: "small" | "big";
    variant?: "medium" | "semibold" | "bold";
    color?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/** @format */

declare const TertiaryButton: FC<TertiaryButtonProps>;

/** @format */

interface TagProps {
    text?: string;
    variant?: "primary" | "white" | "secondary" | "plus";
    icon?: React.ReactNode;
    iconColor?: string;
    fillWidth?: "max" | undefined;
    active?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/** @format */

declare const Tag: FC<TagProps>;

/** @format */
interface IconProps {
    width?: string;
    height?: string;
    icon: React.ReactNode;
}

/** @format */

declare const Icon: FC<IconProps>;

/** @format */

interface InputProps {
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

/** @format */

declare const Input: FunctionComponent<InputProps>;

/** @format */

interface BoxProps {
    display?: "flex" | "inline-flex" | "inline" | "block" | "none";
    flexDirection?: "column" | "row";
    gap?: string;
    height?: string;
    width?: string;
    maxWidth?: string;
    margin?: string;
    left?: string | number;
    right?: string | number;
    zIndex?: string | number;
    alignItems?: "flex-start" | "center" | "flex-end";
    justifyContent?: "flex-start" | "center" | "flex-end";
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
    position?: "fixed" | "absolute" | "relative" | "sticky";
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/** @format */

declare const Box: FC<BoxProps>;

/** @format */

interface DividerProps {
    color?: string;
    width?: string;
    height?: string;
    borderRadius?: string;
    margin?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/** @format */

declare const Divider: FC<DividerProps>;

/** @format */
interface ShapeProps {
    variant?: number;
    position?: string;
    marginTop?: string;
}

/** @format */

declare const Shape: FC<ShapeProps>;

/** @format */
interface TypographyProps {
    fontFamily?: string;
    fontSize?: string;
    fontWeight?: string | number;
    color?: string;
    textAlign?: string;
    variant: "h1" | "h2" | "h3" | "buttonBg" | "buttonSm" | "bodyBg" | "bodySm" | "footnote";
}

declare const Typography: styled_components.StyledComponent<"p", any, TypographyProps, never>;

/** @format */

interface IdeaCardProps {
    title?: string;
    body?: string;
    projectRoomsSize?: number;
    organizationType?: "Vereine" | "Initiativen" | "Politik" | "Planungsbüros" | "Stadtverwaltung" | "Presse" | "Sonstige";
    img?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/** @format */

declare const IdeaCard: FC<IdeaCardProps>;

/** @format */

interface ProjectroomCardProps {
    title?: string;
    projectRoomsSize?: number;
    organizationType?: "Vereine" | "Initiativen" | "Politik" | "Planungsbüros" | "Stadtverwaltung" | "Presse" | "Sonstige";
    img?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/** @format */

declare const ProjectroomCard: FC<ProjectroomCardProps>;

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

interface ObjectCardProps {
    title?: string;
    subTitle?: string;
    objectType?: "Vereine" | "Initiativen" | "Politik" | "Planungsbüros" | "Stadtverwaltung" | "Presse" | "Sonstige";
    img?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/** @format */

declare const ObjectCard: FC<ObjectCardProps>;

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

interface ListProps {
    CardType?: React.ReactNode;
    data?: Array<string>;
    onClick: MouseEventHandler<HTMLButtonElement>;
    handleButtonClick: MouseEventHandler<HTMLButtonElement>;
}

/** @format */

declare const List: FC<ListProps>;

/** @format */

interface ModalProps {
    x?: string;
    size?: "xl" | "l" | "m";
    backgroundColor?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    setOpenModal: (x: boolean) => void;
    openModal: boolean;
    children: React.ReactNode;
    zIndex?: number | string;
    portalId?: string;
    overflow?: string;
}

/** @format */

declare const Modal: FC<ModalProps>;

/** @format */

interface SubNavbarProps {
    iconLeft?: string;
    iconLeftTransform?: string;
    textLeft?: string;
    header?: string;
    iconRight?: string;
    iconRightTransform?: string;
    textRight?: string;
    handlebar?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/** @format */

declare const SubNavbar: FC<SubNavbarProps>;

/** @format */

interface AccordionProps {
    example?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/** @format */

declare const Accordion: FC<AccordionProps>;

/** @format */

interface TagSlideProps {
    example?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/** @format */

declare const TagSlide: FC<TagSlideProps>;

/** @format */

interface MenuSidebarProps {
    example?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/** @format */

declare const MenuSidebar: FC<MenuSidebarProps>;

/** @format */

interface MainSwipeListProps {
    example?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const MainSwipeList: FC<MainSwipeListProps>;

/** @format */
interface AuthProps {
    handleClose?: (x: boolean) => void;
    handleSubmitRegister?: any;
    registerLoading?: boolean;
    handleSubmitLogin?: any;
    loginLoading?: boolean;
    handleGoogleSignIn?: any;
    googleLoading?: boolean;
    handleFacebookSignIn?: any;
    facebookLoading?: boolean;
    resetLoading?: any;
    handleSubmitResetEmail?: any;
    socialLoginVerified?: boolean;
    emailRegistrationSubmitted?: boolean;
    emailVerified?: boolean;
}

/** @format */

declare const Auth: FC<AuthProps>;

/** @format */

interface OrganizationPageProps {
    organization?: Array<string>;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

/** @format */

declare const Example: FC<OrganizationPageProps>;

/** @format */

interface OrganizationsOverviewProps {
    example?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const OrganizationsOverview: FC<OrganizationsOverviewProps>;

/** @format */

interface StatisticsOverviewProps {
    example?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

declare const StatisticsOverview: FC<StatisticsOverviewProps>;

/** @format */

declare const theme: Theme;

/** @format */
declare const GlobalStyle: styled_components.GlobalStyleComponent<{}, styled_components.DefaultTheme>;

/** @format */
declare const i18n: i18next.i18n;

export { Accordion, Auth, Box, Button, Divider, Form, GlobalStyle, Icon, IdeaCard, Input, LayerBrownDefault, LayerBrownHover, LayerGreyButtonsDefault, LayerGreyButtonsHover, LayerGreyDefault, LayerGreyHover, LayerWhiteFirstActive, LayerWhiteFirstDefault, LayerWhiteFirstHover, LayerWhiteGradientBordersDefault, LayerWhiteSecondDefault, LayerWhiteSecondHover, LayerYellowDefault, LayerYellowHover, List, Loader, MainSwipeList, MenuSidebar, Modal, ObjectCard, OrganizationCard, Example as OrganizationPage, OrganizationsOverview, ProjectroomCard, RangeSlider, RoundedButton, Shape, StatisticsOverview, SubNavbar, Tag, TagSlide, TertiaryButton, Typography, i18n, theme };
