import React, { InputHTMLAttributes } from "react";
import { Icon } from "../Icon/Icon";

interface InputTextProps extends InputHTMLAttributes<HTMLInputElement> {
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
  value: string;
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
  requiredLabel?: string;

  /**
   * Input States
   */
  disabled?: boolean;

  /**
   * Optional Variables
   */
  position?: "left"; // To position Icon to the right or left of the input
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
  requiredLabel,
  position,
  disabled,
  // onChange,
  ...props
}: InputTextProps) => {
  const positionIconText = position == "left" && "pl-9 pr-2 py-2";

  const withError = error
    ? "border-red-400 focus:border-red-400"
    : "border-gray-500";

  const positionIcon = position == "left" ? `left-6` : `right-6`;

  return (
    <div className="flex flex-col">
      <label
        htmlFor={idValue}
        className={`text-sm font-semibold text-gray-900 ${
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
        name={idValue}
        className={`px-2 py-2 mt-1 text-sm text-gray-700 border border-secondary-700 rounded-md placeholder:text-gray-300 focus:border-2 focus:border-primary-900 disabled:border-gray-300 active:border active:border-primary-900 active:text-gray-800 ${positionIconText} ${withError}`}
        disabled={disabled}
        onChange={props.onChange}
        {...props}
      />
      {position == "left" && (
        <span
          className={
            props.visible
              ? `absolute top-[48px] ${positionIcon}`
              : `absolute top-[30px] ${positionIcon}`
          }
        >
          <Icon
            iconName="calendar"
            size="medium"
            className="active:text-gray-80"
          />
        </span>
      )}

      {error && (
        <p className="flex items-start mt-2 text-xs leading-3 text-red-600">
          <span className="mr-1">
            <Icon
              iconName="exclamationCircleIconOutline"
              size="small"
              className="text-red-600"
            />
          </span>
          {error}
        </p>
      )}
      {requiredLabel && (
        <p className="flex items-start mt-2 text-xs leading-3 text-gray-600">
          <span className="mr-1">
            <Icon iconName="exclamationCircleIconOutline" size="small" />
          </span>
          {requiredLabel}
        </p>
      )}
    </div>
  );
};
