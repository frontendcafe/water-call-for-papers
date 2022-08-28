import React from "react";

export const IconContainer = ({
  children,
  ...props
}: {
  children: React.ReactNode;
}) => {
  return (
    <span className="flex-shrink-0" {...props}>
      {children}
    </span>
  );
};
