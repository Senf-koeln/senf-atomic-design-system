/** @format */

import React, { ChangeEvent, FunctionComponent, useRef, useState } from "react";
import {
  TextField,
  Note,
  Label,
  InputField,
  Wrapper,
  // HoverContainer,
} from "./input.styles";
import { InputProps } from "./Input.types";
import Icon from "../icons/Icon";
import Box from "../box/Box";
import Search from "../../../assets/icons/Search";
import Plus from "../../../assets/icons/Plus";
import TertiaryButton from "../buttons/TertiaryButton";
import theme from "../../../styles/theme";

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
  setSearchTerm,
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
        onBlur={(event) => {
          onBlur ? onBlur(event) : null;
        }}
      >
        {isSearch && <Icon icon={<Search />} />}
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
          onChange={
            isSearch ? (event) => setSearchTerm(event.target.value) : onChange
          }
          ref={inputRef}
          as={type === "textarea" ? "textarea" : "input"}
        />
        {isSearch && value && (
          <TertiaryButton
            onClick={() => setSearchTerm("")}
            iconLeft={<Icon icon={<Plus transform="rotate(45deg)" />} />}
            // onClick={() => {
            //   inputRef.current!.focus();
            //   setValue("");
            // }}
          />
        )}
        {type === "password" && value && (
          <TertiaryButton
            onClick={() => setIsPassword((prevState) => !prevState)}
            text={isPassword ? "Zeigen" : "Verstecken"}
            color={theme.colors.primary.primary140}
            variant="semibold"
          />
        )}
      </InputField>
    </Wrapper>
  );
};

export default Input;
