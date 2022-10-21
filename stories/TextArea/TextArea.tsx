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
    ? "border-red-400/80 focus:border-red-400"
    : "border-gray-500";

  // Conditionally apply display value depending if there is a description.
  const labelVisibility = isLabelVisible ? "block" : "sr-only";

  return (
    <div className="flex flex-col gap-1 text-[#667080]">
      <label
        className={`text-sm font-semibold text-gray-900  ${labelVisibility} `}
        htmlFor={idValue}
      >
        {label}
      </label>

      {description && <p className={`text-xs`}>{description}</p>}

      <textarea
        className={`px-2 py-2 mt-1 text-sm text-gray-700 border border-secondary-700 rounded-md placeholder:text-gray-400 focus:border-2 focus:border-primary-900 disabled:border-gray-300 active:border active:border-primary-900 active:text-gray-800 ${withError}`}
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
        </div>
      )}
    </div>
  );
};
