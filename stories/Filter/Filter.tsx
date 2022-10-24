import { Popover, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { RadioButtons, RadioGroup } from "../Radio/Radio";
import { TagList, TagListProps } from "../TagList/TagList";

interface FilterProps {
  btnLabel: string;
  children: ReactNode;
  title: string;
}

export const Filter = ({ btnLabel, children, title }: FilterProps) => {
  const clear = () => {};

  return (
    <Popover className="relative">
      <Popover.Button as="span">
        <Button variant="transparent">
          <Icon iconName="adjustment" />
          {btnLabel}
          <Icon iconName="arrowDown" />
        </Button>
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Popover.Panel className="fixed inset-0 z-50 flex flex-col p-4 bg-white ring-1 ring-black ring-opacity-5 md:absolute md:z-0 md:shadow-lg md:inset-auto md:rounded-xl md:min-w-max md:max-h-96">
          {({ close }) => (
            <>
              <div className="flex items-center justify-between md:hidden">
                <h1 className="text-xl font-semibold">{title}</h1>
                <Button icon variant="transparent" onClick={() => close()}>
                  <Icon iconName="xMark" />
                </Button>
              </div>
              <div className="space-y-4 overflow-y-auto grow">{children}</div>
              <div className="flex gap-4 md:hidden">
                <Button size="stretched" onClick={clear} variant="transparent">
                  Limpiar filtros
                </Button>
                <Button size="stretched" onClick={() => close()}>
                  Aplicar (n)
                </Button>
              </div>
            </>
          )}
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

interface FilterRadialProps extends RadioGroup {}
const FilterRadial = ({ ...props }: FilterRadialProps) => {
  return <RadioButtons {...props} />;
};

interface FilterTagsProps extends TagListProps {
  title: string;
}
// TODO: Implement "topics" for events list
const FilterTags = ({ title, ...props }: FilterTagsProps) => {
  return (
    <div>
      <h3 className="mb-2 font-semibold">{title}</h3>
      <TagList {...props} />
    </div>
  );
};

Filter.Radial = FilterRadial;
Filter.Tags = FilterTags;
