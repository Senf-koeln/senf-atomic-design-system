/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Loader from "../animations/Loader";
import Icon from "../icons/Icon";
import {
  LayerGreyButtonsDefault,
  LayerGreyButtonsHover,
  LayerWhiteFirstDefault,
  LayerWhiteFirstHover,
  LayerYellowDefault,
  LayerYellowHover,
} from "../layerStyles/LayerStyles";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  width: auto; /* 150px */
  display: flex;
  flex-direction: row;
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : "center"};
  align-items: center;

  //ADD THEME-OPACITY
  opacity: ${(props) => (props.disabled === true ? 0.6 : 1)};
  //ADD THEME-RADII
  border-radius: 10px;

  //ADD THEME-SPACE?
  height: ${(props) => (props.size === "small" ? "36px" : "50px")};

  //FOR SMALLICONBUTTON  – is this really  correct?
  width: ${(props) => (props.fillWidth === "max" ? "100%" : "auto")};

  min-width: ${(props) => (props.size === "small" ? "36px" : "50px")};

  color: ${(props) => (props.loading === true ? "transparent" : "auto")};
  pointer-events: ${(props) => (props.loading === true ? "none" : "all")};

  //ADD THEME-SPACE?
  padding: ${(props) =>
    props.size === "small" ? "14px 10px 14px 10px" : "14px"};

  ${(props) =>
    props.variant === "primary" || props.variant === undefined
      ? LayerYellowDefault
      : props.variant === "white"
      ? LayerWhiteFirstDefault
      : props.variant === "secondary" && LayerGreyButtonsDefault}

  //ADD THEME-BORDER
  border: ${(props) =>
    props.borderStyle === "dashed"
      ? `2px dashed ${props.theme.colors.greyscale.greyscale50tra} `
      : "auto"};

  &:hover:enabled {
    ${(props) =>
      props.variant === "primary" || props.variant === undefined
        ? LayerYellowHover
        : props.variant === "white"
        ? LayerWhiteFirstHover
        : props.variant === "secondary" && LayerGreyButtonsHover}

    //ADD THEME-BORDER
   border: ${(props) =>
      props.borderStyle === "dashed"
        ? `2px dashed ${props.theme.colors.greyscale.greyscale50tra} `
        : "auto"};
  }

  &:active:enabled {
    ${(props) =>
      props.variant === "primary" || props.variant === undefined
        ? LayerYellowHover
        : props.variant === "white"
        ? LayerWhiteFirstHover
        : props.variant === "secondary" && LayerGreyButtonsHover}

    //ADD THEME-BORDER
  border: ${(props) =>
      props.borderStyle === "dashed"
        ? `2px dashed ${props.theme.colors.greyscale.greyscale50tra} `
        : "auto"};
  }
`;

const LoaderWrapper = styled.span`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const IconWrapper = styled.div<ButtonProps>`
  padding-right: ${(props) => (props.text === undefined ? "0px" : "10px")};
`;

const Button: FC<ButtonProps> = ({
  text,
  children,
  icon,
  transform,
  size,
  variant,
  borderStyle,
  justifyContent,
  fillWidth,
  loading,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton
      type="button"
      text={text}
      variant={variant}
      icon={icon}
      borderStyle={borderStyle}
      justifyContent={justifyContent}
      fillWidth={fillWidth}
      loading={loading}
      onClick={onClick}
      size={size}
      {...rest}
    >
      {children && children}
      {icon && (
        <IconWrapper text={text}>
          <Icon icon={icon} transform={transform} />
        </IconWrapper>
      )}
      {text}
      {loading && (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      )}
    </StyledButton>
  );
};

export default Button;
