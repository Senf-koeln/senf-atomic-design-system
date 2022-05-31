/** @format */

import React, { FunctionComponent } from "react";
import Box from "../box/Box";
import { Wrapper, Label, Note, InputField } from "../inputs/input.styles";
import { Selector } from "./Dropdown.styles";
import { DropdownProps } from "./Dropdown.types";

const Dropdown: FunctionComponent<DropdownProps> = ({
  id,
  label,
  note,
  multi,
  listItems,
}) => {
  const nestedLists = listItems.filter(Array.isArray);
  if (multi) {
    nestedLists.length == 0 && new Error("please use an Array of string Array");
  }
  if (!multi) {
    nestedLists.length > 0 &&
      new Error('please provide the prop "multi" to Dropdown component');
  }
  return (
    <Wrapper>
      <Box>
        <Label htmlFor={id}>{label}</Label>
        <Note>{note}</Note>
      </Box>
      <Box gap="0.5rem">
        {multi ? (
          (listItems as string[][]).map((arrItem) => (
            <InputField multi as={Selector} name={id} id={id}>
              {arrItem.map((ele) => (
                <option value={ele}>{ele}</option>
              ))}
            </InputField>
          ))
        ) : (
          <InputField as={Selector} name={id} id={id}>
            {(listItems as string[]).map((ele) => (
              <option value={ele}>{ele}</option>
            ))}
          </InputField>
        )}
      </Box>
    </Wrapper>
  );
};

export default Dropdown;
