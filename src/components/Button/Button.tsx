import React, { FC, HTMLAttributes, MouseEventHandler, ReactNode } from "react";
import { BackgroundColor, ButtonSize, Rounded, TextColor } from "./ButtonTheme";

export interface ButtonType extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  color: "primary" | "secondary" | "white" | "dark" | "alternate";
  size?: "xs" | "sm" | "md" | "base" | "lg";
  circular?: boolean;
  background?: boolean;
  disabled?: boolean;
  iconLeft?: string;
  iconRight?: string;
  handleClick?:MouseEventHandler<HTMLButtonElement>
}
const Button: FC<ButtonType> = ({
  children,
  color = "primary",
  size = "base",
  background = true,
  circular=false,
  handleClick,
  ...props
}) => {
  const classNames = `
${ButtonSize[size as keyof typeof ButtonSize]}

${
  background
    ? BackgroundColor[color as keyof typeof BackgroundColor]
    : TextColor[color as keyof typeof TextColor]
}

${circular?
  Rounded["full"]:
  Rounded["md"]
}
`;
  return (
    <button {...props} 
    onClick={handleClick}
    className={classNames}>
      {children}
    </button>
  );
};

export default Button;
