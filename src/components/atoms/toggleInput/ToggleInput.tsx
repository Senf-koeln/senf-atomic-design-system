/** @format */

import React, { FC, useState } from "react";
import styled from "styled-components";
import { ToggleInputProps } from "./ToggleInput.types";

const Wrapper = styled.div<ToggleInputProps>``;

const ToggleInputContainer = styled.div<ToggleInputProps>`
  display: flex;
  align-items: center;
  z-index: 99;
  cursor: pointer;
  height: 16px;
  width: 16px;
  pointer-events: ${({ pointerEvents }) =>
    pointerEvents ? pointerEvents : "all"};
`;
const CheckIcon = styled.svg<ToggleInputProps>`
  fill: none;
  stroke: white;
  stroke-width: 1px;
`;
const RadioIcon = styled.div<ToggleInputProps>`
  width: 4px;
  position: relative;
  height: 4px;
  border-radius: 4px;
  flex-grow: 0;
  background-color: white;
`;

const StyledToggleInput = styled.div<ToggleInputProps>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 12px;
  height: 12px;
  background: ${({ checked, theme }) =>
    checked ? theme.colors.primary.primary100 : "white"};
  border-radius: 4px;
  transition: all 150ms;
  border: 2px solid #f2c71c;
  ${CheckIcon} {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }
  ${RadioIcon} {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }
`;

const ToggleInput: FC<ToggleInputProps> = ({
  type,
  checked,
  receiveValue,
  pointerEvents,
}) => {
  return (
    <ToggleInputContainer
      onClick={(e: React.FormEvent<HTMLInputElement>) => {
        setToggle(!toggle);
        receiveValue(e.currentTarget.value);
      }}
      pointerEvents={pointerEvents}
    >
      {type === "checkbox" && (
        <StyledToggleInput checked={checked}>
          <CheckIcon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </CheckIcon>
        </StyledToggleInput>
      )}
      {type === "radio" && (
        <StyledToggleInput checked={checked}>
          <RadioIcon />
        </StyledToggleInput>
      )}
    </ToggleInputContainer>
  );
};

export default ToggleInput;
