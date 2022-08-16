import React from "react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  BellIcon,
  CalendarIcon,
  ChevronDoubleRightIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  DotsVerticalIcon,
  HomeIcon,
  InformationCircleIcon,
  LogoutIcon,
  MailIcon,
  MenuAlt1Icon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import {} from "@heroicons/react/solid";
import Home from "../../pages";

const iconsSupported: Record<string, any> = {
  "arrow-right": <ArrowRightIcon className=" h-14 w-18 text-white" />,
  "plus-circle": <PlusCircleIcon className=" h-18 w-18 text-white" />,
  "menu-alt": <MenuAlt1Icon className="h-12 w-16 " />, //sin color
  "home-casa": <HomeIcon className=" h-18 w-18 " />, //sin color
  "calendar-dias": <CalendarIcon className="h-18 w-18 text-white" />,
  "bell-campana": <BellIcon className=" w-16 h-18 #9EA2C6" />,
  "logout-salir": <LogoutIcon className=" w-18 h-16 #9EA2C6" />,
  "dots-vertical": <DotsVerticalIcon className=" w-16 h-2 #667080" />,
  "cheveron-down": <ChevronDownIcon className="w-14 h-7 #111827" />,
  "information-circle": <InformationCircleIcon className=" w-24 h-24 " />,
  "cheveron-left": <ChevronLeftIcon className=" w-14 h-7 " />,
  "cheveron-right": <ChevronDoubleRightIcon className="w-14 h-7 " />,
  "arrow-left": <ArrowLeftIcon className=" h-9.33 w-12 text-black" />,
  "mail-correo": <MailIcon className=" w-14,29 h-11,43 text-white" />,
};

export function Icons({ iconName }: { iconName: string }) {
  return <div>{iconsSupported[iconName]}</div>;
}
