import React from "react";
import { Controller } from "react-hook-form";
import { Select, Typography } from "antd";
import styles from "./index.module.scss";
import { FormSelectProps } from "./index.types";

const { Text } = Typography;
const { Option } = Select;

const FormSelect: React.FC<FormSelectProps> = ({
  name,
  control,
  label,
  errors,
  placeholder = "",
  options = [],
  disabled = false,
}) => {
  const errorMessage = errors?.[name]?.message as string | undefined;

  return (
    <div className={styles.wrapper}>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            className={styles.container}
            placeholder={placeholder}
            disabled={disabled}
            onChange={(value) => field.onChange(value)}
            value={field.value}
          >
            {options.map((option) => (
              <Option key={option.value} value={option.value}>
                {option.label}
              </Option>
            ))}
          </Select>
        )}
      />
      {errorMessage && <Text type="danger">{errorMessage}</Text>}
    </div>
  );
};

export default FormSelect;
