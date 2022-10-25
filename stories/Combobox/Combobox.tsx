import { useState } from "react";
import { Combobox } from "@headlessui/react";
import { TagList } from "../TagList/TagList";

export interface ComboboxComponentInterface {
  valuesSelected: Set<string>;
  onChange: (value: Set<string>) => void;
  placeholder?: string;
  options?: { id: string; label: string }[];
  actionLabel?: React.ReactNode;
  actionHandler?: (value: string) => void;
  noOptionsLabel?: string;
  id: string;
  label: string;
}

const ComboboxSeletedList = ({
  valuesSelected,
  handlerDeselectValue,
}: {
  valuesSelected: Set<string>;
  handlerDeselectValue: (value: string, type: "deselect") => void;
}) => {
  return (
    <div
      className={`flex flex-row flex-wrap gap-2 p-2 pt-4 my-1 rounded bg-white w-full`}
    >
      <TagList
        tags={Array.from(valuesSelected?.values())?.map((value) => ({
          label: value,
          size: "sm",
          status: "comboLabels",
          onDelete: () => handlerDeselectValue(value, "deselect"),
        }))}
      />
    </div>
  );
};

const ComboboxComponent = ({
  placeholder,
  valuesSelected,
  onChange,
  options,
  actionLabel,
  actionHandler,
  noOptionsLabel,
  id,
  label,
}: ComboboxComponentInterface) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const comboboxOnChangeHandler = (
    value: string,
    type: "select" | "deselect" = "select"
  ) => {
    if (value === actionLabel) {
      actionHandler?.(searchValue);
    } else {
      const newValuesSelected = new Set(valuesSelected);
      if (type === "deselect") {
        newValuesSelected.delete(value);
      } else {
        newValuesSelected.add(value);
      }
      onChange?.(newValuesSelected);
    }
    setSearchValue("");
  };

  const filteredOptions =
    searchValue === ""
      ? options
      : options?.filter((option) => {
          return option.label.toLowerCase().includes(searchValue.toLowerCase());
        });

  return (
    <div className="w-full">
      <label className="font-semibold text-secondary-900" htmlFor={id}>
        {label}
      </label>
      <Combobox value={searchValue} onChange={comboboxOnChangeHandler}>
        <div className="flex flex-col">
          <Combobox.Input
            onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
              setSearchValue(event.target.value)
            }
            placeholder={placeholder}
            className={`transition-[colors,_drop_shadow] duration-100 px-2 py-4 mt-1 border focus:outline-none focus:border-primary-900 focus:ring-1 focus:ring-primary-900 disabled:ring-gray-300 disabled:ring-1 hover:ring-primary-900 hover:ring-1 rounded-xl border-secondary-700 text-secondary-800 placeholder:text-secondary-300`}
          />
          {valuesSelected?.size > 0 && (
            <ComboboxSeletedList
              valuesSelected={valuesSelected}
              handlerDeselectValue={comboboxOnChangeHandler}
            />
          )}
          <Combobox.Options
            className={`relative flex flex-col pt-2 my-1 rounded bg-white w-full`}
          >
            {filteredOptions?.map((option) => (
              <Combobox.Option
                key={option.label}
                value={option.label}
                className={
                  "text-black text-sm font-normal px-2 py-4 cursor-pointer hover:bg-black hover:bg-opacity-5"
                }
              >
                {option.label}
              </Combobox.Option>
            ))}
            {filteredOptions?.length === 0 && noOptionsLabel && (
              <>
                <Combobox.Option
                  value={""}
                  disabled
                  className={"text-secondary-600 mb-2 px-2 py-2"}
                >
                  {noOptionsLabel}
                </Combobox.Option>
                {actionLabel && actionHandler && (
                  <Combobox.Option
                    value={actionLabel}
                    className="px-2 py-4 hover:bg-black hover:bg-opacity-5"
                  >
                    {actionLabel}
                  </Combobox.Option>
                )}
              </>
            )}
          </Combobox.Options>
        </div>
      </Combobox>
    </div>
  );
};

export default ComboboxComponent;
