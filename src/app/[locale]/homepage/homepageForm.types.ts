import { Control, FieldErrors } from "react-hook-form";

export interface HomepageFormValues {
  username: string;
  password: string;
}

export interface HomepageFormSectionProps {
  control: Control<HomepageFormValues, any>;
  errors: FieldErrors<HomepageFormValues>;
}

export interface ItemCardProps {
  data: {};
}
