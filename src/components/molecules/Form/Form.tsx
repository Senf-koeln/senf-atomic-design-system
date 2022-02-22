/** @format */

import React, { useState, FC } from "react";
import styled from "styled-components";
import Input from "../../atoms/inputs/Input";
import { FormProps } from "./Form.types";

const Wrapper = styled.div`
  width: 80%;
  margin-left: 10%;
`;

const Form: FC<FormProps> = ({ inputItems, ...props }) => {
  return (
    <form>
      <Wrapper>
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
