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
  justify-content: center;
  align-items: center;

  //ADD THEME-OPACITY
  opacity: ${(props) => (props.disabled === true ? 0.6 : 1)};
  //ADD THEME-RADII
  border-radius: 10px;

  //ADD THEME-SPACE?
  height: ${(props) => (props.size === "small" ? "36px" : "50px")};

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

const IconWrapper = styled.div`
  padding-right: 5px;
`;

const Button: FC<ButtonProps> = ({
  text,
  children,
  icon,
  size,
  variant,
  borderStyle,
  loading,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      icon={icon}
      borderStyle={borderStyle}
      loading={loading}
      onClick={onClick}
      size={size}
      {...rest}
    >
      {children && children}
      {icon && (
        <IconWrapper>
          <Icon icon={icon} />
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
