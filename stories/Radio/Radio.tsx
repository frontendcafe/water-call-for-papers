import { RadioGroup } from "@headlessui/react";
import { InputHTMLAttributes } from "react";

interface RadioGroup extends InputHTMLAttributes<HTMLInputElement> {
  onSelectedChange: (value: string) => void;
  label: string;
  options: { title: string; isDisabled: boolean }[];
  value: string;
  defaultValue: string;
}

const RadioButtons = ({
  label,
  options,
  onSelectedChange,
  value,
  defaultValue,
}: RadioGroup) => {
  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup value={value ?? defaultValue} onChange={onSelectedChange}>
          <RadioGroup.Label className="text-base font-semibold">
            {label}
          </RadioGroup.Label>
          <div className="">
            {options.map((option) => (
              <RadioGroup.Option
                key={option.title}
                value={option.title}
                disabled={option.isDisabled}
              >
                {({ checked }) => (
                  <div className="relative flex items-start gap-x-2 py-3">
                    <div className="flex h-5 items-center">
                      <input
                        id={option.title}
                        aria-describedby={`${option.title}-description`}
                        name="plan"
                        type="radio"
                        checked={checked}
                        aria-checked={checked}
                        className="form-check-input appearance-none rounded-full h-4 w-4 border border-gray-600 bg-white checked:border-primary-600 checked:border-4 focus:outline-none transition duration-200 align-top float-left cursor-pointer"
                      />
                    </div>
                    <div className="text-sm">
                      <RadioGroup.Label
                        htmlFor={option.title}
                        className="text-gray-700"
                      >
                        {option.title}
                      </RadioGroup.Label>
                    </div>
                  </div>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

export default RadioButtons;
