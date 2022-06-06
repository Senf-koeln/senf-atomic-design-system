import React, { FunctionComponent, useState } from "react";
import { InputField } from "../../inputs/input.styles";
import { Selector } from "../Dropdown.styles";
import { DropdownProps } from "../Dropdown.types";

const SingleDropdown: FunctionComponent<DropdownProps<false>> = ({
  id,
  placeholder,
  listItems,
  recieveValue
}) => {
  const listItemKey = Object.keys(listItems)[0];

  return (
    <>
      <InputField multi as={Selector} name={id} id={id} onChange={(e) => {
        recieveValue({[listItemKey]: e.currentTarget.value});
      }}>
        {placeholder && (
          <option disabled selected hidden>
            {placeholder}
          </option>
        )}
        {Object.values(listItems)[0].map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </InputField>
    </>
  );
};

export default SingleDropdown;
