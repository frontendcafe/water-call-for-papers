import DatePicker from "react-datepicker";
import { Icon } from "../Icon/Icon";

interface DatePickerProps {
  /**
   *  The date
   */
  date: Date;
  /**
   *  The string
   */
  label: string;
  /**
   *  Event onChange
   */
  onChange: Event;
}

export const DayPicker = ({ date, label, onChange }: DatePickerProps) => {
  return (
    <div className="flex flex-col">
      <label
        className="text-sm font-semibold text-gray-800"
        htmlFor="datepicker"
      >
        {label}
      </label>
      <div className="bg-white flex items-center gap-2 px-2 py-2 mt-1 text-sm border-2 rounded-md focus:border-2 focus:border-gray-400 disabled:border-gray-200">
        <Icon iconName="calendar" size="medium" />
        <DatePicker
          id="datepicker"
          className="w-full outline-none"
          selected={date}
          onChange={() => onChange}
        />
      </div>
    </div>
  );
};
