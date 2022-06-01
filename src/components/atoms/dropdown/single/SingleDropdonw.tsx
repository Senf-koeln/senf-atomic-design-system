import React, { FunctionComponent, useState } from "react";
import { InputField } from "../../inputs/input.styles";
import { Selector } from "../Dropdown.styles";
import { DropdownProps } from "../Dropdown.types";

const SingleDropdown: FunctionComponent<DropdownProps<false>> = ({
  id,
  placeholder,
  listItems,
}) => {
  const [selectedItem, setSelectedItem] = useState<string>();
  return (
    <>
      <InputField multi as={Selector} name={id} id={id}>
        {placeholder && (
          <option disabled selected hidden>
            {placeholder}
          </option>
        )}
        {listItems.map((item) => (
          <option value={item.value}>{item.label}</option>
        ))}
      </InputField>
    </>
  );
};

export default SingleDropdown;
