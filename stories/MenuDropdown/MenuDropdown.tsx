import React from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";

interface Item {
  //  icon, optional.
  icon?: React.ReactNode;

  // textContent, menu item's text content.
  textContent: string;

  // href, direction to redirect to.
  href: string;
}

interface MenuDropdownProps {
  // itemList, array with objects as elements.
  itemList: Item[];

  // button, Button component.
  button: React.ReactNode;
}

/**
 * Menu dropdown component.
 * Render the button and the item list received as prop.
 * @param {object[]} itemList - Array, in each position contains an object with 'icon', 'textContent' and 'href' props.
 * @param {React.ReactNode} button - JSX component.
 */

export const MenuDropdown = ({ itemList, button }: MenuDropdownProps) => {
  // Set text color depending on item.textContent
  const textColor = (text: string) =>
    text === "Eliminar" ? "text-[#B91C1C]" : "text-[#393939]";

  // Iterate over itemList(array of objects) and return menu items.
  const menuItems = itemList.map((item, index) => (
    <Menu.Item key={index}>
      {({ active }) => (
        <div className="text-sm">
          <Link href={item.href}>
            <a
              className={`${
                active && "bg-[#EEF1F4]"
              } inline-flex gap-2 items-center p-4 align-middle w-full ${textColor(
                item.textContent
              )}`}
            >
              {item.icon}
              {item.textContent}
            </a>
          </Link>
        </div>
      )}
    </Menu.Item>
  ));

  return (
    <Menu>
      <Menu.Button as={React.Fragment}>{button}</Menu.Button>
      <Menu.Items
        className={`rounded-md shadow-[0px_5px_9px_rgba(0,0,0,0.25)] w-[176px]`}
      >
        {menuItems}
      </Menu.Items>
    </Menu>
  );
};
