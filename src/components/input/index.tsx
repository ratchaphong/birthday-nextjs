import React from "react";
import { Controller } from "react-hook-form";
import { Input, Typography } from "antd";
import styles from "./index.module.scss";
import { FormInputProps } from "./index.types";

const { Text } = Typography;

const FormInput: React.FC<FormInputProps> = ({
  name,
  control,
  label,
  errors,
  password = false,
  placeholder = "",
}) => {
  const errorMessage = errors?.[name]?.message as string | undefined;

  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        // defaultValue=""
        render={({ field }) =>
          password ? (
            <Input
              {...field}
              className={styles.container}
              placeholder={placeholder}
              type="password"
            />
          ) : (
            <Input
              {...field}
              className={styles.container}
              placeholder={placeholder}
            />
          )
        }
      />
      {errorMessage && <Text type="danger">{errorMessage}</Text>}
    </div>
  );
};

export default FormInput;
