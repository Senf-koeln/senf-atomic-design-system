/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import Icon from "../icons/Icon";
import Typography from "../typography/Typography";
import { TertiaryButtonProps } from "./TertiaryButton.types";

const StyledButton = styled.button<TertiaryButtonProps>`
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  width: auto; /* 150px */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  //ADD THEME-RADII
  border-radius: ${({ theme }) => theme.radii[0]}px;

  //ADD THEME-SPACE?
  height: 30px;

  //FOR SMALLICONBUTTON  – is this really  correct?
  width: ${(props) => (props.fillWidth === "max" ? "100%" : "auto")};
  pointer-events: all;

  //ADD THEME-SPACE?
  padding: 4px 7px 4px 7px;
  border: 0;
  background-color: transparent;

  &:hover:enabled {
    background-color: ${({ theme }) => theme.colors.greyscale.greyscale20tra};
  }

  &:active:enabled {
    background-color: ${({ theme }) => theme.colors.greyscale.greyscale20tra};
  }
`;

const IconWrapperLeft = styled.div<TertiaryButtonProps>`
  padding-right: ${(props) => (props.text === undefined ? "0px" : "5px")};
`;

const IconWrapperRight = styled.div<TertiaryButtonProps>`
  padding-left: ${(props) => (props.text === undefined ? "0px" : "5px")};
`;

const TertiaryButton: FC<TertiaryButtonProps> = ({
  text,
  children,
  iconLeft,
  iconLeftTransform,
  iconRight,
  iconRightTransform,
  size,
  variant,
  fillWidth,
  color,
  loading,
  onClick,
  ...rest
}) => {
  return (
    <StyledButton
      type="button"
      text={text}
      fillWidth={fillWidth}
      loading={loading}
      onClick={onClick}
      size={size}
      {...rest}
    >
      {iconLeft && (
        <IconWrapperLeft text={text}>
          <Icon
            icon={iconLeft}
            transform={
              iconLeftTransform ? iconLeftTransform : "scale(0.7)"
              // size === "small"
              //   ? ` ${iconLeftTransform ? iconLeftTransform : "scale(0.7)"}`
              //   : ` ${iconLeftTransform ? iconLeftTransform : "scale(0.7)"}`
            }
          />
        </IconWrapperLeft>
      )}
      {text && (
        <Typography
          variant={size === "small" ? "buttonSm" : "buttonBg"}
          fontWeight={
            variant === "medium" ? 500 : variant === "semibold" ? 600 : 700
          }
          color={color}
        >
          {" "}
          {text}
        </Typography>
      )}

      {iconRight && (
        <IconWrapperRight text={text} iconLeft={iconLeft}>
          <Icon
            icon={iconRight}
            transform={
              iconLeftTransform ? iconLeftTransform : "scale(0.7)"
              // size === "small"
              //   ? `${iconLeftTransform ? iconLeftTransform : "scale(0.7)"}`
              //   : `${iconLeftTransform ? iconLeftTransform : "scale(0.7)"}`
            }
          />
        </IconWrapperRight>
      )}
    </StyledButton>
  );
};

export default TertiaryButton;
