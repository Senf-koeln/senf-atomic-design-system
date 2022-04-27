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
  const [outsideClick, setOutsideClick] = useState(false);

  const outerRef = useRef();
  useOnClickOutside(outerRef, () => {
    setOutsideClick(true);

    setTimeout(() => {
      setOutsideClick(false);
    }, 10000);
  });

  return (
    <form>
      <Wrapper margin={margin} maxWidth={maxWidth} ref={outerRef}>
        {inputItems?.map((item) => {
          return (
            <Input
              //   key={item.id}
              name={item.name}
              type={item.type}
              placeholder={item.placeholder}
              label={item.label}
              onChange={formik?.handleChange}
              value={formik?.values[item.name]}
              error={outsideClick && Boolean(formik.errors[item.name])}
              note={outsideClick && formik.errors[item.name]}
            />
          );
        })}
      </Wrapper>
    </form>
  );
};

export default Form;
