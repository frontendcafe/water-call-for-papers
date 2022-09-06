import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from "./Icon";

export default {
  title: "Example/Icon", // Title for our story
  component: Icon, // Component to render
  args: {
    className: "text-secondary-400",
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;
//👇 Each story then reuses that template
export const EnvelopeIcon = Template.bind({});
//👇 We pass the props to the Primary story
EnvelopeIcon.args = {
  iconName: "mail",
  size: "small", //h-11.43 w-14.29
};

export const BellIcon = Template.bind({});
BellIcon.args = {
  iconName: "bell",
  size: "small", //h-11.43 w-14.29
};

export const HomeIcon = Template.bind({});
HomeIcon.args = {
  iconName: "home",
  size: "large", //h-18 w-18
};

export const ShieldExclamationIcon = Template.bind({});
ShieldExclamationIcon.args = {
  iconName: "shield",
  size: "large", //h-18 w-18
};

export const CogIcon = Template.bind({});
CogIcon.args = {
  iconName: "cog",
  size: "large", //h-18 w-18
};

export const CheckIcon = Template.bind({});
CheckIcon.args = {
  iconName: "check",
  size: "large", //h-19 w-19
};

export const PencilSquareIcon = Template.bind({});
PencilSquareIcon.args = {
  iconName: "detail",
  size: "medium", //h-10 w-10
};

export const PencilIcon = Template.bind({});
PencilIcon.args = {
  iconName: "pencil",
  size: "medium", //h-10 w-10
};

export const EyeIcon = Template.bind({});
EyeIcon.args = {
  iconName: "eye",
  size: "medium", //h-10 w-10
};

export const BookmarkIcon = Template.bind({});
BookmarkIcon.args = {
  iconName: "book",
  size: "medium", //h-10 w-10
};

export const MapPinIcon = Template.bind({});
MapPinIcon.args = {
  iconName: "mapPin",
  size: "medium", //h-10 w-10
};

export const UserIcon = Template.bind({});
UserIcon.args = {
  iconName: "user",
  size: "medium", //h-10 w-10
};

export const UsersIcon = Template.bind({});
UsersIcon.args = {
  iconName: "users",
  size: "medium", //h-10 w-10
};

export const UserGroupIcon = Template.bind({});
UserGroupIcon.args = {
  iconName: "userGroup",
  size: "medium", //h-10 w-10
};

export const ClockIcon = Template.bind({});
ClockIcon.args = {
  iconName: "clock",
  size: "large", //h-13.33 w-13.33
};

export const DocumentIcon = Template.bind({});
DocumentIcon.args = {
  iconName: "document",
  size: "medium", //h-10 w-10
};

export const TagIcon = Template.bind({});
TagIcon.args = {
  iconName: "tag",
  size: "medium", //h-10 w-10
};

export const XMarkIcon = Template.bind({});
XMarkIcon.args = {
  iconName: "xMark",
  size: "medium", //h-10 w-10
};

export const PlusIcon = Template.bind({});
PlusIcon.args = {
  iconName: "plus",
  size: "medium", //h-12 w-12
};

export const CalendarIcon = Template.bind({});
CalendarIcon.args = {
  iconName: "calendar",
  size: "medium", //h-6.4 w-16
};

export const Bars3CenterLeftIcon = Template.bind({});
Bars3CenterLeftIcon.args = {
  iconName: "barsCenterLeft",
  size: "large", //h-11.43        w-14.29
};

export const Bars3BottomLeftIcon = Template.bind({});
Bars3BottomLeftIcon.args = {
  iconName: "barsBottomLeft",
  size: "large", //h-11.43        w-14.29
};

export const Bars3BottomRightIcon = Template.bind({});
Bars3BottomRightIcon.args = {
  iconName: "barsBottomRight",
  size: "large", //h-11.43        w-14.29
};

export const ShareIcon = Template.bind({});
ShareIcon.args = {
  iconName: "share",
  size: "medium", //h-12.25 w-11.25
};

export const ArrowRightCircleIcon = Template.bind({});
ArrowRightCircleIcon.args = {
  iconName: "arrowRightC",
  size: "medium", //h-10 w-10
};

export const UserCircleIcon = Template.bind({});
UserCircleIcon.args = {
  iconName: "userCircle",
  size: "large", //h-18 w-18 large
};

export const DocumentArrowDownIcon = Template.bind({});
DocumentArrowDownIcon.args = {
  iconName: "documentArrowDown",
  size: "large", //h-18 w-18 large
};

export const DocumentPlusIcon = Template.bind({});
DocumentPlusIcon.args = {
  iconName: "documentPlus",
  size: "large", //h-18 w-18 large
};

export const DocumentMinusIcon = Template.bind({});
DocumentMinusIcon.args = {
  iconName: "documentMinus",
  size: "large", //h-18 w-18 large
};

export const LinkIcon = Template.bind({});
LinkIcon.args = {
  iconName: "link",
  size: "large", //h-18 w-18 large
};

export const QuestionMarkCircleIcon = Template.bind({});
QuestionMarkCircleIcon.args = {
  iconName: "questionMark",
  size: "large", //h-18 w-18 large
};

export const ExclamationTriangleIcon = Template.bind({});
ExclamationTriangleIcon.args = {
  iconName: "exclamationTriangule",
  size: "large", //h-18 w-18 large
};

export const Square2StackIcon = Template.bind({});
Square2StackIcon.args = {
  iconName: "squareTwoStack",
  size: "large", //h-18 w-18 large
};

export const ArrowLeftIcon = Template.bind({});
ArrowLeftIcon.args = {
  iconName: "arrowLeft",
  size: "medium", //h-7 w-14
};

export const MinusCircleIcon = Template.bind({});
MinusCircleIcon.args = {
  iconName: "minusCircule",
  size: "medium", //h-7 w-14
};

export const ChevronDownIcon = Template.bind({});
ChevronDownIcon.args = {
  iconName: "chevronDown",
  size: "medium", //h-7 w-14
};

export const ArrowLeftCircleIcon = Template.bind({});
ArrowLeftCircleIcon.args = {
  iconName: "arrowLeftCircule",
  size: "medium", //h-7 w-14
};

export const ChevronUpIcon = Template.bind({});
ChevronUpIcon.args = {
  iconName: "chevronUp",
  size: "large", //h-7 w-14
};

export const AdjustmentsVerticalIcon = Template.bind({});
AdjustmentsVerticalIcon.args = {
  iconName: "adjustment",
  size: "large", //h-11.43        w-14.29
};

export const InformationCircleIcon = Template.bind({});
InformationCircleIcon.args = {
  iconName: "informationCircle",
  size: "large", //h-11.43  w-14.29
};

export const ArrowUpIcon = Template.bind({});
ArrowUpIcon.args = {
  iconName: "arrowUp",
  size: "large", //h-11.43        w-14.29
};

export const DocumentDuplicateIcon = Template.bind({});
DocumentDuplicateIcon.args = {
  iconName: "documentDuplicate",
  size: "large", //h-11.43        w-14.29
};

export const ArrowDownIcon = Template.bind({});
ArrowDownIcon.args = {
  iconName: "arrowDown",
  size: "large", //h-11.43        w-14.29
};

export const PlusCircleIcon = Template.bind({});
PlusCircleIcon.args = {
  iconName: "plusCircle",
  size: "large", //h-18 w-18 large
};

export const ArrowRightOnRectangleIcon = Template.bind({});
ArrowRightOnRectangleIcon.args = {
  iconName: "logout",
  size: "large", //h-18 w-18 large
};

export const PaperClipIcon = Template.bind({});
PaperClipIcon.args = {
  iconName: "paperClip",
  size: "large", //h-18 w-18 large
};

export const TrashIcon = Template.bind({});
TrashIcon.args = {
  iconName: "trash",
  size: "medium", //h-10 w-10
};

export const ChevronUpDownIcon = Template.bind({});
ChevronUpDownIcon.args = {
  iconName: "chevronUpDown",
  size: "medium", //h-10 w-10
};

export const EllipsisHorizontalIcon = Template.bind({});
EllipsisHorizontalIcon.args = {
  iconName: "dotsHorizontal",
  size: "large", //h-24 w-24
};

export const ArrowRightIcon = Template.bind({});
ArrowRightIcon.args = {
  iconName: "arrowRight",
  size: "medium", //h-7 w-14
};

export const ExclamationCircleIcon = Template.bind({});
ExclamationCircleIcon.args = {
  iconName: "exclamationCircle",
  size: "small", //h-13.33 w-13.33
};

export const ChevronRightIcon = Template.bind({});
ChevronRightIcon.args = {
  iconName: "chevronRight",
  size: "large", //h-11.43        w-14.29
};

export const MagnifyingGlassIcon = Template.bind({});
MagnifyingGlassIcon.args = {
  iconName: "glass",
  size: "large", //h-11.43        w-14.29
};

export const CheckCircleIcon = Template.bind({});
CheckCircleIcon.args = {
  iconName: "checkCircle",
  size: "large", //h-19 w-19
};

export const ChevronLeftIcon = Template.bind({});
ChevronLeftIcon.args = {
  iconName: "chevronLeft",
  size: "large", //h-11.43        w-14.29
};

export const EllipsisVerticalIcon = Template.bind({});
EllipsisVerticalIcon.args = {
  iconName: "dotsVertical",
  size: "large", //h-24 w-24
};
