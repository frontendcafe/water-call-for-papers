import React from "react";
import { Menu } from "@headlessui/react";

interface item {
  // icon, if present will be rendered (optional).
  icon?: SVGElement;

  // textContent, menu's text content.
  textContent: string;

  // href, direction to redirect to.
  href: string;
}

interface MenuDropdownProps {
  // itemList, array with objects as elements.
  itemList: item[];

  // button, Button component.
  button: React.ReactNode;
}

// Tiene que ser accesible con teclado
// Tiene que cerrarse apretando escape
// Tiene que cerrarse apretando fuera del dropdown

// Los estados que va a tener cada uno de los items del Menu son:
// Disabled
// Hover
// Active
// Focus

export const MenuDropdown = ({ itemList, button }: MenuDropdownProps) => {
  // Iterate over itemList(array of objects) and return menu items.
  const menuItems = itemList.map((item) => {
    return (
      <Menu.Item key={item.textContent}>
        {({ active }) => (
          <div>
            {item.icon && <svg></svg>}
            <a className={`${active && "bg-blue-500"}`} href={item.href}>
              {item.textContent}
            </a>
          </div>
        )}
        {/* <div>
          {item.icon && <svg></svg>}
          <a href={item.href}>{item.textContent}</a>
        </div> */}
      </Menu.Item>
    );
  });
  return (
    <Menu>
      <Menu.Button>{button}</Menu.Button>
      <Menu.Items>{menuItems}</Menu.Items>
    </Menu>
  );
};
