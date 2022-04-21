/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import {
  LayerWhitFirstDefault,
  LayerYellowDefault,
  LayerYellowHover,
} from "../layerStyles/LayerStyles";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  border: 0;
  line-height: 1;
  font-size: 15px;
  cursor: pointer;
  font-weight: 700;
  font-weight: bold;
  border-radius: 3px;
  display: inline-block;
  padding: ${(props) =>
    props.size === "small"
      ? "7px 25px 8px"
      : props.size === "medium"
      ? "9px 30px 11px"
      : "14px 30px 16px"};
  color: ${(props) => (props.primary ? "#1b116e" : "#ffffff")};

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};

  ${(props) =>
    props.variant === "primary"
      ? LayerYellowDefault
      : props.variant === "primaryWhite" && LayerWhitFirstDefault}

  &:hover {
    ${(props) => props.variant === "primary" && LayerYellowHover}
  }

  &:active {
    ${(props) => props.variant === "primary" && LayerYellowHover}
  }
`;

const Button: FC<ButtonProps> = ({
  size,
  variant,
  primary,
  disabled,
  text,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      onClick={onClick}
      primary={primary}
      disabled={disabled}
      size={size}
      {...props}
    >
      {text}
    </StyledButton>
  );
};

export default Button;
