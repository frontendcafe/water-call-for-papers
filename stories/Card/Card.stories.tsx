import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Card } from "./Card";
import { ContactTeamCard } from "./ContactTeamCard";
import { CreateEventCard } from "./CreateEventCard";

const dummyData = {
  name: "UX y Diseño de Interacción: Usabilidad aplicada",
  talks: Array(6).fill(null),
  startingDate: new Date(),
  endDate: new Date(),
  status: "Borrador",
};

const aboutData = {
  name: "Water Perez",
  rol: "Frontend Developer",
  description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
  perferendis eius alias, illo tempore deserunt pariatur rerum minima.
  Fugiat molestias veniam nulla, numquam recusandae asperiores fugit
  voluptate nesciunt quidem esse!`,
  social: [
    { iconName: "github", url: "https://github.com/" },
    { iconName: "linkedin", url: "https://www.linkedin.com/" },
    { iconName: "link", url: "https://jairdev.netlify.app/" },
    { iconName: "mail", url: "devalfredomoscoso@gmail.com" },
    { iconName: "behance", url: "https://behance.net/" },
  ],
};

const aboutDataArr = Array(6).fill(aboutData);

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

export const ContactCard: ComponentStory<typeof ContactTeamCard> = () => (
  <ContactTeamCard
    name="Water Perez"
    rol="Frontend Developer"
    description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
    perferendis eius alias, illo tempore deserunt pariatur rerum minima.
    Fugiat molestias veniam nulla, numquam recusandae asperiores fugit
    voluptate nesciunt quidem esse!"
    social={aboutData.social}
  />
);

export const MultipleContactCards = Template.bind({});
MultipleContactCards.decorators = [
  () => (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 px-4">
      {aboutDataArr.map(({ name, rol, description, social }) => (
        <ContactTeamCard
          name={name}
          rol={rol}
          description={description}
          social={social}
        />
      ))}
    </div>
  ),
];
