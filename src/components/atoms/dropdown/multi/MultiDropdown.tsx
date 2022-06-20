/** @format */

import React, { FunctionComponent, useState } from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components";
import { InputField } from "../../inputs/input.styles";
import { Selector } from "../Dropdown.styles";
import { DropdownProps } from "../Dropdown.types";

const MultiDropdown: FunctionComponent<DropdownProps> = ({
  id,
  placeholder,
  listItems,
  recieveValue,
}) => {
  const { t } = useTranslation();
  const listItemsArr = Object.entries(listItems);
  const [selectedItems, setSelectedItems] = useState<{
    [k: string]: undefined | string;
  }>(Object.fromEntries(listItemsArr.map(([key]) => [key, undefined])));

  return (
    <>
      {listItemsArr.map(([key, value], index) => (
        <InputField
          key={key}
          multi
          as={Selector}
          name={key}
          id={id}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedItems((prevState) => {
              prevState[key] = e.currentTarget.value;
              return prevState;
            });
            recieveValue(selectedItems);
          }}
        >
          {key && (
            <option disabled selected hidden>
              {t(key)}
            </option>
          )}
          {value.map((ele, index) => (
            <option key={index} value={ele.value}>
              {ele.label}
            </option>
          ))}
        </InputField>
      ))}
    </>
  );
};

export default MultiDropdown;
