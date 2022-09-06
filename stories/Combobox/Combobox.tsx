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
}

const ComboboxSeletedList = ({
  valuesSelected,
}: Pick<ComboboxComponentInterface, "valuesSelected">) => {
  return (
    <div
      className={`flex flex-row flex-wrap gap-2 p-2 pt-4 rounded bg-white w-full`}
    >
      <TagList
        tags={Array.from(valuesSelected?.values())?.map((value) => ({
          label: value,
          size: "sm",
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
}: ComboboxComponentInterface) => {
  const [searchValue, setSearchValue] = useState<string>("");

  const comboboxOnChangeHandler = (value: string) => {
    if (value === actionLabel) {
      actionHandler?.(searchValue);
    } else {
      const newValuesSelected = new Set(valuesSelected);
      newValuesSelected.add(value);
      onChange?.(newValuesSelected);
    }
  };

  const filteredOptions =
    searchValue === ""
      ? options
      : options?.filter((option) => {
          return option.label.toLowerCase().includes(searchValue.toLowerCase());
        });

  return (
    <div className="w-full">
      <Combobox value={searchValue} onChange={comboboxOnChangeHandler}>
        <Combobox.Input
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setSearchValue(event.target.value)
          }
          placeholder={placeholder}
          className={`p-2 mt-1 text-sm border-2 rounded-md focus:border-2 focus:border-gray-400 w-full`}
        />
        {valuesSelected?.size > 0 && (
          <ComboboxSeletedList valuesSelected={valuesSelected} />
        )}
        <Combobox.Options
          className={`relative flex flex-col pt-2 rounded bg-white w-full`}
        >
          {filteredOptions?.map((option) => (
            <Combobox.Option
              key={option.id}
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
      </Combobox>
    </div>
  );
};

export default ComboboxComponent;
