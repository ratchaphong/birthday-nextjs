import { Control, FieldErrors } from "react-hook-form";

export interface FormInputProps {
  name: string;
  control: Control<any>;
  label: string;
  errors?: FieldErrors;
  password?: boolean;
  placeholder?: string;
}
