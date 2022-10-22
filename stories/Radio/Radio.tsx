import { RadioGroup } from "@headlessui/react";

export interface RadioOption {
  label: string;
  value: string;
}
export type SelectedOption = string | RadioOption;
export interface RadioGroup {
  label: string;
  onSelectedChange: (value: SelectedOption) => void;
  options: RadioOption[];
  value: SelectedOption;
}

export const RadioButtons = ({
  label,
  options,
  onSelectedChange,
  value,
}: RadioGroup) => {
  return (
    <RadioGroup value={value} onChange={onSelectedChange}>
      <RadioGroup.Label className="font-semibold">{label}</RadioGroup.Label>
      <div className="my-2 space-y-2">
        {options.map((option) => (
          <RadioGroup.Option
            className="flex items-center gap-2 mx-1 outline-offset-2"
            key={option.value}
            value={option}
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
                  {option.label}
                </RadioGroup.Label>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
};
