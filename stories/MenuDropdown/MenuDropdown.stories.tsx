import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MenuDropdown } from "./MenuDropdown";

// Import icons
import {
  DocumentDuplicateIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  ShareIcon,
  TrashIcon,
} from "../Icon/Icon.stories";

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
      icon: <ShareIcon iconName="share" theme="neutral" size="medium" />,
      textContent: "Compartir",
      href: "#",
    },
    {
      icon: <PencilIcon iconName="pencil" theme="neutral" size="medium" />,
      textContent: "Editar",
      href: "#",
    },
    {
      icon: <TrashIcon iconName="trash" theme="neutral" size="medium" />,
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
      icon: <PencilIcon iconName="pencil" theme="neutral" size="medium" />,
      textContent: "Editar",
      href: "#",
    },
    {
      icon: (
        <DocumentDuplicateIcon
          iconName="documentDuplicate"
          theme="neutral"
          size="medium"
        />
      ),
      textContent: "Duplicar",
      href: "#",
    },
    {
      icon: <TrashIcon iconName="trash" theme="neutral" size="medium" />,
      textContent: "Eliminar",
      href: "#",
    },
  ],
  button: (
    <Button
      children={
        <EllipsisVerticalIcon
          iconName="dotsVertical"
          theme="neutral"
          size="medium"
        />
      }
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
      icon: <PencilIcon iconName="pencil" theme="neutral" size="medium" />,
      textContent: "Editar",
      href: "#",
    },
    {
      icon: (
        <DocumentDuplicateIcon
          iconName="documentDuplicate"
          theme="neutral"
          size="medium"
        />
      ),
      textContent: "Duplicar",
      href: "#",
    },
    {
      icon: <TrashIcon iconName="trash" theme="neutral" size="medium" />,
      textContent: "Eliminar",
      href: "#",
    },
  ],
  button: (
    <Button
      children={
        <EllipsisVerticalIcon
          iconName="dotsVertical"
          theme="neutral"
          size="medium"
        />
      }
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
