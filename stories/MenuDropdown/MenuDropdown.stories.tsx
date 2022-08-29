import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuDropdown } from "./MenuDropdown";

// Button
import { Button } from "../Button/Button";

// Icons
import { ExpandMore } from "../Icons/ExpandMore";
import { Share } from "../Icons/Share";
import { Edit } from "../Icons/Edit";
import { Delete } from "../Icons/Delete";
import { Duplicate } from "../Icons/Duplicate";

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
      icon: <Share />,
      textContent: "Compartir",
      href: "#",
    },
    {
      icon: <Edit />,
      textContent: "Editar",
      href: "#",
    },
    {
      icon: <Delete />,
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
      rounded="small"
      size="medium"
      variant="primary"
    />
  ),
};

export const Disabled = Template.bind({});

Disabled.args = {
  itemList: [
    {
      icon: <Edit />,
      textContent: "Editar",
      href: "#",
    },
    {
      icon: <Duplicate />,
      textContent: "Duplicar",
      href: "#",
    },
    {
      icon: <Delete />,
      textContent: "Eliminar",
      href: "#",
    },
  ],
  button: (
    <Button
      children={<ExpandMore />}
      disabled={true}
      icon={true}
      loading={true}
      rounded="small"
      size="small"
      variant="primary"
    />
  ),
};

export const Expand = Template.bind({});

Expand.args = {
  itemList: [
    {
      icon: <Edit />,
      textContent: "Editar",
      href: "#",
    },
    {
      icon: <Duplicate />,
      textContent: "Duplicar",
      href: "#",
    },
    {
      icon: <Delete />,
      textContent: "Eliminar",
      href: "#",
    },
  ],
  button: (
    <Button
      children={<ExpandMore />}
      disabled={false}
      icon={true}
      loading={false}
      rounded="small"
      size="small"
      variant="primary"
    />
  ),
  menuLabel: "Random label",
};
