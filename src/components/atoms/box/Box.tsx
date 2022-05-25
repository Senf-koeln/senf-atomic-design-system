/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import { BoxProps } from "./Box.types";

const Wrapper = styled.div<BoxProps>`
  position: ${({ position }) => (position ? position : "relative")};
  left: ${({ left }) => (left ? left : undefined)};
  right: ${({ right }) => (right ? right : undefined)};
  width: ${({ width }) => (width ? width : "auto")};
  height: ${({ height }) => (height ? height : "auto")};

  margin: ${({ margin }) => (margin ? margin : "0")};
  display: flex;
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
  position,
  flexDirection,
  gap,
  margin,
  width,
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
      position={position}
      flexDirection={flexDirection}
      gap={gap}
      margin={margin}
      width={width}
      height={height}
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
