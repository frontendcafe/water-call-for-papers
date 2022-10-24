import { RadioGroup } from "@headlessui/react";

export interface RadioOption {
  title: string;
  value: string;
  isDisabled?: boolean;
}
export type SelectedOption = string | RadioOption;
export interface RadioGroup {
  label: string;
  onSelectedChange: (value: SelectedOption) => void;
  options: RadioOption[];
  value: SelectedOption;
  defaultValue: string;
}

export const RadioButtons = ({
  label,
  options,
  onSelectedChange,
  value,
  defaultValue,
}: RadioGroup) => {
  return (
    <RadioGroup value={value ?? defaultValue} onChange={onSelectedChange}>
      <RadioGroup.Label className="font-semibold">{label}</RadioGroup.Label>
      <div className="my-2 space-y-2">
        {options.map((option) => (
          <RadioGroup.Option
            className="flex items-center gap-2 mx-1 outline-offset-2"
            key={option.value}
            value={option}
            disabled={Boolean(option.isDisabled)}
          >
            {({ checked }) => (
              <>
                <span
                  className={`w-5 h-5 transition-[border,_color] rounded-full cursor-pointer hover:border-primary-500 ${
                    checked
                      ? "border-[5px] border-primary-600"
                      : "border-2 border-secondary-600"
                  }`}
                ></span>
                <RadioGroup.Label className="text-gray-700">
                  {option.title}
                </RadioGroup.Label>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};
