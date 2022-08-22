import React from "react";

interface InputTextProps {
  /**
   * Input Default Values
   */
  /**
   * Label Name.
   */
  label: string;
  /**
   * Input with a litle description below tag label.
   */
  description?: string;
  /**
   * Placeholder in tag input.
   */
  placeholder?: string;
  /**
   * Value in tag input.
   */
  value?: string;
  /**
   * idValue relation between label and input (htmlFor).
   */
  idValue: string;
  /**
   * Error text on input
   */
  error?: string;
  /**
   * Label name visible option
   */
  visible?: boolean;
  /**
   * Input required option
   */
  required?: string;

  onClick?: () => void;

  /**
   * Input States
   */
  disabled?: boolean;

  /**
   * Optional Variables
   */
  position?: "left" | "right"; // To position Icon to the right or left of the input
}

/**
 * InputText UI component for user interaction
 */

export const InputText = ({
  label,
  placeholder,
  idValue,
  description,
  error,
  required,
  position,
  disabled,
  ...props
}: InputTextProps) => {
  const positionIconText = position == "left" && "pl-8 pr-2 py-2";

  const withError = error
    ? "border-red-400 focus:border-red-400"
    : "border-gray-500";

  return (
    <div className="flex flex-col">
      <label
        htmlFor={idValue}
        className={`text-sm font-semibold text-gray-800 ${
          label ? "not-sr-only" : "sr-only"
        }`}
      >
        {label}
      </label>
      {description && (
        <p className="text-xs leading-6 text-gray-400">{description}</p>
      )}
      <input
        type="text"
        placeholder={placeholder}
        id={idValue}
        value={props.value}
        className={`px-2 py-2 mt-1 text-sm border-2 rounded-md focus:border-2 focus:border-gray-400 disabled:border-gray-200 ${positionIconText} ${withError}`}
        disabled={disabled}
      />
      {/* Icon component goes here */}
      {/* <div
          className={
            visible
              ? `absolute top-[50px] ${position}-6`
              : `absolute top-[30px] ${position}-6`
          }
        >
          Icon component goes here
        </div> */}
      {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
      {required && (
        <p className="flex mt-2 text-xs text-gray-600">
          <span className="mr-1">{/* Icon component goes here */}</span>
          {required}
        </p>
      )}
    </div>
  );
};
