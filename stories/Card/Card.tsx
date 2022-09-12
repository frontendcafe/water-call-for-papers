import Link from "next/link";
import { getDate, tw } from "../../lib/utils";
import { EventData } from "../../types/events-types";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { Item, MenuDropdown } from "../MenuDropdown/MenuDropdown";
import { Tag } from "../Tag/Tag";

export const Card = ({ event }: { event: EventData }) => {
  const { endDate, id, name, startingDate, talks, status } = event;

  // TODO: Add href after functionality gets implemented
  const menuItems: Item[] = [
    {
      href: "#",
      textContent: "Editar",
      icon: <Icon iconName="detail" size="small" />,
    },
    {
      href: "#",
      textContent: "Duplicar",
      icon: <Icon iconName="documentDuplicate" size="small" />,
    },
    {
      href: "#",
      textContent: "Eliminar",
      icon: <Icon iconName="trash" size="small" />,
    },
  ];

  return (
    <article className="relative max-w-md bg-white rounded-2xl">
      <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-b to-primary-500/25 from-primary-500">
        <span className="absolute select-none top-4 right-4">
          <Tag label={status} size="sm" status="event" />
        </span>
        <img className="object-cover h-48" src="" />
      </div>
      <div className="p-4 space-y-2">
        <Link href={id ? `/event/${id}` : "#"}>
          <a
            className={tw(
              "after:absolute after:bottom-0 after:right-0 after:left-0 after:top-0",
              "after:rounded-2xl after:content-[''] after:pointer-events-auto",
              "after:shadow-md after:focus:shadow-xl after:hover:shadow-xl",
              "after:transition-shadow after:duration-200",
              "focus:outline-none after:focus-visible:outline after:focus-visible:outline-2 after:focus-visible:outline-offset-1"
            )}
          >
            <h5 className="text-xl font-semibold line-clamp-2">{name}</h5>
          </a>
        </Link>
        <div className="flex items-center gap-1 text-sm text-secondary-700">
          <Icon iconName="calendar" />
          {getDate(startingDate)} - {getDate(endDate)}
        </div>
        <div>{/* TODO: Add Tags component */}</div>
        <div className="flex items-end">
          <span className="text-xs grow text-secondary-800">
            {talks.length} postulaciones recibidas
          </span>
          <MenuDropdown itemList={menuItems}>
            <Button aria-label="Menu" icon size="normal" variant="transparent">
              <Icon iconName="dotsVertical" />
            </Button>
          </MenuDropdown>
        </div>
      </div>
    </article>
  );
};
