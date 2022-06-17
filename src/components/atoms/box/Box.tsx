/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import { BoxProps } from "./Box.types";

const Wrapper = styled.div<BoxProps>`
  display: ${({ display }) => (display ? display : "flex")};

  position: ${({ position }) => (position ? position : "relative")};
  top: ${({ top }) => (top ? top : undefined)};

  left: ${({ left }) => (left ? left : undefined)};
  right: ${({ right }) => (right ? right : undefined)};
  height: ${({ height }) => (height ? height : "auto")};
  width: ${({ width }) => (width ? width : "auto")};
  max-width: ${({ maxWidth }) => (maxWidth ? maxWidth : "auto")};

  margin: ${({ margin }) => (margin ? margin : "0")};
  flex-direction: ${({ flexDirection }) =>
    flexDirection === "column" ? "column" : "row"};
  align-items: ${({ alignItems }) => (alignItems ? alignItems : null)};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : null};
  gap: ${({ gap }) => (gap ? gap : null)};
  flex-wrap: ${({ flexWrap }) => (flexWrap ? flexWrap : null)};
  z-index: ${({ zIndex }) => (zIndex ? zIndex : undefined)};
`;

const Box: FC<BoxProps> = ({
  children,
  display,
  position,
  flexDirection,
  gap,
  margin,
  width,
  maxWidth,
  top,
  left,
  right,
  zIndex,
  alignItems,
  justifyContent,
  height,
  flexWrap,
}) => {
  return (
    <Wrapper
      display={display}
      position={position}
      flexDirection={flexDirection}
      gap={gap}
      margin={margin}
      height={height}
      width={width}
      maxWidth={maxWidth}
      top={top}
      left={left}
      right={right}
      zIndex={zIndex}
      alignItems={alignItems}
      justifyContent={justifyContent}
      flexWrap={flexWrap}
    >
      {children}
    </Wrapper>
  );
};

export default Box;
