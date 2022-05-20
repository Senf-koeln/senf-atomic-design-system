import React, { FunctionComponent } from "react";
import { Wrapper, Indication, InputField } from "../inputs/input.styles";
import { Selector } from "./Dropdown.styles";
import { DropdownProps } from "./Dropdown.types";

const Dropdown: FunctionComponent<DropdownProps> = ({
  id,
  label,
  note,
  listItems,
}) => {
  return (
    <Wrapper>
      <Indication>
        <label htmlFor={id}>{label}</label>
        <p>{note}</p>
      </Indication>
      <InputField as={Selector} name={id} id={id}>
        {(listItems as string[]).map((ele) => (
          <option value={ele}>{ele}</option>
        ))}
      </InputField>
    </Wrapper>
  );
};

export default Dropdown;
