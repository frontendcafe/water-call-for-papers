import React from "react";
import Link from "next/link";
import { Menu } from "@headlessui/react";

export interface Item {
  /** icon, optional. */
  icon?: React.ReactNode;

  /** textContent, menu item's text content. */
  textContent: string;

  /**  href, direction to redirect to. */
  href: string;

  target?: "_blank" | "_self";

  /** disabled, indicate if the menu item is disabled. */
  disabled?: boolean;
}

interface MenuDropdownProps {
  /**  itemList, array with objects as elements. */
  itemList: Item[];

  /**  children, Button component. */
  children: React.ReactNode;

  /**  ARIA label for menu items, optional. */
  menuLabel?: string;
}

/**
 * Menu dropdown component.
 * Render the button and the item list received as prop.
 * @param {object[]} itemList - Array, in each position contains an object with 'icon', 'textContent' and 'href' props.
 * @param {React.ReactNode} children - Button JSX component.
 * @param {string} menuLabel - ARIA label for menu items, default 'Items menú'.
 */

export const MenuDropdown = ({
  itemList,
  children,
  menuLabel,
}: MenuDropdownProps) => {
  // Set text color depending on item.textContent
  const textColor = (text: string) =>
    text === "Eliminar" ? "text-[#991B1B]" : "text-[#393939]";

  const activeStyle = "bg-[#00000008]";
  const disabledStyle = "cursor-not-allowed";

  // Create MenuItem element, receive an item as prop.
  const MenuItem = ({ item }: { item: Item }) => {
    return (
      <Menu.Item disabled={item.disabled}>
        {({ active }) => (
          <div>
            <Link href={item.href}>
              <a
                className={`inline-flex gap-2 items-center p-4 align-middle w-32 ${
                  active && activeStyle
                }  ${textColor(item.textContent)} ${
                  item.disabled && disabledStyle
                }`}
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

  return (
    <Menu>
      <div className="relative">
        <Menu.Button as={"div"} className="w-0 h-0 mb-8 mr-8">
          {children}
        </Menu.Button>

        <Menu.Items
          aria-label={menuLabel ?? "Items menú"}
          className="absolute z-50 overflow-hidden text-sm bg-white rounded-md shadow-lg ring-1 ring-black/5 -left-16 w-max"
        >
          {itemList.map((item, index) => (
            <MenuItem item={item} key={index} />
          ))}
        </Menu.Items>
      </div>
    </Menu>
  );
};
