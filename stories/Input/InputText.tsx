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
  pathIcon?: string;
  visible?: boolean;
  required?: string;

  onClick?: () => void;

  /**
   * Input States
   */
  disabled?: boolean;

  /**
   * Optional Variables
   */
  position?: string; // To position Icon to the right or left of the input
  colorIcon?: string;
  otherPathIcon?: string;
  icon?: React.ReactNode;
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
  icon,
  required,
  pathIcon,
  otherPathIcon,
  colorIcon,
  position,
  disabled,
  visible,
  ...props
}: InputTextProps) => {
  const positionWithIcon = position == "left" && "pl-8 pr-2 py-2";

  const withError = error
    ? "border-red-400 focus:border-red-400"
    : "border-gray-500";

  const withDisabled = disabled && "disabled:border-gray-200";

  return (
    <div className="flex flex-col">
      {visible && (
        <label className="text-sm font-semibold text-gray-800">{label}</label>
      )}
      <p className="text-xs leading-6 text-gray-400">{description}</p>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className={`px-2 py-2 mt-1 text-sm border-2 rounded-md focus:border-2 focus:border-gray-400 ${positionWithIcon} ${withError} ${withDisabled}`}
        disabled={disabled}
        {...props}
      />
      {pathIcon && (
        <div
          className={
            visible
              ? `absolute top-[50px] ${position}-6`
              : `absolute top-[30px] ${position}-6`
          }
        >
          <svg
            fill="none"
            stroke="currentColor"
            className={`w-6 text-${colorIcon}`}
            viewBox="0 0 24 24"
          >
            <path d={pathIcon}></path>
            <path d={otherPathIcon}></path>
          </svg>
        </div>
      )}
      {(error && <p className="mt-2 text-xs text-red-500">{error}</p>) ||
        (required && (
          <p className="flex mt-2 text-xs text-gray-600">
            <span className="mr-1">{icon}</span>
            {required}
          </p>
        ))}
    </div>
  );
};
