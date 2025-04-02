import { Control, FieldErrors } from "react-hook-form";

export interface LoginFormValues {
  username: string;
  password: string;
}

export interface LoginFormSectionProps {
  control: Control<LoginFormValues, any>;
  errors: FieldErrors<LoginFormValues>;
}
