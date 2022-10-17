import React from "react";
import { Icon } from "../Icon/Icon";

interface TimePickerProps {
  time: string | undefined;
  id: string;
  label: string;
  isValue: boolean;
  errorMessage: string;
  setTime: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export const TimePicker = ({
  time,
  setTime,
  label,
  id,
  isValue,
  errorMessage,
}: TimePickerProps) => {
  const errorClassName = "flex items-center text-alert-600 text-sm mt-2";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value);
  };
  return (
    <>
      <label htmlFor={id} className="text-sm  text-gray-900 pb-1">
        {label}
      </label>
      <input
        name={id}
        id={id}
        className="ring-1 ring-secondary-500  px-2 h-12 text-sm rounded-xl focus:outline-none focus:ring-primary-900 focus:ring-[1.5px] hover:ring-[1.5px] ring-1"
        type="time"
        value={time}
        onChange={handleChange}
      />
      {isValue ? null : (
        <div className={errorClassName}>
          <Icon iconName="informationCircle" />
          <span className="ml-2">{errorMessage}</span>
        </div>
      )}
    </>
  );
};
