import React from "react";

interface InputTextProps {
  /**
   * Input Default Values
   */
  label: string;
  description?: string;
  placeholder?: string;
  value: string;
  error?: string;
  icon?: string;
  visible?: boolean;

  onClick?: () => void;

  /**
   * Input States
   */
  disabled?: boolean;

  /**
   * Optional Variables
   */
  position?: string; // To position Icon to the right or left of the input
}

/**
 * InputText UI component for user interaction
 */

export const InputText = ({
  label,
  placeholder,
  value,
  description,
  error,
  disabled,
  visible,
  ...props
}: InputTextProps) => {
  return (
    <div className="flex flex-col">
      {visible && (
        <label className="text-sm font-semibold text-gray-800">{label}</label>
      )}

      <p className="text-xs leading-6 text-gray-400">{description}</p>
      {disabled ? (
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          className="p-2 mt-1 text-sm border-2 border-gray-200 rounded-md"
          {...props}
          disabled
        />
      ) : (
        <input
          type="text"
          placeholder={placeholder}
          value={value}
          className={
            error
              ? "p-2 mt-1 text-sm border-2 rounded-md border-red-400"
              : "p-2 mt-1 text-sm border-2 border-gray-400 rounded-md"
          }
          {...props}
        />
      )}
      <div></div>
      <p className="mt-1 text-xs text-red-500">{error}</p>
    </div>
  );
};
