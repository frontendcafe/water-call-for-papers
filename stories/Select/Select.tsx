import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Icon } from "../Icon/Icon";

interface SelectValue {
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
}

const Select = ({
  description,
  errorMessage,
  isInputDisabled,
  isLabelVisible,
  label,
  placeholder,
  values,
}: SelectProps) => {
  const defaultValue = values.find((value) => value.isSelected);
  const [selected, setSelected] = useState(defaultValue);

  return (
    <Listbox disabled={isInputDisabled} onChange={setSelected} value={selected}>
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
              className={`relative flex gap-1 items-center w-full p-4 text-left transition-shadow bg-white shadow-md cursor-default rounded-xl sm:text-sm focus:outline-none focus-visible:ring-primary-900 focus-visible:ring-[1.5px] hover:ring-[1.5px] ring-1 ${
                open ? "ring-[1.5px] ring-primary-900" : "ring-secondary-500"
              }
              `}
            >
              <div className="truncate grow">
                {selected?.name || (
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
              <Listbox.Options className="absolute w-full my-2 overflow-auto text-sm bg-white rounded-lg shadow-lg focus:outline-none ring-1 ring-black ring-opacity-5">
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
          {errorMessage && (
            <div
              className="flex items-center gap-1 px-3 text-xs text-alert-600"
              id="select-message"
            >
              <Icon iconName="informationCircle" size="small" /> {errorMessage}
            </div>
          )}
        </div>
      )}
    </Listbox>
  );
};

export default Select;
