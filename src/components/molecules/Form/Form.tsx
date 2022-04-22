/** @format */

import React, { useState, FC } from "react";
import styled from "styled-components";
import Input from "../../atoms/inputs/Input";
import { FormProps } from "./Form.types";

const Wrapper = styled.div<FormProps>`
  margin: ${(props) => (props.margin ? props.margin : 0)};
  max-width: ${(props) => (props.maxWidth ? props.maxWidth : "100%")};
`;

const Form: FC<FormProps> = ({ inputItems, margin, maxWidth, ...props }) => {
  return (
    <form>
      <Wrapper margin={margin} maxWidth={maxWidth}>
        {inputItems?.map((item) => {
          return (
            <Input
              //   key={item.id}
              name={item.name}
              type={item.type}
              placeholder={item.placeholder}
              label={item.label}
              note={item.note}

              // onChange={formik.handleChange}
              //   value={formik.values[item.name]}
              //   error={outsideClick && Boolean(formik.errors[item.name])}
              //   helperText={outsideClick && formik.errors[item.name]}
            />
          );
        })}
      </Wrapper>
    </form>
  );
};

export default Form;
