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
            <Disclosure.Button className="flex w-full justify-between items-center py-2 rounded-md bg-primary-50 text-primary-700 text-left font-semibold hover:bg-primary-100 focus:border-2 focus:border-primary-700 focus:bg-primary-200 focus:text-primary-800">
              <span className="ml-3">{title}</span>
              <span className="mr-3">
                <Icon
                  iconName="chevronDown"
                  className={`${
                    open ? " rotate-180 transform" : ""
                  } w-5 h-5 text-primary-700 focus:text-primary-800`}
                />
              </span>
            </Disclosure.Button>
            {!open && (
              <Disclosure.Panel className="flex flex-col space-y-4 pt-2" static>
                {children}
              </Disclosure.Panel>
            )}
          </>
        )}
      </Disclosure>
    </div>
  );
};
