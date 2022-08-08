import React from "react";

interface ButtonProps {
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ backgroundColor, label, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={`rounded p-4 ${backgroundColor}`}
      {...props}
    >
      {label}
    </button>
  );
};
