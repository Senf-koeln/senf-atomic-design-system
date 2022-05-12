import React, { ChangeEvent, FunctionComponent, useRef, useState } from "react";
import { TextField, Indication, InputField, Wrapper } from "./input.styles";
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
  ...props
}) => {
  const [isSearch, setIsSearch] = useState(type === "search");
  const [isPassword, setIsPassword] = useState(type === "password");
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Wrapper disabled={disabled}>
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
          onChange={(e: React.FormEvent<HTMLInputElement>) =>
            setValue(e.currentTarget.value)
          }
          as={type === "textarea" ? type : "input"}
          ref={inputRef}
        />
        {isSearch && (
          <Icon
            icon="plus"
            onClick={() => {
              inputRef.current!.focus();
              setValue("");
            }}
          />
        )}
        {type === "password" && (
          <button onClick={() => setIsPassword((prevState) => !prevState)}>
            {isPassword ? "Zeigen" : "Verstecken"}
          </button>
        )}
      </InputField>
    </Wrapper>
  );
};

export default Input;
