/** @format */

import React, { FC } from "react";
import styled from "styled-components";
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

const Button: FC<ButtonProps> = ({
  size,
  variant,
  borderStyle,
  text,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      borderStyle={borderStyle}
      onClick={onClick}
      size={size}
      {...rest}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
