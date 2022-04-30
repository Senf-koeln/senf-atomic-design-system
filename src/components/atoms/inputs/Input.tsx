import React, { FunctionComponent } from "react";
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
  rows,
  value,
  setValue,
  onChange,
  onClick,
  variant,
  ...props
}) => {
  const isSearch = variant === "Search";
  const isSecret = variant === "Secret";
  return (
    <Wrapper>
      <Indication>
        <label>{label}</label>
        <p>{note}</p>
      </Indication>
      <InputField>
        {isSearch && <Icon icon="search" />}
        <TextField
          type="text"
          placeholder={placeholder || `${isSearch && "Search"}`}
        />
        {isSearch && <Icon icon="plus" />}
        {isSecret && <p>zeigen</p>}
      </InputField>
    </Wrapper>
  );
};

export default Input;
