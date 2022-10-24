import Link from "next/link";
import { Icon } from "../Icon/Icon";

export const CreateEventCard = () => {
  return (
    <div className="max-w-md group transition-colors duration-200 bg-white border-[3px] border-dashed border-secondary-100 hover:bg-secondary-50 rounded-2xl">
      <Link href="/event/create">
        <a className="flex flex-col items-center justify-center w-full h-full min-h-[18rem] text-xl font-semibold transition-colors duration-200 focus:outline-offset-2 rounded-2xl group-hover:text-secondary-500 text-secondary-400">
          {/* TODO: Add a bigger icon, 48x48px */}
          <Icon iconName="plusCircle" size="large"></Icon>
          Crear evento
        </a>
      </Link>
    </div>
  );
};
