export interface DropdownProps {
  id: string;
  label?: string;
  note?: string;
  multi?: boolean;
  listItems: string[][] | string[];
}
