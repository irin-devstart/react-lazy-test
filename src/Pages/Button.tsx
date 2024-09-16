import React, { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "primary" | "secondary";
}
const Button = ({ children, variant, ...props }: Props) => {
  return (
    <button
      {...props}
      style={{ backgroundColor: variant === "primary" ? "blue" : "grey" }}
    >
      {children}
    </button>
  );
};

export default Button;
