import Link from "next/link";
import { getDate } from "../../lib/utils";
import { EventData } from "../../types/events-types";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";
import { Tag } from "../Tag/Tag";

export const Card = ({ event }: { event: EventData }) => {
  const { endDate, id, name, startingDate, talks, status } = event;

  return (
    <div className="max-w-md transition-shadow duration-200 bg-white shadow-md rounded-2xl hover:shadow-xl">
      <Link href={`/event/${id}`}>
        <a>
          <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-b to-primary-500/25 from-primary-500">
            <span className="absolute select-none top-4 right-4">
              <Tag label={status} size="sm" status="event" />
            </span>
            <img className="object-cover h-48" src="" />
          </div>
          <div className="p-4 space-y-2">
            <h5 className="text-xl font-semibold line-clamp-2">{name}</h5>
            <div className="flex items-center gap-1 text-sm text-secondary-700">
              <Icon iconName="calendar" />
              {getDate(startingDate)} - {getDate(endDate)}
            </div>
            <div>{/* TODO: Add Tags component */}</div>
            <div className="flex items-end">
              <span className="text-xs grow text-secondary-800">
                {talks.length} postulaciones recibidas
              </span>
              {/* TODO: Add dropdown menu   */}
              <Button
                type="button"
                icon
                size="normal"
                onClick={(e) => e.preventDefault()}
                variant="transparent"
              >
                <Icon iconName="dotsVertical" />
              </Button>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
