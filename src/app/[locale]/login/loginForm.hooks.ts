"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { LoginFormValues } from "./loginForm.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginForm.schema";
import { useTranslations } from "next-intl";

export default function useLoginForm() {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<LoginFormValues>({
    mode: "onTouched",
    defaultValues: {
      username: "username",
      password: "",
    },
    resolver: yupResolver(loginSchema),
  });
  const t = useTranslations("login");
  const router = useRouter();
  const [state, setState] = useState<"login" | "signup">("login");

  const onSubmit = (data: LoginFormValues) => {
    console.log("Submitted:", data);
  };

  const onChangeState = (nextState: "login" | "signup") => {
    if (nextState === state) return;
    switch (state) {
      case "login":
        setState("signup");
        break;
      case "signup":
        setState("login");
        break;
    }
  };

  return {
    control,
    handleSubmit: handleSubmit(onSubmit),
    onChangeState,
    errors,
    state,
    t,
  };
}

// Container Component
