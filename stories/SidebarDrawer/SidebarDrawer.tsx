import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { tw } from "../../lib/utils";
import logo_vercel from "../../public/img/powered-by-vercel.svg";
import { EventData } from "../../types/events-types";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { LogoCallForPapers } from "../Spinner/LogoCallForPapers";
import { IconContainer } from "./IconContainer";
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

export const SidebarDrawer = ({ events = [] }: SidebarProps) => {
  const [open, setOpen] = useState(true);

  const clickHandler = () => {
    setOpen(!open);
  };

  const responsiveBehavior = `transition-all md:translate-x-0 w-full ${
    open
      ? "invisible -translate-x-full md:visible md:flex md:w-[17rem]"
      : "visible -translate-x-0 md:w-[4.5rem]"
  }`;

  return (
    <div className="relative md:static">
      <TopBarButton clickHandler={clickHandler} open={open} />
      <nav
        aria-label="Sidebar"
        className={tw(
          "bg-black text-secondary-200",
          "fixed md:sticky",
          "flex flex-col justify-between",
          "font-semibold whitespace-nowrap",
          "min-h-screen",
          "p-3",
          "top-0",
          "z-10",
          responsiveBehavior
        )}
      >
        <div className="space-y-6">
          <BrandSection open={open} clickHandler={clickHandler} />

          <StyledLink href="/event/create" variant="primary">
            <TextContainer open={open}>Crear Evento</TextContainer>
            <IconContainer>
              <Icon iconName="plusCircle" size="medium" theme="light" />
            </IconContainer>
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
      <Icon color="text-primary-600" iconName="barsCenterLeft" size="large" />
    ) : (
      <Icon color="text-primary-600" iconName="xmark" size="large" />
    );
  };

  return (
    <div className="fixed top-0 z-20 inline-flex items-center gap-2 p-2 text-white md:hidden">
      <Button
        aria-label="Toggle drawer"
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
          aria-label="Toggle drawer"
          icon
          onClick={clickHandler}
          variant="transparent"
        >
          <IconContainer>
            <LogoCallForPapers />
          </IconContainer>
        </Button>
      </span>

      <h1 className="pl-20 text-xl grow md:p-1">
        <TextContainer open={open}>Call for Papers</TextContainer>
      </h1>

      <span className={`${open ? "hidden md:block" : "hidden"}`}>
        <Button
          aria-label="Toggle drawer"
          icon
          onClick={clickHandler}
          variant="transparent"
        >
          <IconContainer>
            <Icon size="large" iconName="chevronLeft" theme="light" />
          </IconContainer>
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
        <IconContainer>
          <Icon size="large" iconName="calendar" theme="light" />
        </IconContainer>

        <TextContainer open={open}>Mis Eventos</TextContainer>
      </h2>

      <ul aria-label="Listado de próximos eventos" className="space-y-2">
        {events.map(({ id, name }) => (
          <li key={id}>
            <StyledLink href={`/event/${id}`}>
              <IconContainer>
                <div className="inline-flex items-center justify-center w-8 h-8 text-xs text-black rounded-full bg-secondary-100">
                  {name.substring(0, 2).toUpperCase()}
                </div>
              </IconContainer>

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
    <ul className="space-y-2 ">
      <li className="">
        <StyledLink>
          <IconContainer>
            <Icon size="large" iconName="questionMark" theme="light" />
          </IconContainer>

          <TextContainer open={open}>Acerca de</TextContainer>
        </StyledLink>
      </li>

      <li>
        <StyledLink>
          <IconContainer>
            <Icon size="large" iconName="logout" theme="light" />
          </IconContainer>

          <TextContainer open={open}>Cerrar</TextContainer>
        </StyledLink>
      </li>

      <li className="px-2">
        <Link href="https://vercel.com/?utm_source=hifrontendcafe&utm_campaign=oss">
          <a target="_blank" rel="noopener noreferrer">
            <Image
              src={logo_vercel.src}
              alt="Powered by Vercel"
              width={logo_vercel.width}
              height={logo_vercel.height}
              placeholder="blur"
              blurDataURL={logo_vercel.src}
            />
          </a>
        </Link>
      </li>
    </ul>
  );
}
