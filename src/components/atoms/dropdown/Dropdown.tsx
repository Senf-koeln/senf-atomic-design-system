/** @format */

import React, { FunctionComponent } from "react";
import Box from "../box/Box";
import { Wrapper, Label, Note } from "../inputs/input.styles";
import { DropdownProps, MultiListItems } from "./Dropdown.types";
import MultiDropdown from "./multi/MultiDropdown";
import SingleDropdown from "./single/SingleDropdonw";

const Dropdown: FunctionComponent<DropdownProps> = ({
  id,
  placeholder,
  label,
  note,
  multi,
  listItems,
  recieveValue,
  value,
}) => {
  return (
    <Wrapper>
      <Box>
        <Label htmlFor={id}>{label}</Label>
        <Note>{note}</Note>
      </Box>
      <Box gap="0.5rem">
        {multi ? (
          <MultiDropdown
            id={id}
            listItems={listItems as MultiListItems}
            recieveValue={recieveValue}
          />
        ) : (
          <SingleDropdown
            id={id}
            listItems={listItems}
            recieveValue={recieveValue}
            value={value}
          />
        )}
      </Box>
    </Wrapper>
  );
};

export default Dropdown;
