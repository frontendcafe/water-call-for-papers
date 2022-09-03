import React from "react";

export const IconContainer = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <span aria-hidden className="flex-shrink-0 inline-flex" {...props}>
      {children}
    </span>
  );
};