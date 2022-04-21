/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Loader from "../animations/Loader";
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

const Button: FC<ButtonProps> = ({
  size,
  variant,
  borderStyle,
  text,
  loading,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      borderStyle={borderStyle}
      loading={loading}
      onClick={onClick}
      size={size}
      {...rest}
    >
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
