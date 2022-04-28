/** @format */

import React, { FC } from "react";
import styled from "styled-components";
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
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: ${({ theme }) => theme.shadows[0]}
      ${({ theme }) => theme.colors.brown.brown20tra},
    ${({ theme }) => theme.shadows[2]}
      ${({ theme }) => theme.colors.white.white20tra};
  background-color: ${({ theme }) => theme.colors.brown.brown4};

  aspect-ratio: 1 / 1;

  //ADD THEME-RADII
  border-radius: ${(props) => (props.variant === "plus" ? "28px" : "18px")};

  //ADD THEME-BORDER
  border: 2px solid #ffffff;

  //ADD THEME-SPACE?
  height: ${(props) => (props.variant === "plus" ? "68px" : "50px")};
  width: ${(props) => (props.variant === "plus" ? "68px" : "50px")};

  color: ${(props) => (props.loading === true ? "transparent" : "auto")};
  pointer-events: all;

  //ADD THEME-TRANSITION
  transition: 0.3s;

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
  onClick,
  ...rest
}) => {
  return (
    <StyledButton type="button" variant={variant} onClick={onClick} {...rest}>
      <IconWrapper>
        <Icon
          icon={variant === "plus" ? "plus" : icon}
          size={variant === "plus" ? "big" : undefined}
          //ADD THEME-BASED COLOR TO ICON
          color={variant === "plus" ? "rgb(226,183,54)" : undefined}
        />
      </IconWrapper>
    </StyledButton>
  );
};

export default RoundedButton;
