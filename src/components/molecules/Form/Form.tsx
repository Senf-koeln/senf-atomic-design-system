/** @format */

import React, { useState, FC, useRef } from "react";
import styled from "styled-components";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import Input from "../../atoms/inputs/Input";
import { FormProps } from "./Form.types";

const Wrapper = styled.div<FormProps>`
  margin: ${(props) => (props.margin ? props.margin : 0)};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const Form: FC<FormProps> = ({
  formik,
  inputItems,
  margin,
  maxWidth,
  ...props
}) => {
  return (
    <form>
      <Wrapper margin={margin} maxWidth={maxWidth}>
        {inputItems?.map(({ name, type, placeholder, label }) => {
          return (
            <Input
              id={name}
              name={name}
              type={type}
              placeholder={placeholder}
              label={label}
              onChange={formik?.handleChange}
              onBlur={formik?.handleBlur}
              value={formik?.values[name]}
              error={formik?.touched[name] && Boolean(formik?.errors[name])}
              note={formik?.touched[name] && formik?.errors[name]}
            />
          );
        })}
      </Wrapper>
    </form>
  );
};

export default Form;
