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
  iconName: "menu-icon",
  theme: "light",
  size: "medium",
};

export const PlusCircle = Template.bind({});
PlusCircle.args = {
  iconName: "plus-circle",
  theme: "dark",
  size: "large", //h-18 w-18 large
};

export const HomeIcon = Template.bind({});
HomeIcon.args = {
  iconName: "home-casa",
  theme: "neutral",
  size: "large", //h-18 w-18
};

export const ViewListIcon = Template.bind({});
ViewListIcon.args = {
  iconName: "view-list",
  theme: "neutral",
  size: "medium", //h-12 w-16
};

export const CogIcon = Template.bind({});
CogIcon.args = {
  iconName: "cog-engranaje",
  theme: "neutral",
  size: "large", //h-18 w-18
};

export const LogoutIcon = Template.bind({});
LogoutIcon.args = {
  iconName: "Logout-salir",
  theme: "neutral",
  size: "large", //h-18 w-18
};

export const SearchIcon = Template.bind({});
SearchIcon.args = {
  iconName: "search-glass",
  theme: "neutral",
  size: "large", //h-19 w-19
};

export const FilterIcon = Template.bind({});
FilterIcon.args = {
  iconName: "filter-filtro",
  theme: "neutral",
  size: "large", //h-19 w-19
};

export const PlusSmIcon = Template.bind({});
PlusSmIcon.args = {
  iconName: "plus-sm",
  theme: "dark",
  size: "medium", //h-12 w-12
};

export const CalendarIcon = Template.bind({});
CalendarIcon.args = {
  iconName: "calendar-dias",
  theme: "neutral",
  size: "medium", //h-6.4 w-16
};

export const ShareIcon = Template.bind({});
ShareIcon.args = {
  iconName: "share-compartir",
  theme: "neutral",
  size: "medium", //h-12.25 w-11.25
};

export const PencilAltIcon = Template.bind({});
PencilAltIcon.args = {
  iconName: "pen-detalle",
  theme: "neutral",
  size: "medium", //h-10 w-10
};

export const TrashIcon = Template.bind({});
TrashIcon.args = {
  iconName: "trash-basura",
  theme: "neutral",
  size: "medium", //h-10 w-10
};

export const DotsVerticalcon = Template.bind({});
DotsVerticalcon.args = {
  iconName: "dots-vertical",
  theme: "neutral",
  size: "large", //h-24 w-24
};

export const PhotographIcon = Template.bind({});
PhotographIcon.args = {
  iconName: "photo-grafia",
  theme: "neutral",
  size: "large", //h-18 w-18
};

export const ChevronDownIcon = Template.bind({});
ChevronDownIcon.args = {
  iconName: "chevron-down",
  theme: "dark",
  size: "large", //h-7 w-14
};

export const ClockIcon = Template.bind({});
ClockIcon.args = {
  iconName: "clock-reloj",
  theme: "neutral",
  size: "large", //h-13.33 w-13.33
};

export const ExclamationCircleIcon = Template.bind({});
ExclamationCircleIcon.args = {
  iconName: "exclamation-circle",
  theme: "neutral",
  size: "small", //h-13.33 w-13.33
};

export const ArrowRightIcon = Template.bind({});
ArrowRightIcon.args = {
  iconName: "arrow-right",
  theme: "dark",
  size: "medium", //h-7 w-14
};

export const ArrowLeftIcon = Template.bind({});
ArrowLeftIcon.args = {
  iconName: "arrow-left",
  theme: "neutral",
  size: "medium", //h-7 w-14
};

export const MailIcon = Template.bind({});
MailIcon.args = {
  iconName: "mail-correo",
  theme: "light",
  size: "small", //h-11.43        w-14.29
};

export const BellIcon = Template.bind({});
BellIcon.args = {
  iconName: "bell-campana",
  theme: "light",
  size: "small", //h-11.43        w-14.29
};

export const InformationCircleIcon = Template.bind({});
InformationCircleIcon.args = {
  iconName: "information-circle",
  theme: "dark",
  size: "large", //h-11.43        w-14.29
};

export const ChevronLeftIcon = Template.bind({});
ChevronLeftIcon.args = {
  iconName: "cheveron-left",
  theme: "dark",
  size: "large", //h-11.43        w-14.29
};

export const ChevronRightIcon = Template.bind({});
ChevronRightIcon.args = {
  iconName: "cheveron-right",
  theme: "dark",
  size: "large", //h-11.43        w-14.29
};

export const AdjustmentsIcon = Template.bind({});
AdjustmentsIcon.args = {
  iconName: "adjustment",
  theme: "dark",
  size: "large", //h-11.43        w-14.29
};

export const MenuAlt3Icon = Template.bind({});
MenuAlt3Icon.args = {
  iconName: "bar",
  theme: "dark",
  size: "large", //h-11.43        w-14.29
};
