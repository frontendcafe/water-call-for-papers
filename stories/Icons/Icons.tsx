import React from "react";
import {
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
  ExclamationCircleIcon,
  FilterIcon,
  HomeIcon,
  InformationCircleIcon,
  LogoutIcon,
  MailIcon,
  MenuAlt2Icon,
  PencilAltIcon,
  PhotographIcon,
  PlusCircleIcon,
  PlusSmIcon,
  SearchIcon,
  ShareIcon,
  TrashIcon,
  ViewListIcon,
} from "@heroicons/react/outline";
import { ExclamationIcon } from "@heroicons/react/solid";

const iconsSupported: Record<string, JSX.Element> = {
  "menu-alt-2": <MenuAlt2Icon />,
  "view-list": <ViewListIcon />,
  "cog-engranaje": <CogIcon />,
  "plus-sm": <PlusSmIcon />,
  "search-glass": <SearchIcon />,
  "filter-filtro": <FilterIcon />,
  "calendar-dias": <CalendarIcon />,
  "dots-vertical": <DotsVerticalIcon />,
  "share-compartir": <ShareIcon />,
  "pen-detalle": <PencilAltIcon />,
  "Trash-basura": <TrashIcon />,
  "photo-grafia": <PhotographIcon />,
  "cheveron-down": <ChevronDownIcon />,
  "clock-reloj": <ClockIcon />,
  "arrow-right": <ArrowRightIcon />,
  "plus-circle": <PlusCircleIcon />,
  "home-casa": <HomeIcon />,
  "bell-campana": <BellIcon />,
  "logout-salir": <LogoutIcon />,
  "information-circle": <InformationCircleIcon />,
  "cheveron-left": <ChevronLeftIcon className="w-14 h-7 text-black" />,
  "cheveron-right": <ChevronRightIcon className="w-14 h-7 text-black" />,
  "arrow-left": <ArrowLeftIcon className="h-9.33 w-12 text-black" />,
  "mail-correo": <MailIcon className="w-14,29 h-11,43" />,
  "exclamation-circle": <ExclamationIcon className="h-12 w-12" />,
};

export function Icons({
  iconName,
  className,
}: {
  iconName: string;
  className: string;
}) {
  return <div className={className}> {iconsSupported[iconName]}</div>;
}
