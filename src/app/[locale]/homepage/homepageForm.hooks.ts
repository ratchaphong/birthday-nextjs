"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { HomepageFormValues } from "./homepageForm.types";

export default function useHomepageForm() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<HomepageFormValues>({
    mode: "onTouched",
    defaultValues: {
      username: "username",
      password: "",
    },
  });

  const router = useRouter();

  return {
    control,
    errors,
  };
}

// Container Component
