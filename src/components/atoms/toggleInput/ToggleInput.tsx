/** @format */

import React, { FC, useState } from "react";
import styled from "styled-components";
import { ToggleInputProps } from "./ToggleInput.types";

const Wrapper = styled.div<ToggleInputProps>``;

const ToggleInputContainer = styled.div<ToggleInputProps>`
  display: inline-block;
  vertical-align: middle;
  z-index: 99;
  cursor: pointer;
`;
const CheckIcon = styled.svg<ToggleInputProps>`
  fill: none;
  stroke: white;
  stroke-width: 3px;
`;
const RadioIcon = styled.div<ToggleInputProps>`
  align-self: center;
  margin: 0 auto;
  width: 10px;
  position: relative;
  height: 10px;
  border-radius: 8px;
  flex-grow: 0;
  background-color: white;
`;

const StyledToggleInput = styled.div<ToggleInputProps>`
  display: inline-flex;
  flex-direction: row;
  width: 20px;
  height: 20px;
  background: ${({ checked, theme }) =>
    checked ? theme.colors.primary.primary100 : "white"};
  border-radius: 6px;
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
  selected,
  receiveValue,
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <ToggleInputContainer
      onClick={(e: React.FormEvent<HTMLInputElement>) => {
        setToggle(!toggle);
        receiveValue(e.currentTarget.value);
      }}
    >
      {type === "checkbox" && (
        <StyledToggleInput checked={toggle}>
          <CheckIcon viewBox="0 0 24 24">
            <polyline points="20 6 9 17 4 12" />
          </CheckIcon>
        </StyledToggleInput>
      )}
      {type === "radio" && (
        <StyledToggleInput checked={toggle}>
          <RadioIcon />
        </StyledToggleInput>
      )}
    </ToggleInputContainer>
  );
};

export default ToggleInput;
