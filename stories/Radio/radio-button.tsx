import { useState } from "react";
import { RadioGroup } from "@headlessui/react";

interface RadioGroup {
  onChange: (value: string) => void;
  label: string;
  options: { title: string; isDisabled: boolean }[];
}

export const RadioButtons = ({ label, options, onChange }: RadioGroup) => {
  const [selected, setSelected] = useState(options?.[0].title);

  return (
    <div className="w-full px-4 py-16">
      <div className="mx-auto w-full max-w-md">
        <RadioGroup
          value={selected}
          onChange={(value) => {
            setSelected(value);
            onChange(value);
          }}
        >
          <RadioGroup.Label className="text-xl">{label}</RadioGroup.Label>
          <div className="space-y-2">
            {options.map((option) => (
              <RadioGroup.Option
                key={option.title}
                value={option.title}
                disabled={option.isDisabled}
                //The styles aren't the final ones
                className={({ active, checked }) =>
                  `${
                    active
                      ? "ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300"
                      : ""
                  }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative flex cursor-pointer rounded-lg px-5 py-4 shadow-md focus:outline-none`
                }
              >
                {({ checked }) => (
                  <>
                    <div className="flex w-full items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex text-sm">
                          {checked && (
                            <div className="shrink-0 text-white">
                              <CheckIcon className="h-6 w-6" />
                            </div>
                          )}
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${
                              checked ? "text-white" : "text-gray-900"
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
