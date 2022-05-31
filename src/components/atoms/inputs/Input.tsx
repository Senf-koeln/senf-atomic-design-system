/** @format */

import React, { ChangeEvent, FunctionComponent, useRef, useState } from "react";
import {
  TextField,
  Note,
  Label,
  InputField,
  Wrapper,
  HoverContainer,
} from "./input.styles";
import { InputProps } from "./Input.types";
import Icon from "../icons/Icon";
import Box from "../box/Box";

const Input: FunctionComponent<InputProps> = ({
  id,
  name,
  type,
  label,
  note,
  icon,
  placeholder,
  required,
  error,
  success,
  disabled,
  rows,
  onChange,
  value,
  onBlur,
  onClick,
  receiveValue,
  ...props
}) => {
  const [isSearch, setIsSearch] = useState(type === "search");
  const [isPassword, setIsPassword] = useState(type === "password");
  const [isFocused, setIsFocused] = useState(false);
  // const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Wrapper disabled={disabled}>
      {(label || note) && (
        <Box>
          {label && (
            <Label error={error}>{`${label}${required ? "*" : ""}`}</Label>
          )}
          {note && <Note error={error}>{note}</Note>}
        </Box>
      )}

      <InputField
        id={id}
        focus={isFocused}
        onFocusCapture={() => setIsFocused((prevState) => !prevState)}
        onBlurCapture={() => setIsFocused((prevState) => !prevState)}
        onBlur={(event) => onBlur(event)}
      >
        {isSearch && <Icon icon="search" />}
        <TextField
          id={name}
          type={isPassword ? "password" : isSearch ? "search" : "text"}
          placeholder={placeholder || `${isSearch ? "Search" : ""}`}
          disabled={disabled}
          rows={rows}
          value={value}
          // onChange={(e: React.FormEvent<HTMLInputElement>) => {
          //   setValue(e.currentTarget.value);
          //   receiveValue(e.currentTarget.value);
          // }}
          onChange={onChange}
          ref={inputRef}
          as={type === "textarea" ? "textarea" : "input"}
        />
        {isSearch && (
          <HoverContainer>
            <Icon
              icon="plus"
              onClick={() => onChange("")}
              // onClick={() => {
              //   inputRef.current!.focus();
              //   setValue("");
              // }}
            />
          </HoverContainer>
        )}
        {type === "password" && (
          <HoverContainer>
            <button onClick={() => setIsPassword((prevState) => !prevState)}>
              {isPassword ? "Zeigen" : "Verstecken"}
            </button>
          </HoverContainer>
        )}
      </InputField>
    </Wrapper>
  );
};

export default Input;
