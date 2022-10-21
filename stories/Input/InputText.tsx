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
  value,
  visible,
  ...props
}: InputTextProps) => {
  const positionIconText = position == "left" && "pl-9 pr-2 py-4";

  const withError = error
    ? "border-alert-600 focus:border-alert-600 ring-1 ring-alert-600"
    : "";

  const positionIcon = position == "left" ? `left-2` : `right-6`;

  // TODO: Refactor to accept icons as children and use flex to position the icon within a container
  return (
    <div className="relative flex flex-col text-secondary-900">
      <label
        htmlFor={idValue}
        className={`font-semibold  ${label ? "not-sr-only" : "sr-only"}`}
      >
        {label}
      </label>
      {description && <p className="text-xs leading-6">{description}</p>}
      <input
        type="text"
        placeholder={placeholder}
        id={idValue}
        name={idValue}
        value={value}
        className={`px-2 py-4 mt-1 border focus:outline-none focus:border-primary-900 focus:ring-1 focus:ring-primary-900 disabled:ring-gray-300 disabled:ring-1 hover:ring-primary-900 hover:ring-1 rounded-xl border-secondary-700 text-secondary-800 placeholder:text-secondary-300 ${positionIconText} ${withError}`}
        disabled={disabled}
        onChange={props.onChange}
        {...props}
      />
      {position == "left" && (
        <span
          className={
            visible
              ? `absolute top-16 ${positionIcon}`
              : `absolute top-5 ${positionIcon}`
          }
        >
          <Icon iconName="calendar" size="medium" />
        </span>
      )}
      {/* TODO: Can be extracted to one component since they're similar */}
      {error && (
        <p className="absolute flex items-center gap-1 ml-2 text-xs -bottom-5 text-alert-600">
          <Icon iconName="exclamationCircleIconOutline" size="small" />
          {error}
        </p>
      )}
      {requiredLabel && (
        <p className="flex items-center gap-1 mt-1 ml-2 text-xs text-secondary-700">
          <Icon iconName="exclamationCircleIconOutline" size="small" />
          {requiredLabel}
        </p>
      )}
    </div>
  );
};
