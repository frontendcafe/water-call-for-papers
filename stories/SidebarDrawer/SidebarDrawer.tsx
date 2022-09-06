import Image from "next/image";
import { useEffect, useState } from "react";
import logo_vercel from "../../public/img/powered-by-vercel.svg";
import { EventData } from "../../types/events-types";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { LogoCallForPapers } from "../Spinner/LogoCallForPapers";
import { StyledLink } from "./StyledLink/StyledLink";
import { TextContainer } from "./TextContainer";

interface SidebarProps {
  /**
   * Sidebar drawer events list.
   */
  events: EventData[];
}

interface DrawerCompProps {
  clickHandler: () => void;
  events: EventData[];
  open: boolean;
}

const setBtnLabel = (open: boolean) => (open ? "Cerrar menu" : "Abrir menu");

const iconStyles = "inline-flex flex-shrink-0";

export const SidebarDrawer = ({ events = [] }: SidebarProps) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const isMobile = () => window.matchMedia("(min-width: 768px)").matches;

    setOpen(isMobile);
  }, []);

  const clickHandler = () => {
    setOpen(!open);
  };

  const responsiveBehavior = `transition-all -translate-x-0 md:translate-x-0 w-full ${
    open
      ? "visible md:w-[17rem]"
      : "invisible md:visible -translate-x-full md:w-[4.5rem]"
  }`;

  return (
    <div className="relative md:static">
      <TopBarButton clickHandler={clickHandler} open={open} />
      <nav
        id="sidebar-drawer"
        aria-label="Sidebar"
        aria-expanded={open ? "true" : "false"}
        className={`bg-black text-secondary-200 fixed md:sticky flex flex-col justify-between font-semibold whitespace-nowrap min-h-screen p-3 top-0 left-0 z-10 ${responsiveBehavior}`}
      >
        <div className="space-y-6">
          <BrandSection open={open} clickHandler={clickHandler} />

          <StyledLink href="/event/create" variant="primary">
            <TextContainer open={open}>Crear Evento</TextContainer>
            <Icon className={iconStyles} iconName="plusCircle" />
          </StyledLink>

          <EventsNavSection open={open} events={events} />
        </div>

        <AboutNavSection open={open} />
      </nav>
    </div>
  );
};

function TopBarButton({ open, clickHandler }: Omit<DrawerCompProps, "events">) {
  const TogglerIcon = () => {
    return open ? (
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
    <div className="fixed top-0 left-0 z-20 inline-flex items-center gap-2 p-2 text-white md:hidden">
      <Button
        aria-controls="sidebar-drawer"
        aria-label={setBtnLabel(open)}
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

function BrandSection({ open, clickHandler }: Omit<DrawerCompProps, "events">) {
  return (
    <div className="flex items-center">
      <span className="hidden px-1 md:block">
        <Button
          aria-controls="sidebar-drawer"
          aria-label={setBtnLabel(open)}
          icon
          onClick={clickHandler}
          variant="transparent"
        >
          <LogoCallForPapers />
        </Button>
      </span>

      <h1 className="pl-20 text-xl grow md:p-1">
        <TextContainer open={open}>Call for Papers</TextContainer>
      </h1>

      <span className={`${open ? "hidden md:block" : "hidden"}`}>
        <Button
          aria-controls="sidebar-drawer"
          aria-label={setBtnLabel(open)}
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
  open,
}: Omit<DrawerCompProps, "clickHandler">) {
  return (
    <div className="space-y-2">
      <h2 className="flex items-center gap-2 p-2 text-white">
        <Icon className={iconStyles} size="large" iconName="calendar" />

        <TextContainer open={open}>Mis Eventos</TextContainer>
      </h2>

      <ul aria-label="Listado de próximos eventos" className="space-y-2">
        {events.map(({ id, name }) => (
          <li key={id}>
            <StyledLink href={`/event/${id}`}>
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-xs text-black rounded-full bg-secondary-100">
                {name.substring(0, 2).toUpperCase()}
              </div>

              <TextContainer truncate open={open}>
                {name}
              </TextContainer>
            </StyledLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AboutNavSection({ open }: Pick<DrawerCompProps, "open">) {
  return (
    <ul className="space-y-2">
      <li className="">
        <StyledLink>
          <Icon className={iconStyles} size="large" iconName="questionMark" />
          <TextContainer open={open}>Acerca de</TextContainer>
        </StyledLink>
      </li>

      <li>
        <StyledLink>
          <Icon className={iconStyles} size="large" iconName="logout" />
          <TextContainer open={open}>Cerrar</TextContainer>
        </StyledLink>
      </li>

      <li>
        <StyledLink
          href="https://vercel.com/?utm_source=hifrontendcafe&utm_campaign=oss"
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
