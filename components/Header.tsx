import React from "react";
import { Button } from "../stories/Button/Button";
import { Icon } from "../stories/Icon/Icon";
import { MenuDropdown } from "../stories/MenuDropdown/MenuDropdown";

const Header = ({ title }: { title: string }) => {
  return (
    <div className="flex justify-between my-4">
      <div className="flex gap-4">
        <h2 className="font-semibold text-5xl">{title}</h2>
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
          <Icon iconName="dotsVertical" />
        </MenuDropdown>
      </div>
      <Button icon={true} classNames="rounded-lg px-4 py-2">
        Compartir <Icon iconName="share" size="small" />
      </Button>
    </div>
  );
};

export default Header;
