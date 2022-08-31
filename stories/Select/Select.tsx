import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

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
   * Optional error message of the select input
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
   * Optional placeholder of the select input
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
  const [selected, setSelected] = useState(values[0]);

  useEffect(() => {
    const defaultValue = values.find((value) => value.isSelected);
    if (defaultValue) {
      setSelected(defaultValue);
    }
  }, []);

  return (
    <div className="fixed top-16 w-72">
      <Listbox
        disabled={isInputDisabled}
        onChange={setSelected}
        value={selected}
      >
        {/* Creo que esto no resuelve ok el tema de que no se renderice si isLabelVisible
    es false, pero no encontré otra manera mejor de hacerlo. */}
        {isLabelVisible ? (
          <Listbox.Label>{label}</Listbox.Label>
        ) : (
          <Listbox.Label aria-label={label}></Listbox.Label>
        )}
        {description && <div>{description}</div>}
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">
              {/* Aquí se muestra siempre el placeholder (cuando hay) y no actualiza a los valores elegidos. :( */}
              {placeholder ?? selected.name}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {values.map((value, valueIdx) => (
                <Listbox.Option
                  key={valueIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={value}
                  disabled={value.isDisabled}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {value.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};

export default Select;
