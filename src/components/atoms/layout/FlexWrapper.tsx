/** @format */

import React, { FC } from "react";
import styled from "styled-components";
import { FlexWrapperProps } from "./FlexWrapper.types";

const Wrapper = styled.div<FlexWrapperProps>`
  width: ${(props) => (props.width ? props.width : "100%")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  display: flex;
  flex-direction: ${(props) =>
    props.direction === "vertical" ? "column" : "row"};
  align-items: ${(props) => (props.alignItems ? props.alignItems : null)};
  gap: ${(props) => (props.direction === "horizontal" ? "10px" : null)};
`;

const FlexWrapper: FC<FlexWrapperProps> = ({
  children,
  direction,
  margin,
  width,
  alignItems,
}) => {
  return (
    <Wrapper
      direction={direction}
      margin={margin}
      width={width}
      alignItems={alignItems}
    >
      {children}
    </Wrapper>
  );
};

export default FlexWrapper;
