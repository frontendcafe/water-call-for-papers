import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Icon } from "./Icon";

export default {
  title: "Components/Icon",
  component: Icon,
  args: {
    className: "text-secondary-400",
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;
export const EnvelopeIcon = Template.bind({});
EnvelopeIcon.args = {
  iconName: "mail",
  size: "small",
};

export const BellIcon = Template.bind({});
BellIcon.args = {
  iconName: "bell",
  size: "small",
};

export const HomeIcon = Template.bind({});
HomeIcon.args = {
  iconName: "home",
  size: "large",
};

export const ShieldExclamationIcon = Template.bind({});
ShieldExclamationIcon.args = {
  iconName: "shield",
  size: "large",
};

export const CogIcon = Template.bind({});
CogIcon.args = {
  iconName: "cog",
  size: "large",
};

export const CheckIcon = Template.bind({});
CheckIcon.args = {
  iconName: "check",
  size: "large",
};

export const PencilSquareIcon = Template.bind({});
PencilSquareIcon.args = {
  iconName: "detail",
  size: "medium",
};

export const PencilIcon = Template.bind({});
PencilIcon.args = {
  iconName: "pencil",
  size: "medium",
};

export const EyeIcon = Template.bind({});
EyeIcon.args = {
  iconName: "eye",
  size: "medium",
};

export const BookmarkIcon = Template.bind({});
BookmarkIcon.args = {
  iconName: "book",
  size: "medium",
};

export const MapPinIcon = Template.bind({});
MapPinIcon.args = {
  iconName: "mapPin",
  size: "medium",
};

export const UserIcon = Template.bind({});
UserIcon.args = {
  iconName: "user",
  size: "medium",
};

export const UsersIcon = Template.bind({});
UsersIcon.args = {
  iconName: "users",
  size: "medium",
};

export const UserGroupIcon = Template.bind({});
UserGroupIcon.args = {
  iconName: "userGroup",
  size: "medium",
};

export const ClockIcon = Template.bind({});
ClockIcon.args = {
  iconName: "clock",
  size: "large",
};

export const DocumentIcon = Template.bind({});
DocumentIcon.args = {
  iconName: "document",
  size: "medium",
};

export const TagIcon = Template.bind({});
TagIcon.args = {
  iconName: "tag",
  size: "medium",
};

export const XMarkIcon = Template.bind({});
XMarkIcon.args = {
  iconName: "xMark",
  size: "medium",
};

export const PlusIcon = Template.bind({});
PlusIcon.args = {
  iconName: "plus",
  size: "medium",
};

export const CalendarIcon = Template.bind({});
CalendarIcon.args = {
  iconName: "calendar",
  size: "medium",
};

export const Bars3CenterLeftIcon = Template.bind({});
Bars3CenterLeftIcon.args = {
  iconName: "barsCenterLeft",
  size: "large",
};

export const Bars3BottomLeftIcon = Template.bind({});
Bars3BottomLeftIcon.args = {
  iconName: "barsBottomLeft",
  size: "large",
};

export const Bars3BottomRightIcon = Template.bind({});
Bars3BottomRightIcon.args = {
  iconName: "barsBottomRight",
  size: "large",
};

export const ShareIcon = Template.bind({});
ShareIcon.args = {
  iconName: "share",
  size: "medium",
};

export const ArrowRightCircleIcon = Template.bind({});
ArrowRightCircleIcon.args = {
  iconName: "arrowRightC",
  size: "medium",
};

export const UserCircleIcon = Template.bind({});
UserCircleIcon.args = {
  iconName: "userCircle",
  size: "large",
};

export const DocumentArrowDownIcon = Template.bind({});
DocumentArrowDownIcon.args = {
  iconName: "documentArrowDown",
  size: "large",
};

export const DocumentPlusIcon = Template.bind({});
DocumentPlusIcon.args = {
  iconName: "documentPlus",
  size: "large",
};

export const DocumentMinusIcon = Template.bind({});
DocumentMinusIcon.args = {
  iconName: "documentMinus",
  size: "large",
};

export const LinkIcon = Template.bind({});
LinkIcon.args = {
  iconName: "link",
  size: "large",
};

export const QuestionMarkCircleIcon = Template.bind({});
QuestionMarkCircleIcon.args = {
  iconName: "questionMark",
  size: "large",
};

export const ExclamationTriangleIcon = Template.bind({});
ExclamationTriangleIcon.args = {
  iconName: "exclamationTriangule",
  size: "large",
};

export const Square2StackIcon = Template.bind({});
Square2StackIcon.args = {
  iconName: "squareTwoStack",
  size: "large",
};

export const ArrowLeftIcon = Template.bind({});
ArrowLeftIcon.args = {
  iconName: "arrowLeft",
  size: "medium",
};

export const MinusCircleIcon = Template.bind({});
MinusCircleIcon.args = {
  iconName: "minusCircule",
  size: "medium",
};

export const ChevronDownIcon = Template.bind({});
ChevronDownIcon.args = {
  iconName: "chevronDown",
  size: "medium",
};

export const ArrowLeftCircleIcon = Template.bind({});
ArrowLeftCircleIcon.args = {
  iconName: "arrowLeftCircule",
  size: "medium",
};

export const ChevronUpIcon = Template.bind({});
ChevronUpIcon.args = {
  iconName: "chevronUp",
  size: "large",
};

export const AdjustmentsVerticalIcon = Template.bind({});
AdjustmentsVerticalIcon.args = {
  iconName: "adjustment",
  size: "large",
};

export const InformationCircleIcon = Template.bind({});
InformationCircleIcon.args = {
  iconName: "informationCircle",
  size: "large",
};

export const ArrowUpIcon = Template.bind({});
ArrowUpIcon.args = {
  iconName: "arrowUp",
  size: "large",
};

export const DocumentDuplicateIcon = Template.bind({});
DocumentDuplicateIcon.args = {
  iconName: "documentDuplicate",
  size: "large",
};

export const ArrowDownIcon = Template.bind({});
ArrowDownIcon.args = {
  iconName: "arrowDown",
  size: "large",
};

export const PlusCircleIcon = Template.bind({});
PlusCircleIcon.args = {
  iconName: "plusCircle",
  size: "large",
};

export const ArrowRightOnRectangleIcon = Template.bind({});
ArrowRightOnRectangleIcon.args = {
  iconName: "logout",
  size: "large",
};

export const PaperClipIcon = Template.bind({});
PaperClipIcon.args = {
  iconName: "paperClip",
  size: "large",
};

export const TrashIcon = Template.bind({});
TrashIcon.args = {
  iconName: "trash",
  size: "medium",
};

export const ChevronUpDownIcon = Template.bind({});
ChevronUpDownIcon.args = {
  iconName: "chevronUpDown",
  size: "medium",
};

export const EllipsisHorizontalIcon = Template.bind({});
EllipsisHorizontalIcon.args = {
  iconName: "dotsHorizontal",
  size: "large",
};

export const ArrowRightIcon = Template.bind({});
ArrowRightIcon.args = {
  iconName: "arrowRight",
  size: "medium",
};

export const ExclamationCircleIcon = Template.bind({});
ExclamationCircleIcon.args = {
  iconName: "exclamationCircle",
  size: "small",
};

export const ChevronRightIcon = Template.bind({});
ChevronRightIcon.args = {
  iconName: "chevronRight",
  size: "large",
};

export const MagnifyingGlassIcon = Template.bind({});
MagnifyingGlassIcon.args = {
  iconName: "glass",
  size: "large",
};

export const CheckCircleIcon = Template.bind({});
CheckCircleIcon.args = {
  iconName: "checkCircle",
  size: "large",
};

export const ChevronLeftIcon = Template.bind({});
ChevronLeftIcon.args = {
  iconName: "chevronLeft",
  size: "large",
};

export const EllipsisVerticalIcon = Template.bind({});
EllipsisVerticalIcon.args = {
  iconName: "dotsVertical",
  size: "large",
};
