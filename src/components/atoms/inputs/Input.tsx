/** @format */

import React, { FC, Fragment, useState } from "react";
import styled from "styled-components";
import { InputProps } from "./Input.types";
import { House } from "../icons/House";

const InputGroup = styled.div<InputProps>`
  position: relative;
  margin-top: 5px;
  margin-left: 10%;
  display: flex;
  flex-direction: column;
  max-width: 600px;
  opacity: ${(props) => (props.disabled ? "0.5" : "1")};
`;

const StyledInput = styled.input<InputProps>`
  font-family: "Nunito", serif;
  background-color: rgba(255, 255, 255, 0.5);
  outline: none;
  padding: 14px;
  padding-left: ${(props) => (props.type === "search" ? "40px" : "14px")};

  border: solid ${(props) => (props.error ? "3px" : "2px")}
    ${(props) =>
      props.error
        ? "rgb(255, 60, 62)"
        : props.success
        ? "#067d68"
        : "rgba(255, 255, 255, 0)"};
  border-radius: 10px;
  font-size: 16px;
  text-align: left;

  ::placeholder,
  ::-webkit-input-placeholder {
    color: rgba(0, 0, 0, 0.7);
  }
  :-ms-input-placeholder {
    color: rgba(0, 0, 0, 0.7);
  }
  &:focus {
    border: 3px solid rgb(254, 217, 87);
  }
`;

const FlexWrapper = styled.div<InputProps>`
  display: flex;
  justify-content: space-between;
`;
const StyledLabel = styled.div<InputProps>`
  font-family: "Nunito", serif;
  font-size: 14px;
  color: #000000;
  padding-bottom: 6px;
  max-width: 100px;
  height: 16px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  overflow: visible;
`;

const StyledRequiredStar = styled.div<InputProps>`
  margin-right: auto;
`;

const StyledNote = styled.div<InputProps>`
  font-family: "Nunito", serif;

  width: auto; /* 107px */
  height: auto; /* 16px */
  flex-shrink: 0;
  white-space: pre;
  overflow: visible;
  font-weight: 400;
  font-style: normal;
  color: rgba(0, 0, 0, 0.4);
  font-size: 12px;
  letter-spacing: 0px;
  line-height: 1.4;
`;

const StyledShowPassword = styled.div<InputProps>`
  font-family: "Nunito", serif;

  position: absolute;
  right: 10px;
  top: calc(50% - 4px);
  font-size: 14px;
  color: #a9150b8;
  padding-top: 4px;
  opacity: 0.31;
`;
// const StyledMessage = styled.div<InputProps>`
//    font-size: 14px;
//    color: #a9150b8;
//    padding-top: 4px;
// `;

const StyledSearchIcon = styled.div<InputProps>`
  position: absolute;
  left: 10px;
  top: calc(50% - 4px);
  z-index: 2;
`;
const StyledSearchDelete = styled.button<InputProps>`
  position: absolute;
  right: 10px;
  top: calc(50% - 4px);
  outline: none;
  border: 0;
  background-color: transparent;
`;

const StyledText = styled.p<InputProps>`
  margin: 0px;
  color: ${(props) => (props.error ? "rgb(255, 60, 62)" : "#00000")};
`;

const Input: FC<InputProps> = ({
  id,
  type,
  disabled,

  label,
  note,
  placeholder,
  required,
  error,
  success,
  rows,
  value,
  setValue,
  onChange,
  ...props
}) => {
  const [inputType, setInputType] = useState(type);

  const passwordHide = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  return (
    <InputGroup disabled={disabled}>
      <FlexWrapper>
        <StyledLabel>
          <StyledText>{label}</StyledText>
        </StyledLabel>
        {required && (
          <StyledRequiredStar>
            {" "}
            <StyledText disabled={disabled} error={error}>
              *
            </StyledText>
          </StyledRequiredStar>
        )}

        <StyledNote>
          <StyledText disabled={disabled} error={error}>
            {note}
          </StyledText>
        </StyledNote>
      </FlexWrapper>
      <StyledInput
        id={id}
        type={type ? inputType : "text"}
        value={value}
        onChange={onChange}
        disabled={disabled}
        error={error}
        success={success}
        placeholder={placeholder}
        {...props}
      />

      {/* ADD TEXTAREA WITH rows={rows ? rows : "1"}  */}
      {type === "search" && (
        <React.Fragment>
          <StyledSearchIcon>
            <House />
          </StyledSearchIcon>

          <StyledSearchDelete onClick={setValue}>
            <House />
          </StyledSearchDelete>
        </React.Fragment>
      )}
      {value && type === "password" && (
        <StyledShowPassword onClick={passwordHide}>
          <StyledText error={error}>
            {inputType === "password" ? "zeigen" : "verstecken"}{" "}
          </StyledText>
        </StyledShowPassword>
      )}
      {/* <StyledMessage><StyledText error={error}>{message}</StyledText></StyledMessage> */}
    </InputGroup>
  );
};

export default Input;
