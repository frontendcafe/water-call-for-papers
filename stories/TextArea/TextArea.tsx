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
  value: string;

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
        className={`text-sm font-semibold  ${labelVisibility} `}
        htmlFor={idValue}
      >
        {label}
      </label>

      {description && <p className={`text-xs`}>{description}</p>}

      <textarea
        className={`text-base border-2 p-3 rounded-lg active:bg-slate-100 disabled:bg-slate-200/50 ${withError}`}
        id={idValue}
        name={idValue}
        maxLength={maxLength}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        required={required}
        rows={rows}
        cols={columns}
      />

      {/* If there is an error or maxLength, the div elemet will be rendered. */}
      {(error || maxLength) && (
        <div
          // Dependign if there is an error, apply different property value.
          className={`flex ${
            error ? "justify-between" : "justify-end"
          } text-xs`}
        >
          {/* If error evaluated to true, display it. */}
          {error && (
            <div className="flex gap-1.5 items-center text-red-400/80">
              <Icon iconName="exclamationCircle" />
              <p>{error}</p>
            </div>
          )}

          {/* If maxLength evaluated to true, display it. */}
          {maxLength && <span>Máx {maxLength} caracteres.</span>}
        </div>
      )}
    </div>
  );
};
