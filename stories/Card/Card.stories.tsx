import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from "./Card";
import { CreateEventCard } from "./CreateEventCard";

const dummyData = {
  name: "UX y Diseño de Interacción: Usabilidad aplicada",
  talks: Array(6).fill(null),
  startingDate: new Date(),
  endDate: new Date(),
};

const dummyDataArr = Array(10).fill(dummyData);

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {},
  args: {
    event: dummyData,
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const SingleCard = Template.bind({});
SingleCard.args = {};

export const NewEventCard = Template.bind({});
NewEventCard.decorators = [() => <CreateEventCard />];

export const MultipleCards = Template.bind({});
MultipleCards.decorators = [
  (Card) => (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      <CreateEventCard />
      {dummyDataArr.map((dummyData) => (
        <Card event={dummyData} />
      ))}
    </div>
  ),
];
