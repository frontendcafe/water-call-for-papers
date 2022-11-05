import Image from "next/image";
import { useEffect } from "react";
import logo_vercel from "../../public/img/vercel-logo-white.svg";
import { EventData } from "../../types/events-types";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { LogoCallForPapers } from "../Spinner/LogoCallForPapers";
import { StyledLink } from "..//StyledLink/StyledLink";
import { TextContainer } from "./TextContainer";
import { Action, useSidebarReducer } from "./useSidebarReducer";
import { randomIntegerBetween } from "../../lib/utils";

interface SidebarProps {
  /**
   * Sidebar drawer events list.
   */
  events: EventData[];
}

interface DrawerCompProps {
  clickHandler: () => void;
  events: EventData[];
  ariaLabel: string;
  isOpen: boolean;
}

const isMobile = () => window.matchMedia("(max-width: 768px)").matches;

const iconStyles = "inline-flex flex-shrink-0";

export const SidebarDrawer = ({ events = [] }: SidebarProps) => {
  const { sidebarState, setSidebarState } = useSidebarReducer();
  const { ariaExpanded, isOpen } = sidebarState;

  useEffect(() => {
    const type = isMobile() ? Action.MOBILE_INITIAL : Action.DESKTOP_INITIAL;
    setSidebarState({ type });
  }, []);

  const clickHandler = () => {
    const type = isMobile() ? Action.MOBILE : Action.DESKTOP;
    setSidebarState({ type });
  };

  const responsiveBehavior = `md:translate-x-0 w-full ${
    isOpen
      ? "invisible md:visible md:w-[17rem] -translate-x-full"
      : "md:w-[4.5rem]"
  }`;

  return (
    <div className="relative md:static">
      <TopBarButton {...sidebarState} clickHandler={clickHandler} />
      <nav
        id="sidebar-drawer"
        aria-label="Sidebar"
        aria-expanded={ariaExpanded}
        className={`fixed md:pt-12  top-0 left-0 z-30 flex flex-col justify-between min-h-screen p-3 font-semibold transition-all bg-black text-secondary-200 md:sticky whitespace-nowrap ${responsiveBehavior}`}
      >
        <div className="space-y-6">
          <BrandSection {...sidebarState} clickHandler={clickHandler} />

          <StyledLink href="/event/create" variant="primary" rounded="full">
            <TextContainer {...sidebarState}>Crear Evento</TextContainer>
            <Icon className={iconStyles} iconName="plusCircle" />
          </StyledLink>

          <EventsNavSection {...sidebarState} events={events} />
        </div>

        <AboutNavSection {...sidebarState} />
      </nav>
    </div>
  );
};

function TopBarButton({
  clickHandler,
  ariaLabel,
  isOpen,
}: Omit<DrawerCompProps, "events">) {
  const TogglerIcon = () => {
    return !isOpen ? (
      <Icon
        className={`${iconStyles} text-primary-600`}
        iconName="xMark"
        size="large"
      />
    ) : (
      <Icon
        className={`${iconStyles} text-primary-600`}
        iconName="barsCenterLeft"
        size="large"
      />
    );
  };

  return (
    <div className="fixed top-0 left-0 z-40 inline-flex items-center gap-2 p-2 text-white md:hidden">
      <Button
        aria-controls="sidebar-drawer"
        aria-label={ariaLabel}
        icon
        onClick={clickHandler}
        variant="transparent"
      >
        <TogglerIcon />
      </Button>
      <LogoCallForPapers />
    </div>
  );
}

function BrandSection({
  clickHandler,
  ariaLabel,
  isOpen,
}: Omit<DrawerCompProps, "events">) {
  return (
    <div className="flex items-center">
      <span className="hidden px-1 md:block">
        <Button
          aria-controls="sidebar-drawer"
          aria-label={ariaLabel}
          icon
          onClick={clickHandler}
          variant="transparent"
        >
          <LogoCallForPapers />
        </Button>
      </span>

      <h1 className="pl-20 text-xl grow md:p-1">
        <TextContainer isOpen={isOpen}>Ola</TextContainer>
      </h1>

      <span className={`${isOpen ? "hidden md:block" : "hidden"}`}>
        <Button
          aria-controls="sidebar-drawer"
          aria-label={ariaLabel}
          icon
          onClick={clickHandler}
          variant="transparent"
        >
          <Icon className={iconStyles} size="large" iconName="chevronLeft" />
        </Button>
      </span>
    </div>
  );
}

function EventsNavSection({
  events,
  isOpen,
}: Omit<DrawerCompProps, "clickHandler">) {
  const colors = [
    ["text-[#B81B31]", "bg-[#FFE5EF]"],
    ["text-[#124C47]", "bg-[#E7FFFE]"],
    ["text-[#6D4F19]", "bg-[#FFFAE3]"],
    ["text-[#245938]", "bg-[#D1FADF]"],
  ];

  return (
    <div className="space-y-2">
      <h2>
        <StyledLink href="/event/list" classNames="!text-white">
          <Icon className={iconStyles} size="large" iconName="calendar" />
          <TextContainer isOpen={isOpen}>Mis Eventos</TextContainer>
        </StyledLink>
      </h2>

      <ul aria-label="Listado de próximos eventos" className="space-y-2">
        {events.map(({ id, name }) => {
          const textColors = colors[randomIntegerBetween(0, 3)].join(" ");
          return (
            <li key={id}>
              <StyledLink href={`/event/${id}`}>
                <div
                  className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-xs rounded-full ${textColors}`}
                >
                  {name.substring(0, 2).toUpperCase()}
                </div>

                <TextContainer truncate isOpen={isOpen}>
                  {name}
                </TextContainer>
              </StyledLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function AboutNavSection({ isOpen }: Pick<DrawerCompProps, "isOpen">) {
  return (
    <ul className="space-y-2">
      <li className="">
        <StyledLink href="/about-us">
          <Icon className={iconStyles} size="large" iconName="questionMark" />
          <TextContainer isOpen={isOpen}>Acerca de</TextContainer>
        </StyledLink>
      </li>

      <li>
        <StyledLink
          href="https://vercel.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src={logo_vercel.src}
            alt="Powered by Vercel"
            width={150}
            height={32}
            placeholder="blur"
            blurDataURL={logo_vercel.src}
          />
        </StyledLink>
      </li>
    </ul>
  );
}
