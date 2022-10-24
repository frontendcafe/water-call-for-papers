import React from "react";
import { Disclosure } from "@headlessui/react";
import { Icon } from "../Icon/Icon";

interface Accordion {
  /**
   * Accordion Name.
   */
  title: String;
  /**
   * Content to accordion (Input, Textarea, etc)
   */
  children?: React.ReactNode;
}

export const AccordionDefault = ({ title, children }: Accordion) => {
  return (
    <div className="flex flex-col gap-4">
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button className="transition-[colors,_drop_shadow] duration-100 flex items-center justify-between w-full p-4 font-semibold text-left rounded-xl bg-primary-50 text-primary-700 hover:bg-primary-100 focus:ring-2 ring-primary-700 focus:bg-primary-200 focus:text-primary-800">
              {title}
              <Icon
                iconName="chevronDown"
                className={`transition-transform ${open ? "rotate-180" : ""}`}
              />
            </Disclosure.Button>
            {!open && (
              <Disclosure.Panel className="flex flex-col pt-2 space-y-6" static>
                {children}
              </Disclosure.Panel>
            )}
          </>
        )}
      </Disclosure>
    </div>
  );
};
