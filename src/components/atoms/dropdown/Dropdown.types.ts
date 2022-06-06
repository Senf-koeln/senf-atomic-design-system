type listItem = {
  value: string;
  label: string;
}
export type DropdownProps<TMultiple = boolean> = TMultiple extends true
  ? {
      id: string;
      placeholder?: string;
      label?: string;
      note?: string;
      multi?: TMultiple;
      listItems: MultiListItems;
      recieveValue: (value: SelectedListItem ) => void
    }
  : {
      id: string;
      placeholder?: string;
      label?: string;
      note?: string;
      multi?: TMultiple;
      listItems: {[index: string]: listItem[]};
      recieveValue: (value: SelectedListItem ) => void
    };
export interface MultiListItems {
  [index: string]: listItem[];
}
export interface SelectedListItem {
  [k: string]: string | undefined; 
}
