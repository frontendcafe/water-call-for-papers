import React, { TextareaHTMLAttributes } from "react";
import { Icon } from "../Icon/Icon";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  // Button content
  label: string;

  // Label visibility, optional.
  isLabelVisible?: boolean;

  // Element description, optional.
  description?: string;

  // Max lenght, optional.
  maxLength?: number;

  // Placeholder, optional.
  placeholder?: string;

  // Element value.
  value?: string;

  // Element's id
  idValue: string;

  // Error message, optional.
  error?: string;

  // Disable textArea, optional.
  disabled?: boolean;

  // Required, optional.
  required?: boolean;

  // Rows for element, optional.
  rows?: number;

  // Columns for element, optional.
  columns?: number;
}

export const TextArea = ({
  label,
  isLabelVisible,
  description,
  maxLength,
  placeholder,
  value,
  idValue,
  error,
  disabled,
  required,
  rows,
  columns,
  ...props
}: TextAreaProps) => {
  // Conditionally apply specific border depending if there is an error.
  const withError = error
    ? "border-alert-600 focus:border-alert-600 ring-1 ring-alert-600"
    : "";

  // Conditionally apply display value depending if there is a description.
  const labelVisibility = isLabelVisible ? "block" : "sr-only";

  return (
    <div className="flex flex-col gap-1 text-secondary-900">
      <label className={`font-semibold  ${labelVisibility} `} htmlFor={idValue}>
        {label}
      </label>
      <textarea
        className={`transition-[colors,_drop_shadow] duration-100 px-2 py-4 mt-1 border focus:outline-none focus:border-primary-900 focus:ring-1 focus:ring-primary-900 disabled:ring-gray-300 disabled:ring-1 hover:ring-primary-900 hover:ring-1 rounded-xl border-secondary-700 text-secondary-800 placeholder:text-secondary-300 ${withError}`}
        id={idValue}
        name={idValue}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        required={required}
        rows={rows}
        cols={columns}
        onChange={props.onChange}
      />
      {description && <p className={`text-xs`}>{description}</p>}
      {/* If there is an error or maxLength, the div elemet will be rendered. */}
      {error && (
        <div
          // Dependign if there is an error, apply different property value.
          className={`flex ${
            error ? "justify-between" : "justify-end"
          } text-xs`}
        >
          {/* If error evaluated to true, display it. */}
          {error && (
            <p className="flex items-center gap-1 mt-1 ml-2 text-xs text-alert-600">
              <Icon iconName="exclamationCircleIconOutline" size="small" />
              {error}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
