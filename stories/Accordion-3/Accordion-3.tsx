import { Disclosure } from "@headlessui/react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { TextArea } from "../TextArea/TextArea";

interface AccordionTresProps {
  title: String;
}

export const AccordionTres = ({ title }: AccordionTresProps) => {
  return (
    // TODO Remove bg-white
    <Disclosure as="div" className="flex flex-col gap-4 bg-white">
      {({ open }) => (
        <>
          <Disclosure.Button as={Button} variant="disclosure" size="stretched">
            {title}
            <Icon
              iconName="chevronDown"
              className={`${
                open ? " rotate-180 transform" : ""
              } w-5 h-5 text-primary-700 focus:text-primary-800`}
              aria-hidden
            />
          </Disclosure.Button>
          <Disclosure.Panel>
            <TextArea
              label="Requisitos de los postulantes (*)"
              isLabelVisible
              maxLength={500}
              placeholder="Indique qué requisitos deben cumplir las personas interesadas para ser admitidas."
              required
              idValue="textArea"
            />
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
