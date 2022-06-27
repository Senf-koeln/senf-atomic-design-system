/** @format */

import React, { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import { InputField } from "../../inputs/input.styles";
import { Selector } from "../Dropdown.styles";
import { DropdownProps } from "../Dropdown.types";

const SingleDropdown: FunctionComponent<DropdownProps<false>> = ({
  id,
  placeholder,
  listItems,
  recieveValue,
}) => {
  const { t } = useTranslation();
  const listItemKey = Object.keys(listItems)[0];

  return (
    <>
      <InputField
        multi
        as={Selector}
        name={id}
        id={id}
        onChange={(e) => {
          recieveValue({ [listItemKey]: e.currentTarget.value });
        }}
      >
        {id && (
          <option disabled selected hidden>
            {t(id)}
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
