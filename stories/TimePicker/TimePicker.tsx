import React from "react";

interface TimePickerProps {
  time: string;
  id: string;
  label: string;
  setTime: React.Dispatch<React.SetStateAction<string>>;
}

export const TimePicker = ({ time, setTime, label, id }: TimePickerProps) => {
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
        className="border border-gray-500 p-4 rounded-xl focus:outline-none focus:ring-primary-900 focus:ring-1 hover:ring-[1.5px] hover:ring-secondary-100"
        type="time"
        value={time}
        onChange={handleChange}
      />
    </>
  );
};
