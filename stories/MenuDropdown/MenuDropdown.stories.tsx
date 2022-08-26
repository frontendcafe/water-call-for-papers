import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "../Button/Button";
import { MenuDropdown } from "./MenuDropdown";

export default {
  title: "Components/MenuDropdown",
  component: MenuDropdown,
} as ComponentMeta<typeof MenuDropdown>;

const Template: ComponentStory<typeof MenuDropdown> = (args) => (
  <MenuDropdown {...args} />
);

export const Active = Template.bind({});

function testFunction() {
  // console.log("testing");
}

Active.args = {
  itemList: [
    { textContent: "compartir", href: "asdasd" },
    { textContent: "Editar", href: "asdasd" },
    { textContent: "Eliminar evento", href: "asdasd" },
  ],
  button: (
    <Button
      children="Dropdown"
      disabled={false}
      icon={false}
      loading={false}
      rounded="small"
      size="medium"
      variant="primary"
      onClick={testFunction}
    />
  ),
};
