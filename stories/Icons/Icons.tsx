import React from "react";
import {
  
  AdjustmentsIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  BellIcon,
  CalendarIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  CogIcon,
  DotsVerticalIcon,
  FilterIcon,
  HomeIcon,
  InformationCircleIcon,
  LogoutIcon,
  MailIcon,
  MenuAlt2Icon,
  MenuAlt3Icon,
  PencilAltIcon,
  PhotographIcon,
  PlusCircleIcon,
  PlusSmIcon,
  SearchIcon,
  ShareIcon,
  TrashIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import { ExclamationCircleIcon } from "@heroicons/react/solid";

const iconsSupported: Record<string, JSX.Element> = {
  "menu-icon": <MenuAlt2Icon />,
  "plus-circle": <PlusCircleIcon />,
  "home-casa": <HomeIcon />,
  "view-list": <ViewListIcon />,
  "cog-engranaje": <CogIcon />,
  "logout-salir": <LogoutIcon />,
  "search-glass": <SearchIcon />,
  "filter-filtro": <FilterIcon />,
  "plus-sm": <PlusSmIcon />,
  "calendar-dias": <CalendarIcon />,
  "share-compartir": <ShareIcon />,
  "pen-detalle": <PencilAltIcon />,
  "trash-basura": <TrashIcon />,
  "dots-vertical": <DotsVerticalIcon />,
  "photo-grafia": <PhotographIcon />,
  "chevron-down": <ChevronDownIcon />,
  "clock-reloj": <ClockIcon />,
  "exclamation-circle": <ExclamationCircleIcon />,
  "arrow-right": <ArrowRightIcon />,
  "arrow-left": <ArrowLeftIcon />,
  "mail-correo": <MailIcon />,
  "bell-campana": <BellIcon />,
  "information-circle": <InformationCircleIcon />,
  "cheveron-left": <ChevronLeftIcon />,
  "cheveron-right": <ChevronRightIcon />,
  "adjustment": <AdjustmentsIcon/>,
  "bar": <MenuAlt3Icon/>

  

  
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
