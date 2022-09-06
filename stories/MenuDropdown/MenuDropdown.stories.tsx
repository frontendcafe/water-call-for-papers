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
      icon: <Icon iconName="share" size="medium" />,
      textContent: "Compartir",
      href: "#",
    },
    {
      icon: <Icon iconName="pencil" size="medium" />,
      textContent: "Editar",
      href: "#",
    },
    {
      icon: <Icon iconName="trash" size="medium" />,
      textContent: "Eliminar",
      href: "#",
    },
  ],
  button: (
    <Button
      children="With text"
      disabled={false}
      icon={false}
      loading={false}
      rounded="medium"
      size="normal"
      variant="primary"
    />
  ),
};

export const Disabled = Template.bind({});

Disabled.args = {
  itemList: [
    {
      icon: <Icon iconName="pencil" size="medium" />,
      textContent: "Editar",
      href: "#",
    },
    {
      icon: <Icon iconName="documentDuplicate" size="medium" />,
      textContent: "Duplicar",
      href: "#",
    },
    {
      icon: <Icon iconName="trash" size="medium" />,
      textContent: "Eliminar",
      href: "#",
    },
  ],
  button: (
    <Button
      children={<Icon iconName="dotsVertical" size="medium" />}
      disabled={true}
      icon={true}
      rounded="medium"
      size="small"
      variant="primary"
    />
  ),
};

export const Expand = Template.bind({});

Expand.args = {
  itemList: [
    {
      icon: <Icon iconName="pencil" size="medium" />,
      textContent: "Editar",
      href: "#",
    },
    {
      icon: <Icon iconName="documentDuplicate" size="medium" />,
      textContent: "Duplicar",
      href: "#",
    },
    {
      icon: <Icon iconName="trash" size="medium" />,
      textContent: "Eliminar",
      href: "#",
    },
  ],
  button: (
    <Button
      children={<Icon iconName="dotsVertical" size="medium" />}
      disabled={false}
      icon={true}
      loading={false}
      rounded="medium"
      size="normal"
      variant="primary"
    />
  ),
  menuLabel: "Random label",
};
