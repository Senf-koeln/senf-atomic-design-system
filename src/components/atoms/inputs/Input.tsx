import React, { FunctionComponent, useState } from "react";
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
  value,
  setValue,
  onChange,
  onClick,
  ...props
}) => {
  const [isSearch, setIsSearch] = useState(type === "search");
  const [isPassword, setIsPassword] = useState(type === "password");
  const [isFocused, setIsFocused] = useState(false);

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
          placeholder={placeholder || `${isSearch && "Search"}`}
          disabled={disabled}
          rows={rows}
          cols={columns}
          as={type === "textarea" ? type : "input"}
        />
        {isSearch && <Icon icon="plus" />}
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
