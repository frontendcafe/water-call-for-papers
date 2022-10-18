import es from "date-fns/locale/es";
import { SyntheticEvent } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { Icon } from "../Icon/Icon";
registerLocale("es", es);

interface DatePickerProps {
  /**
   *  The date
   */
  date: Date | undefined;
  /**
   *  The string
   */
  label: string;
  /**
   *  Event onChange
   */
  onChange: (date: Date, event: SyntheticEvent<Event>) => void;
  isValue: boolean;
  errorMessage: string;
}

export const DayPicker = ({
  date,
  label,
  onChange,
  isValue,
  errorMessage,
}: DatePickerProps) => {
  const containerStyles =
    "bg-white flex items-center gap-2 hover:ring-[1.5px] ring-1  mt-1 text-sm ring-1 px-2 ring-secondary-500 h-12 rounded-xl focus:border-2 focus:border-gray-400 disabled:border-gray-200";

  const errorClassName = "flex items-center text-alert-600 text-sm mt-2";

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
      {isValue ? null : (
        <div className={errorClassName}>
          <Icon iconName="informationCircle" />
          <span className="ml-2">{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
