import React from "react";
import { Button } from "../stories/Button/Button";
import { Icon } from "../stories/Icon/Icon";
import { MenuDropdown } from "../stories/MenuDropdown/MenuDropdown";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-between px-4 mb-8">
      <div className="flex items-center gap-4 py-2">
        <h2 className="text-3xl font-semibold">{title}</h2>
        <MenuDropdown
          itemList={[
            {
              icon: <Icon iconName="detail" />,
              href: "#",
              textContent: "Editar",
              disabled: true,
            },
            {
              icon: <Icon iconName="documentDuplicate" />,
              href: "#",
              textContent: "Editar",
              disabled: true,
            },
            {
              icon: <Icon iconName="trash" />,
              href: "#",
              textContent: "Eliminar",
              disabled: true,
            },
          ]}
        >
          <Button icon variant="secondary">
            <Icon iconName="dotsVertical" />
          </Button>
        </MenuDropdown>
      </div>
      <Button icon={true} classNames="rounded-lg px-4 py-2 hidden md:flex">
        Compartir <Icon iconName="share" size="small" />
      </Button>
    </div>
  );
};

export default Header;
