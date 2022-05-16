import React, { ChangeEvent, FunctionComponent, useRef, useState } from "react";
import {
  TextField,
  Indication,
  InputField,
  Wrapper,
  HoverContainer,
} from "./input.styles";
import { InputProps } from "./Input.types";
import Icon from "../icons/Icon";

const Input: FunctionComponent<InputProps> = ({
  id,
  type,
  label,
  note,
  icon,
  placeholder,
  required,
  error,
  success,
  disabled,
  columns,
  rows,
  onChange,
  onClick,
  receiveValue,
  ...props
}) => {
  const [isSearch, setIsSearch] = useState(type === "search");
  const [isPassword, setIsPassword] = useState(type === "password");
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Wrapper id={id} disabled={disabled}>
      {(label || note) && (
        <Indication error={error}>
          {label && <label>{`${label}${required ? "*" : ""}`}</label>}
          {note && <p>{note}</p>}
        </Indication>
      )}
      <InputField
        focus={isFocused}
        onFocusCapture={() => setIsFocused((prevState) => !prevState)}
        onBlurCapture={() => setIsFocused((prevState) => !prevState)}
      >
        {isSearch && <Icon icon="search" />}
        <TextField
          type={isPassword ? "password" : isSearch ? "search" : "text"}
          placeholder={placeholder || `${isSearch ? "Search" : ""}`}
          disabled={disabled}
          rows={rows}
          cols={columns}
          value={value}
          onChange={(e: React.FormEvent<HTMLInputElement>) => {
            setValue(e.currentTarget.value);
            receiveValue(e.currentTarget.value);
          }}
          as={type === "textarea" ? type : "input"}
          ref={inputRef}
        />
        {isSearch && (
          <HoverContainer>
            <Icon
              icon="plus"
              onClick={() => {
                inputRef.current!.focus();
                setValue("");
              }}
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
