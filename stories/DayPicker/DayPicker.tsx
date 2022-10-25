import es from "date-fns/locale/es";
import { SyntheticEvent } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { Icon } from "../Icon/Icon";
import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";

registerLocale("es", es);

interface DatePickerProps {
  /**
   *  The date
   */
  date: Date | undefined;
  /**
   *  The string
   */
  /** Set the actual date as selected by default. */

  /** The string */
  label: string;

  /** Specify maximum of days possible to the future to pick a date. Example, if today is 13/10/22, set 'untilDays' for X amount of days to the future. Default is 90 days. */
  untilDays?: number;

  /** Unique ID */
  id: string;
  /** Event onChange */
  onChange: (date: Date, event: SyntheticEvent<Event>) => void;
  isValue: boolean;
  errorMessage: string;
  placeholder: string;
}

export const DayPicker = ({
  date,
  label,
  onChange,
  isValue,
  errorMessage,
  untilDays = 90,
  id,
  placeholder,
}: DatePickerProps) => {
  const todayDate = new Date();
  const containerStyles =
    "w-full pl-9 px-2 py-4 mt-1 border focus:outline-none focus:border-primary-900 focus:ring-1 focus:ring-primary-900 disabled:ring-gray-300 disabled:ring-1 hover:ring-primary-900 hover:ring-1 rounded-xl border-secondary-700 text-secondary-800 placeholder:text-secondary-300";
  const errorClassName = "flex items-center text-alert-600 text-sm mt-2";

  return (
    <div className="relative text-secondary-900">
      <label className="text-sm" htmlFor={id}>
        {label}
      </label>
      <Icon
        iconName="calendar"
        className="absolute z-10 pointer-events-none top-11 left-2 text-secondary-300"
      />
      <DatePicker
        id={id}
        className={containerStyles}
        dateFormat="dd/MM/yyyy"
        includeDateIntervals={[
          {
            start: subDays(todayDate, 1),
            end: addDays(todayDate, untilDays),
          },
        ]}
        locale="es"
        selected={date}
        onChange={onChange}
        placeholderText={placeholder}
      />
      {isValue ? null : (
        <div className={errorClassName}>
          <Icon iconName="informationCircle" />
          <span className="ml-2">{errorMessage}</span>
        </div>
      )}
    </div>
  );
};
