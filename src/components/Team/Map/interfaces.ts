import { Tag } from 'react-tag-autocomplete';

export interface SelectOption {
  label: string;
  value: string;
}

export interface MapFilterFormOptions {
  types: SelectOption[];
  winds: SelectOption[];
  sorts: SelectOption[];
  tags: Tag[];
}
