import es from "date-fns/locale/es";
import { SyntheticEvent } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import { Icon } from "../Icon/Icon";
import subDays from "date-fns/subDays";
import addDays from "date-fns/addDays";

registerLocale("es", es);

interface DatePickerProps {
  /** Set the actual date as selected by default. */
  date: Date;

  /** The string */
  label: string;

  /** Specify maximum of days possible to the future to pick a date. Example, if today is 13/10/22, set 'untilDays' for X amount of days to the future. Default is 90 days. */
  untilDays?: number;

  /** Event onChange */
  onChange: (date: Date, event: SyntheticEvent<Event>) => void;
}

export const DayPicker = ({
  date,
  label,
  untilDays = 90,
  onChange,
}: DatePickerProps) => {
  const todayDate = new Date();

  const containerStyles =
    "bg-white flex items-center gap-2 px-2 py-2 mt-1 text-sm border-2 rounded-xl font-normal focus:border-2 focus:border-gray-400 disabled:border-gray-200";

  return (
    <div className="flex flex-col">
      <label className="text-sm font-normal text-gray-800" htmlFor="datepicker">
        {label}
      </label>
      <div className={containerStyles}>
        <Icon iconName="calendar" size="medium" />
        <DatePicker
          id="datepicker"
          className="w-full outline-none"
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
        />
      </div>
    </div>
  );
};
