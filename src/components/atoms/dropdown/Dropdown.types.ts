export type DropdownProps<TMultiple = boolean> = TMultiple extends true
  ? {
      id: string;
      placeholder?: string;
      label?: string;
      note?: string;
      multi?: TMultiple;
      listItems: MultiListItems;
    }
  : {
      id: string;
      placeholder?: string;
      label?: string;
      note?: string;
      multi?: TMultiple;
      listItems: { value: string; label: string }[];
    };
export interface MultiListItems {
  [index: string]: {
    value: string;
    label: string;
  }[];
}
