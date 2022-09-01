import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { tw } from "../../lib/utils";
import logo_vercel from "../../public/img/powered-by-vercel.svg";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { LogoCallForPapers } from "../Spinner/LogoCallForPapers";
import { IconContainer } from "./IconContainer";
import { StyledLink } from "./StyledLink/StyledLink";
import { TextContainer } from "./TextContainer";

interface DrawerCompProps {
  open: boolean;
  clickHandler: () => void;
}

const dummyData = [
  { initials: "CM", title: "CMYK" },
  { initials: "FC", title: "Frontend Cafe" },
  { initials: "SD", title: "Service Design Club" },
];

export const SidebarDrawer = () => {
  const [open, setOpen] = useState(true);

  const clickHandler = () => {
    setOpen(!open);
  };

  const respAnimations = `transition-all md:translate-x-0 ${
    open ? "-translate-x-0 md:w-[17rem]" : "-translate-x-full md:w-[4.5rem]"
  }`;

  return (
    <nav
      aria-label="Sidebar"
      className={tw(
        "absolute md:static",
        "bg-black text-secondary-200",
        "flex flex-col justify-between",
        "font-semibold whitespace-nowrap",
        "min-h-screen",
        "p-3",
        "z-10",
        respAnimations
      )}
    >
      <div className="space-y-6">
        <BrandSection open={open} clickHandler={clickHandler} />

        <StyledLink variant="primary">
          <TextContainer open={open}>Crear Evento</TextContainer>

          <IconContainer>
              <Icon iconName="plusCircle" size="medium" theme="light" />
          </IconContainer>
        </StyledLink>

        <EventsNavSection open={open} />
      </div>

      <AboutNavSection open={open} />
    </nav>
  );
};

function BrandSection({ open, clickHandler }: DrawerCompProps) {
  return (
    <div className="flex items-center">
      <span className="px-1">
        <Button
          aria-label="Toggle drawer"
          icon
          onClick={clickHandler}
          size="small"
          variant="transparent"
        >
          <IconContainer>
            <LogoCallForPapers />
          </IconContainer>
        </Button>
      </span>

      <h1 className="text-xl grow">
        <TextContainer open={open}>Call for Papers</TextContainer>
      </h1>

      <span className={`${open ? "" : "hidden"}`}>
        <Button
          aria-label="Toggle drawer"
          icon
          onClick={clickHandler}
          size="small"
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

function EventsNavSection({ open }: Pick<DrawerCompProps, "open">) {
  return (
    <div className="space-y-2">
      <h2 className="flex items-center gap-2 p-2 text-white">
        <IconContainer>
          <Icon size="large" iconName="calendar" theme="light" />
        </IconContainer>

        <TextContainer open={open}>Mis Eventos</TextContainer>
      </h2>

      <ul aria-label="Listado de próximos eventos" className="space-y-2">
        {dummyData.map(({ initials, title }) => (
          <li key={title}>
            <StyledLink>
              <IconContainer>
                <div className="inline-flex items-center justify-center w-8 h-8 text-xs rounded-full even:text-warning-700 odd:text-black bg-secondary-100">
                  {initials}
                </div>
              </IconContainer>

              <TextContainer truncate open={open}>
                {title}
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
