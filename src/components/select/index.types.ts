export interface Option {
  label: string;
  value: string | number;
}

export interface FormSelectProps {
  name: string;
  control: any;
  label?: string;
  errors?: any;
  placeholder?: string;
  options: Option[];
  disabled?: boolean;
}
