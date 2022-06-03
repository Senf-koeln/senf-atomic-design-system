/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Plus from "../../../assets/icons/Plus";
import Icon from "../icons/Icon";
import {
  LayerGreyButtonsDefault,
  LayerGreyButtonsHover,
  LayerWhiteFirstDefault,
  LayerWhiteFirstHover,
  LayerWhiteGradientBordersDefault,
  LayerYellowDefault,
  LayerYellowHover,
} from "../layerStyles/LayerStyles";
import { ButtonProps } from "./Button.types";

const StyledButton = styled.button<ButtonProps>`
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  /* box-shadow: ${({ theme }) => theme.shadows[0]}
      ${({ theme }) => theme.colors.brown.brown20tra},
    ${({ theme }) => theme.shadows[2]}
      ${({ theme }) => theme.colors.white.white20tra};
  background-color: ${({ theme }) => theme.colors.brown.brown4}; */

  aspect-ratio: 1 / 1;

  //ADD THEME-RADII
  border-radius: ${(props) => (props.size === "big" ? "28px" : "18px")};

  //ADD THEME-BORDER
  border: 2px solid #ffffff;

  //ADD THEME-SPACE?
  height: ${(props) => (props.size === "big" ? "68px" : "50px")};
  width: ${(props) => (props.size === "big" ? "68px" : "50px")};

  color: ${(props) => (props.loading === true ? "transparent" : "auto")};
  pointer-events: all;

  //ADD THEME-TRANSITION
  transition: 0.3s;

  ${(props) =>
    props.variant === "primary"
      ? LayerYellowDefault
      : LayerWhiteGradientBordersDefault}

  &:hover:enabled {
    transform: scale(1.088);
  }

  &:active:enabled {
    transform: scale(1.088);
  }
`;

const IconWrapper = styled.div<ButtonProps>`
  position: absolute;
`;

const RoundedButton: FC<ButtonProps> = ({
  icon,
  variant,
  size,
  color,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton
      type="button"
      variant={variant}
      size={size}
      onClick={onClick}
      {...rest}
    >
      <IconWrapper>
        <Icon icon={icon} width={size === "big" ? "24px" : "16px"} />
      </IconWrapper>
    </StyledButton>
  );
};

export default RoundedButton;
