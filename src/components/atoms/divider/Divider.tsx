/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import { DividerProps } from "./Divider.types";

const StyledDivider = styled.div<DividerProps>`
  width: ${({ width }) => (width ? width : "100%")};
  height: ${({ height }) => (height ? height : "1px")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "0")};

  background-color: ${({ theme, color }) =>
    color ? color : theme.colors.brown.brown20tra};

  margin: ${({ margin }) => (margin ? margin : "0")};
`;

const Divider: FC<DividerProps> = ({
  color,
  width,
  height,
  borderRadius,
  margin,
}) => {
  return (
    <StyledDivider
      color={color}
      width={width}
      height={height}
      borderRadius={borderRadius}
      margin={margin}
    />
  );
};

export default Divider;
