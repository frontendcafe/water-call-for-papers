import React from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";

interface Item {
  /** icon, optional. */

  icon?: React.ReactNode;

  /** textContent, menu item's text content. */
  textContent: string;

  /**  href, direction to redirect to. */
  href: string;
}

interface MenuDropdownProps {
  /**  itemList, array with objects as elements. */
  itemList: Item[];

  /**  button, Button component. */
  button: React.ReactNode;

  /**  ARIA label for menu items, optional. */
  menuLabel?: string;
}

/**
 * Menu dropdown component.
 * Render the button and the item list received as prop.
 * @param {object[]} itemList - Array, in each position contains an object with 'icon', 'textContent' and 'href' props.
 * @param {React.ReactNode} button - JSX component.
 * @param {string} menuLabel - ARIA label for menu items, default 'Items menú'.
 */

export const MenuDropdown = ({
  itemList,
  button,
  menuLabel,
}: MenuDropdownProps) => {
  // Set text color depending on item.textContent
  const textColor = (text: string) =>
    text === "Eliminar" ? "text-[#991B1B]" : "text-[#393939]";

  // Create MenuItem element, receive an item as prop.
  const MenuItem = ({ item }) => {
    return (
      <Menu.Item>
        {({ active }) => (
          <div>
            <Link href={item.href}>
              <a
                className={`${
                  active && "bg-[#00000008]"
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
    );
  };

  // Get disabled prop value of button.
  const isButtonDisabled = button.props.disabled;

  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button as={"div"}>{button}</Menu.Button>
          {open && !isButtonDisabled && (
            <Menu.Items
              aria-label={menuLabel ?? "Items menú"}
              className={`rounded-md shadow-[0px_5px_9px_rgba(0,0,0,0.25)] w-[176px] bg-[#FFFFFF]`}
            >
              {itemList.map((item, index) => (
                <MenuItem item={item} key={index} />
              ))}
            </Menu.Items>
          )}
        </>
      )}
    </Menu>
  );
};
