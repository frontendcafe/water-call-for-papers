import React from "react";
import {
  
  AdjustmentsVerticalIcon,
  ArrowDownIcon,
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
  ArrowRightOnRectangleIcon,
  ArrowLeftIcon,
  ArrowRightIcon,  
  ArrowUpIcon,
  Bars3CenterLeftIcon,
  Bars3BottomLeftIcon,
  Bars3BottomRightIcon,
  BellIcon,
  BookmarkIcon,
  CalendarIcon,
  CheckCircleIcon,
  CheckIcon,
  ChevronUpDownIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  CogIcon,
  DocumentIcon,
  DocumentArrowDownIcon,
  DocumentDuplicateIcon,
  DocumentPlusIcon,
  DocumentMinusIcon,
  EllipsisHorizontalIcon,
  EllipsisVerticalIcon,
  EnvelopeIcon,
  ExclamationTriangleIcon,
  EyeIcon,  
  HomeIcon,
  InformationCircleIcon,
  LinkIcon,  
  MagnifyingGlassIcon,
  MapPinIcon,
  MinusCircleIcon,
  PaperClipIcon,
  PencilIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  PlusIcon,
  QuestionMarkCircleIcon,
  Square2StackIcon,
  ShareIcon,
  TrashIcon,
  ShieldExclamationIcon,
  UserIcon,
  UsersIcon,
  UserGroupIcon,
  UserCircleIcon,
  TagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const iconsSupported: Record<string, JSX.Element> = {
  "mail": <EnvelopeIcon />,
  "bell": <BellIcon />,
  "home": <HomeIcon />,
  "shield":<ShieldExclamationIcon/>,
  "cog-engranaje": <CogIcon />,
  "check": <CheckIcon />,
  "pen-detalle": <PencilSquareIcon />,
  "pencil":<PencilIcon/>,
  "eye":<EyeIcon/>,
  "book":<BookmarkIcon/>,

  "mapin":<MapPinIcon/>,
  "user":<UserIcon/>,
  "users":<UsersIcon/>,
  "usergroup":<UserGroupIcon/>,
  "clock-reloj": <ClockIcon />,
  "document":<DocumentIcon/>,
  "tag":<TagIcon/>,
  "xmark":<XMarkIcon/>,
  "plus": <PlusIcon />,
  "calendar-dias": <CalendarIcon />,

  "barsCenterLeft":<Bars3CenterLeftIcon/>,
  "barsBottomLeft":<Bars3BottomLeftIcon/>,
  "barsBottomRight":<Bars3BottomRightIcon/>,
  "share-compartir": <ShareIcon />,
  "arrowRightC":<ArrowRightCircleIcon/>,
  "userCircle":<UserCircleIcon/>,
  "documentArrowDown":<DocumentArrowDownIcon/>,
  "documentPlus":<DocumentPlusIcon/>,
  "documentMinus":<DocumentMinusIcon/>,
  "link":<LinkIcon/>,

  "questionMark":<QuestionMarkCircleIcon/>,
  "exclamationTriangule":<ExclamationTriangleIcon/>,
  "squareTwoStack":<Square2StackIcon/>,
  "arrowLeft": <ArrowLeftIcon />,
  "minusCircule":<MinusCircleIcon/>,
  "chevronDown":<ChevronDownIcon/>,
  "arrowLeftCircule":<ArrowLeftCircleIcon/>,
  "adjustmentVertical":<AdjustmentsVerticalIcon/>,
  "information-circle":<InformationCircleIcon />,

  "arrowUp": <ArrowUpIcon />,
  "documentDuplicate":<DocumentDuplicateIcon/>,
  "arrowDown": <ArrowDownIcon />,
  "plusCircle": <PlusCircleIcon />,
  "logout":<ArrowRightOnRectangleIcon/>,
  "papper":<PaperClipIcon/>,
  "trash": <TrashIcon />,
  "chevronUpDown":<ChevronUpDownIcon/>,

  "dotsHorizontal":<EllipsisHorizontalIcon/>,
  "arrow-right": <ArrowRightIcon />,
  "exclamation-circle": <ExclamationCircleIcon />,
  "cheveron-right": <ChevronRightIcon />,
  "glass":<MagnifyingGlassIcon/>,

  "checkCircle":<CheckCircleIcon/>,
  "cheveron-left": <ChevronLeftIcon />,

  "dotsVertical": <EllipsisVerticalIcon />,
  
};

const iconTheme: Record<string, string> = {
  dark: "text-black",
  neutral: "text-gray-500",
  light: "text-white ",
};

const iconSize: Record<string, string> = {
  small: "w-3 h-3",
  medium: "w-3.5 h-3.5",
  large: "w-5 h-5",
};

/* const iconName: Record<string, string> = {
  dark: "stroke-black",
  neutral: "stroke-gray-500",
  light: "stoke-white ",
}; */

export function Icons({
  iconName,
  theme,
  size,
}: {
  iconName: string;
  theme: "dark" | "light" | "neutral"; // restrinjo a estos valores en theme (hacer lo mismo con names y con size)
  size: "large" | "medium" | "small";
}) {
  return (
    <div className={`${iconTheme[theme]} ${iconSize[size]}`}>
      {iconsSupported[iconName]}
    </div>
  );
}
