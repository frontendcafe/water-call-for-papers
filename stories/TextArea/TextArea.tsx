import React from "react";

interface TextAreaProps {
  // Button content
  label: string;

  // Label visibility, optional.
  visible?: boolean;

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
  visible,
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
    ? "border-red-400 focus:border-red-400"
    : "border-gray-500";

  // Conditionally apply display value depending if there is a description.
  const visibility = visible ? "block" : "hidden";

  return (
    <div className="flex flex-col gap-1">
      <label
        className={`text-sm font-semibold ${visibility}`}
        htmlFor={idValue}
      >
        {label}
      </label>

      <p className={`text-xs`}>{description}</p>

      <textarea
        className={`text-base border-2 p-3 rounded-lg active:bg-slate-100 focus:border-red-400 disabled:bg-slate-200/50 ${withError}`}
        id={idValue}
        name={idValue}
        maxLength={maxLength}
        placeholder={placeholder}
        value={error || value}
        disabled={disabled}
        required={required}
        rows={rows}
        cols={columns}
      />

      <label className="text-xs text-right text">
        Máx {maxLength} caracteres.
      </label>
    </div>
  );
};
