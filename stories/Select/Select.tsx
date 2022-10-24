import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Icon } from "../Icon/Icon";

export interface SelectValue {
  name: string;
  value: string;
  isSelected?: boolean;
  isDisabled?: boolean;
}
interface SelectProps {
  /**
   * Optional description of the select input
   */
  description?: string;
  /**
   * Optional error message of the select input. If entered, the message will be shown
   */
  errorMessage?: string;
  /**
   * Whether the input is disabled
   */
  isInputDisabled?: boolean;
  /**
   * Whether the label should be visible
   */
  isLabelVisible?: boolean;
  /**
   * Descriptive label of the select input
   */
  label: string;
  /**
   * Optional placeholder of the select input
   */
  placeholder?: string;
  /**
   * Selectable values
   */
  values: SelectValue[];

  timeZoneSelected: SelectValue | undefined;
  setTimeZoneSelected: React.Dispatch<
    React.SetStateAction<SelectValue | undefined>
  >;
  isValue: boolean;
}

const Select = ({
  description,
  errorMessage,
  isInputDisabled,
  isLabelVisible,
  label,
  placeholder,
  values,
  timeZoneSelected,
  setTimeZoneSelected,
  isValue,
}: SelectProps) => {
  const errorClassName = "flex items-center text-alert-600 text-sm mt-2";

  return (
    <Listbox
      disabled={isInputDisabled}
      onChange={setTimeZoneSelected}
      value={timeZoneSelected}
    >
      {({ open }) => (
        <div className="w-full space-y-2">
          <Listbox.Label
            className={`font-semibold ${isLabelVisible ? "" : "sr-only"}`}
          >
            {label}
          </Listbox.Label>
          {description && <div className="text-xs">{description}</div>}
          <div className="relative" aria-labelledby="select-message">
            <Listbox.Button
              className={`relative flex gap-1 px-2 items-center w-full h-12 text-left  bg-white  cursor-default rounded-xl sm:text-sm focus:outline-none focus-visible:ring-primary-900 focus-visible:ring-[1.5px] hover:ring-[1.5px] ring-1 ${
                open ? "ring-[1.5px] ring-primary-900" : "ring-secondary-500"
              }
              `}
            >
              <div className="truncate grow">
                {timeZoneSelected?.name || (
                  <span className="flex items-center gap-1 text-secondary-300">
                    <Icon className="text-[#ABADC6]" iconName="globeAltIcon" />
                    {placeholder}
                  </span>
                )}
              </div>
              <Icon
                className="text-[#ABADC6]"
                iconName={open ? "chevronUp" : "chevronDown"}
              />
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute w-full my-2 overflow-auto text-sm bg-white rounded-lg shadow-lg focus:outline-none ring-1 ring-black ring-opacity-5 z-10">
                {values.map((value, valueIdx) => (
                  <Listbox.Option
                    key={valueIdx}
                    className={({ active }: { active: boolean }) =>
                      `flex items-center px-3 cursor-default select-none hover:bg-secondary-50 ${
                        active ? "bg-secondary-50" : ""
                      }`
                    }
                    value={value}
                    disabled={value.isDisabled}
                  >
                    {({ selected }: { selected: boolean }) => (
                      <>
                        <span
                          className={`block py-4 truncate grow ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {value.name}
                        </span>

                        {selected ? <Icon iconName="check" /> : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
          {isValue ? null : (
            <div className={errorClassName}>
              <Icon iconName="informationCircle" />
              <span className="ml-2">{errorMessage}</span>
            </div>
          )}
        </div>
      )}
    </Listbox>
  );
};

export default Select;
