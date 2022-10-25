import React from "react";
import { Icon } from "../Icon/Icon";

interface TimePickerProps {
  time: string | undefined;
  id: string;
  label: string;
  isValue: boolean;
  errorMessage: string;
  setTime: React.Dispatch<React.SetStateAction<string | undefined>>;
  placeholder: string;
}

export const TimePicker = ({
  time,
  setTime,
  label,
  id,
  isValue,
  errorMessage,
  placeholder,
}: TimePickerProps) => {
  const errorClassName = "flex items-center text-alert-600 text-sm mt-2";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };
  return (
    <>
      <div className="flex flex-col">
        <label htmlFor={id} className="pb-1 text-sm text-secondary-900">
          {label}
        </label>
        <input
          name={id}
          id={id}
          className="transition-[colors,_drop_shadow] duration-100 px-2 py-4 mt-1 border focus:outline-none focus:border-primary-900 focus:ring-1 focus:ring-primary-900 disabled:ring-gray-300 disabled:ring-1 hover:ring-primary-900 hover:ring-1 rounded-xl border-secondary-700 text-secondary-800 placeholder:text-secondary-300"
          type="time"
          value={time ?? "00:00"}
          onChange={handleChange}
          placeholder={placeholder}
        />
        {isValue ? null : (
          <div className={errorClassName}>
            <Icon iconName="informationCircle" />
            <span className="ml-2">{errorMessage}</span>
          </div>
        )}
      </div>
    </>
  );
};
