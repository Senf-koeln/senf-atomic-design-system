/** @format */

import React, { FC, useState } from "react";
import styled from "styled-components";
import Check from "../../../assets/icons/Check";
import CheckDropShadow from "../../../assets/icons/CheckDropShadow";
import Box from "../box/Box";
import Icon from "../icons/Icon";
import { ToggleInputProps } from "./ToggleInput.types";

const Wrapper = styled.div<ToggleInputProps>``;

const ToggleInputContainer = styled.div<ToggleInputProps>`
  display: flex;
  align-items: center;
  z-index: 99;
  cursor: pointer;
  height: 20px;
  width: 20px;
  pointer-events: ${({ pointerEvents }) =>
    pointerEvents ? pointerEvents : "all"};
`;

const RadioIcon = styled.div<ToggleInputProps>`
  width: 9px;
  position: relative;
  height: 9px;
  border-radius: 9px;
  flex-grow: 0;
  background-color: white;
  box-shadow: 0px 2px 4px 0px rgba(134, 124, 99, 0.18);
`;

const StyledToggleInput = styled.div<ToggleInputProps>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background: ${({ checked, theme }) =>
    checked ? theme.colors.primary.primary100 : theme.colors.white.white50tra};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "7px")};
  transition: all 150ms;
  border: 2px solid
    ${({ checked, theme }) =>
      checked
        ? theme.colors.primary.primary120
        : theme.colors.greyscale.greyscale50};

  ${RadioIcon} {
    visibility: ${({ checked }) => (checked ? "visible" : "hidden")};
  }
  flex: none;
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
      {type === "check" && checked && (
        <Box
          width="20px"
          height="20px"
          justifyContent="center"
          alignItems="center"
        >
          <Icon icon={<Check />} />
        </Box>
      )}
      {type === "checkbox" && (
        <StyledToggleInput checked={checked} borderRadius="7px">
          {checked && <Icon icon={<CheckDropShadow color="white" />} />}
        </StyledToggleInput>
      )}
      {type === "radio" && (
        <StyledToggleInput checked={checked} borderRadius={"50%"}>
          <RadioIcon />
        </StyledToggleInput>
      )}
    </ToggleInputContainer>
  );
};

export default ToggleInput;
