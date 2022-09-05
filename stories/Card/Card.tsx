import Link from "next/link";
import { EventData } from "../../types/events-types";
import { Button } from "../Button/Button";
import { Icon } from "../Icon/Icon";

export const Card = ({ event }: { event: EventData }) => {
  const { endDate, id, name, startingDate, talks } = event;

  return (
    <div className="max-w-md transition-shadow bg-white shadow-md duration-20z0 rounded-2xl hover:shadow-xl">
      <Link href={`/event/${id}`}>
        <a>
          <div className="relative overflow-hidden rounded-t-2xl bg-gradient-to-b to-primary-500/25 from-primary-500">
            {/* TODO: Add Tag component */}
            <span className="absolute px-2 py-1 text-xs font-medium text-white select-none top-4 right-4 bg-black/50 backdrop-blur-sm rounded-2xl">
              Borrador
            </span>
            <img className="object-cover h-48" src="" />
          </div>
          <div className="p-4 space-y-2">
            <h5 className="text-xl font-semibold line-clamp-2">{name}</h5>
            <div className="flex items-center gap-1 text-sm text-secondary-700">
              <Icon iconName="calendar" />
              {/* TODO: Extract to a function */}
              {new Date(startingDate).toLocaleDateString()} -{" "}
              {new Date(endDate).toLocaleDateString()}
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
                <Icon iconName="dotsVertical" size="medium" theme="dark" />
              </Button>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
};
