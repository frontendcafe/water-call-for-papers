import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icons } from "./Icons";

export default {
  title: "Example/Icons", // Title for our storybook
  component: Icons, // Component to render
} as ComponentMeta<typeof Icons>;

const Template: ComponentStory<typeof Icons> = (args) => <Icons {...args} />;
// Columna 1
//👇 Each story then reuses that template
export const MenuAlt2Icon = Template.bind({});
//👇 We pass the props to the Primary story
MenuAlt2Icon.args = {
  iconName: "menu-alt-2",
  className: "h-3 w-4", //h-12 w-16
};

export const PlusCircle = Template.bind({});
PlusCircle.args = {
  iconName: "plus-circle",
  className: "h-4 w-4", //h-18 w-18
};

export const HomeIcon = Template.bind({});
HomeIcon.args = {
  iconName: "home-casa",
  className: "h-4 w-4", //h-18 w-18
};

export const ViewListIcon = Template.bind({});
ViewListIcon.args = {
  iconName: "view-list",
  className: "h-3 w-4", //h-12 w-16
};

export const CogIcon = Template.bind({});
CogIcon.args = {
  iconName: "cog-engranaje",
  className: "h-4 w-4", //h-18 w-18
};

export const LogoutIcon = Template.bind({});
LogoutIcon.args = {
  iconName: "logout-salir",
  className: "h-4 w-4", //h-16 w-18
};

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  iconName: "search-glass",
  className: "h-5 w-5", //h-19 w-19
};

export const FilterIcon = Template.bind({});
FilterIcon.args = {
  iconName: "filter-filtro",
  className: "h-5 w-5", //h-18.75 w-18.75
};

export const PlusSmIcon = Template.bind({});
PlusSmIcon.args = {
  iconName: "plus-sm",
  className: "h-3 w-3", //h-12 w-12
};

export const CalendarIcon = Template.bind({});
CalendarIcon.args = {
  iconName: "calendar-dias",
  className: "h-1.5 w-4", //h-6.4 w-16
};

export const DotsVerticalIcon = Template.bind({});
DotsVerticalIcon.args = {
  iconName: "dots-vertical", //No tiene circulo que envuelta a los puntos
  className: "h-4 w-4",
};

export const ShareIcon = Template.bind({});
ShareIcon.args = {
  iconName: "share-compartir",
  className: "h-3 w-2.5", //h-12.25 w-11.25
};

export const PencilAltIconç = Template.bind({});
PencilAltIconç.args = {
  iconName: "pen-detalle",
  className: "h-2.5 w-2.5", //h-10 w-10
};

export const TrashIcon = Template.bind({});
TrashIcon.args = {
  iconName: "Trash-basura", //No tiene circulo que envuelta a los puntos
  className: "h-3 w-3", //h-12.5 w-12
};

export const PhotographIcon = Template.bind({});
PhotographIcon.args = {
  iconName: "photo-grafia",
  className: "h-4 w-4", //h-18 w-18
};

export const ChevronDownIcon = Template.bind({});
ChevronDownIcon.args = {
  iconName: "cheveron-down",
  className: "h-2 w-3.5", //h-7 w-14
};

export const ClockIcon = Template.bind({});
ClockIcon.args = {
  iconName: "clock-reloj",
  className: "h-3 w-3", //h-13.3 w-13.3
};

export const ArrowRight = Template.bind({});
ArrowRight.args = {
  iconName: "arrow-right",
  className: "h-4 w-4",
};

export const BellIcon = Template.bind({});
BellIcon.args = {
  iconName: "bell-campana",
  className: "h-4 w-4",
};

export const ChevronLeftIcon = Template.bind({});
ChevronLeftIcon.args = {
  iconName: "cheveron-left",
  className: "h-1.5 w-2",
};

export const ChevronRightIcon = Template.bind({});
ChevronRightIcon.args = {
  iconName: "cheveron-right",
  className: "h-2 w-3.5",
};

export const InformationCircleIcon = Template.bind({});
InformationCircleIcon.args = {
  iconName: "information-circle",
  className: "h-5 w-5",
};

export const ExclamationIcon = Template.bind({});
ExclamationIcon.args = {
  iconName: "exclamation-circle",
  className: "h-5 w-5", //"h-12 w-12"
};
