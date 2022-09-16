import es from "date-fns/locale/es";
import { SyntheticEvent } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { Icon } from "../Icon/Icon";
registerLocale("es", es);

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
  onChange: (date: Date, event: SyntheticEvent<Event>) => void;
}

export const DayPicker = ({ date, label, onChange }: DatePickerProps) => {
  const containerStyles =
    "bg-white flex items-center gap-2 px-2 py-2 mt-1 text-sm border-2 rounded-xl focus:border-2 focus:border-gray-400 disabled:border-gray-200";

  return (
    <div className="flex flex-col">
      <label
        className="text-sm font-semibold text-gray-800"
        htmlFor="datepicker"
      >
        {label}
      </label>
      <div className={containerStyles}>
        <Icon iconName="calendar" size="medium" />
        <DatePicker
          id="datepicker"
          className="w-full outline-none"
          dateFormat="dd/MM/yyyy"
          selected={date}
          locale="es"
          onChange={onChange}
        />
      </div>
    </div>
  );
};
