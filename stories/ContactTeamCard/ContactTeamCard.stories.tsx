import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ContactTeamCard } from "./ContactTeamCard";

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

export default {
  title: "Components/ContactTeamCard",
  component: ContactTeamCard,
} as ComponentMeta<typeof ContactTeamCard>;

const Template: ComponentStory<typeof ContactTeamCard> = (args) => (
  <ContactTeamCard {...args} />
);

export const ContactCard = Template.bind({});
ContactCard.args = {
  name: "Water Perez",
  rol: "Frontend Developer",
  description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
    perferendis eius alias, illo tempore deserunt pariatur rerum minima.
    Fugiat molestias veniam nulla, numquam recusandae asperiores fugit
    voluptate nesciunt quidem esse!`,
  social: aboutData.social,
};

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
