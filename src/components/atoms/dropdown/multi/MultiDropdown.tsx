import React, { FunctionComponent, useState } from "react";
import { InputField } from "../../inputs/input.styles";
import { Selector } from "../Dropdown.styles";
import { DropdownProps } from "../Dropdown.types";

const MultiDropdown: FunctionComponent<DropdownProps<true>> = ({
  id,
  placeholder,
  listItems,
}) => {
  const listItemsArr = Object.entries(listItems);
  const [selectedItems, setSelectedItems] = useState(
    Object.fromEntries(
      listItemsArr.map(([key, value]) => [key, placeholder || undefined])
    )
  );

//   const handleOnChange = React.useCallback(
//     (e: React.ChangeEvent<HTMLSelectElement>, key: string) => {
//       setSelectedItems((selectedItems) => {
//         selectedItems[key] = e.currentTarget.value;
//         return selectedItems;
//       });
//     },
//     []
//   );

  return (
    <>
      {listItemsArr.map(([key, value], index) => (
        <InputField
          multi
          as={Selector}
          name={key}
          id={id}
        >
          {placeholder && (
            <option disabled selected hidden>
              {placeholder}
            </option>
          )}
          {value.map((ele) => (
            <option value={ele.value}>{ele.label}</option>
          ))}
        </InputField>
      ))}
    </>
  );
};

export default MultiDropdown;
