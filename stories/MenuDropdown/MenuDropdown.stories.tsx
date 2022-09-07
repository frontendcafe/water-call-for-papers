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

export const WithText = Template.bind({});

WithText.args = {
  itemList: [
    {
      icon: <Icon iconName="share" size="medium" aria-hidden />,
      textContent: "Compartir",
      href: "#",
    },
    {
      icon: <Icon iconName="pencil" size="medium" aria-hidden />,
      textContent: "Editar",
      href: "#",
    },
    {
      icon: <Icon iconName="trash" size="medium" aria-hidden />,
      textContent: "Eliminar",
      href: "#",
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

export const Disabled = Template.bind({});

Disabled.args = {
  itemList: [
    {
      icon: <Icon iconName="pencil" size="medium" aria-hidden />,
      textContent: "Editar",
      href: "#",
    },
    {
      icon: <Icon iconName="documentDuplicate" size="medium" aria-hidden />,
      textContent: "Duplicar",
      href: "#",
    },
    {
      icon: <Icon iconName="trash" size="medium" aria-hidden />,
      textContent: "Eliminar",
      href: "#",
    },
  ],
  children: (
    <Button
      children={<Icon iconName="dotsVertical" size="medium" aria-hidden />}
      disabled
      icon
      rounded="medium"
      size="small"
      variant="primary"
      aria-label="Menu button"
    />
  ),
};

export const Expand = Template.bind({});

Expand.args = {
  itemList: [
    {
      icon: <Icon iconName="pencil" size="medium" aria-hidden />,
      textContent: "Editar",
      href: "#",
    },
    {
      icon: <Icon iconName="documentDuplicate" size="medium" aria-hidden />,
      textContent: "Duplicar",
      href: "#",
    },
    {
      icon: <Icon iconName="trash" size="medium" aria-hidden />,
      textContent: "Eliminar",
      href: "#",
    },
  ],
  children: (
    <Button
      children={<Icon iconName="dotsVertical" size="medium" aria-hidden />}
      icon={true}
      rounded="medium"
      size="normal"
      variant="primary"
      aria-label="Menu button"
    />
  ),
  menuLabel: "Random label",
};
