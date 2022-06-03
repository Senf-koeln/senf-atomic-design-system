import React, { FunctionComponent } from "react";
import { Wrapper, Indication } from "../inputs/input.styles";
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
  recieveValue
}) => {
  return (
    <Wrapper>
      <Indication>
        <label htmlFor={id}>{label}</label>
        <p>{note}</p>
      </Indication>
      <div style={{ display: "flex", gap: "0.5rem" }}>
        {multi ? (
          <MultiDropdown
            id={id}
            placeholder={placeholder}
            listItems={listItems as MultiListItems}
            recieveValue={recieveValue}
          />
        ) : (
          <SingleDropdown
            id={id}
            placeholder={placeholder}
            listItems={listItems}
            recieveValue={recieveValue}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default Dropdown;
