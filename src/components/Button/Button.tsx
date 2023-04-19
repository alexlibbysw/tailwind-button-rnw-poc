import React from "react";
import cx from "classnames";
import "./button.dist.css";

export type IconPosition = "left" | "right";

export type Platform = "web" | "app" | "ourworld";

export type ThemeColor =
  | "red"
  | "green"
  | "blue"
  | "purple"
  | "teal"
  | "pink"
  | "orange";

export type ButtonProps = {
  children?: React.ReactNode;
  role: string;
  stretch?: boolean;
  disabled?: boolean;
  dataTestid: string;
  iconName?: any;
  className: string;
  themeColor: ThemeColor;
  iconPosition?: IconPosition;
  onClick?: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  iconName,
  role,
  className,
  stretch,
  disabled,
  dataTestid,
  themeColor,
  iconPosition = "right",
  ...props
}) => {
  const createElement = () => {
    return React.createElement(iconName, {
      width: 12,
      height: 12,
      color: "#000",
    });
  };
  return iconPosition === "left" ? (
    <>
      <button
        type="button"
        className={cx(className, "left", themeColor, {
          "is-disabled": disabled,
          stretch,
        })}
        data-testid={dataTestid}
        role={role}
        disabled={disabled}
        {...props}
      >
        {iconName && createElement()}
        {children}
      </button>
    </>
  ) : (
    <>
      <button
        type="button"
        className={cx(className, "right", themeColor, {
          "is-disabled": disabled,
          stretch,
        })}
        role={role}
        disabled={disabled}
      >
        {children}
        {iconName && createElement()}
      </button>
    </>
  );
};

export default Button;
