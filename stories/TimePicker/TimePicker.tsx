import React from "react";

interface TimePickerProps {
  time?: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export const TimePicker = ({ time, onChange }: TimePickerProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input
      // ref={refInputStartTime}
      name="start-time"
      id="start-time"
      className="border border-gray-500 p-4 rounded-xl focus:outline-none focus:ring-primary-900 focus:ring-1 hover:ring-[1.5px] hover:ring-secondary-100"
      type="time"
      value={time}
      onChange={handleChange}
    />
  );
};
