import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuDropdown } from "./MenuDropdown";

import { Icon } from "../Icon/Icon";

// Button
import { Button } from "../Button/Button";

export default {
  title: "Components/MenuDropdown",
  component: MenuDropdown,
} as ComponentMeta<typeof MenuDropdown>;

const Template: ComponentStory<typeof MenuDropdown> = (args) => (
  <MenuDropdown {...args} />
);

export const MenuText = Template.bind({});

MenuText.args = {
  itemList: [
    {
      icon: <Icon iconName="share" size="medium" aria-hidden />,
      textContent: "Disabled",
      href: "#",
      disabled: true,
    },
    {
      icon: <Icon iconName="pencil" size="medium" aria-hidden />,
      textContent: "Editar",
      href: "#",
      disabled: false,
    },
    {
      icon: <Icon iconName="trash" size="medium" aria-hidden />,
      textContent: "Eliminar",
      href: "#",
      disabled: false,
    },
  ],
  children: (
    <Button
      children="With text"
      rounded="medium"
      size="normal"
      variant="primary"
      aria-label="Menu button"
    />
  ),
};

export const ExpandIcon = Template.bind({});

ExpandIcon.args = {
  itemList: [
    {
      icon: <Icon iconName="pencil" size="medium" aria-hidden />,
      textContent: "Editar",
      href: "#",
      disabled: false,
    },
    {
      icon: <Icon iconName="documentDuplicate" size="medium" aria-hidden />,
      textContent: "Duplicar",
      href: "#",
      disabled: false,
    },
    {
      icon: <Icon iconName="trash" size="medium" aria-hidden />,
      textContent: "Eliminar",
      href: "#",
      disabled: true,
    },
  ],
  children: (
    <Button
      children={<Icon iconName="dotsVertical" size="medium" aria-hidden />}
      icon
      rounded="medium"
      size="normal"
      variant="primary"
      aria-label="Menu button"
    />
  ),
  menuLabel: "Random label",
};
