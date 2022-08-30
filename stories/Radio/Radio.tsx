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
          <RadioGroup.Label className="text-xl">{label}</RadioGroup.Label>
          <div className="space-y-2">
            {options.map((option) => (
              <RadioGroup.Option
                key={option.title}
                value={option.title}
                disabled={option.isDisabled}
                //Use Figma's actualized styles keeping in mind HeadlessUI
                className={({ active, checked }) =>
                  `${active ? "" : ""}
                  ${checked ? "text-black" : "bg-white"}
                    relative flex cursor-pointer rounded-lg px-5 py-4 `
                }
              >
                {({ checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex text-sm">
                          {checked && (
                            <div className="shrink-0 text-white">
                              <CheckIcon className="h-6 w-6 px-5 py-4" />{" "}
                              {/*Use Icons component*/}
                            </div>
                          )}
                          {/*Use Figma's actualized styles keeping in mind HeadlessUI*/}
                          <RadioGroup.Label
                            as="p"
                            className={`font-family: 'Work Sans' font-style: normal ${
                              checked ? "text-black" : "text-black"
                            }`}
                          >
                            {option.title}
                          </RadioGroup.Label>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
};

function CheckIcon({ className }: { className: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default RadioButtons;
