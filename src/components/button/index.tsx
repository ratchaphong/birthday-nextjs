import React from "react";
import { Button } from "antd";
import classNames from "classnames";
import styles from "./index.module.scss";
import { CustomButtonProps } from "./index.types";

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  className = "",
  ...rest
}) => {
  return (
    <Button
      {...rest}
      className={classNames(styles.container, styles[className])}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
