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
  pathIcon,
  otherPathIcon,
  colorIcon,
  position,
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
          className="relative pl-8 pr-2 py-2 mt-1 text-sm border-2 border-gray-200 rounded-md"
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
              ? "relative pl-8 pr-2 py-2 mt-1 text-sm border-2 rounded-md border-red-400 placeholder:mr-2"
              : "relative pl-8 pr-2 py-2 mt-1 text-sm border-2 border-gray-400 rounded-md"
          }
          {...props}
        />
      )}
      <div className={`absolute top-[50px] ${position}-6`}>
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
      <p className="mt-1 text-xs text-red-500">{error}</p>
    </div>
  );
};
