import React from "react";
import { Button } from "../stories/Button/Button";
import { ContactTeamCard } from "../stories/Card/ContactTeamCard";

const aboutData = [
  {
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
  },
  {
    name: "Juan Perez",
    rol: "Frontend Developer",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
  perferendis eius alias, illo tempore deserunt pariatur rerum minima.
  Fugiat molestias veniam nulla, numquam recusandae asperiores fugit
  voluptate nesciunt quidem esse!`,
    social: [
      { iconName: "github", url: "https://github.com/" },
      { iconName: "linkedin", url: "https://www.linkedin.com/" },
      { iconName: "link", url: "https://jairdev.netlify.app/" },
    ],
  },
  {
    name: "Frontend Perez",
    rol: "Frontend Developer",
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem
  perferendis eius alias, illo tempore deserunt pariatur rerum minima.
  Fugiat molestias veniam nulla, numquam recusandae asperiores fugit
  voluptate nesciunt quidem esse!`,
    social: [
      { iconName: "github", url: "https://github.com/" },
      { iconName: "linkedin", url: "https://www.linkedin.com/" },
      { iconName: "behance", url: "https://jairdev.netlify.app/" },
    ],
  },
];

const AboutUs = () => {
  return (
    <div className="px-4 py-16 md:px-10 md:py-8 max-w-[1440px] h-full">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-8/12">
          <h1 className="text-4xl">Acerca de CMYK</h1>
          <p className="my-8">
            La iniciativa CMYK promueve el desarrollo de proyectos colaborativos
            con el objetivo de ganar experiencia en un entorno profesional.
            Organizada por la comunidad{" "}
            <span className="text-blue-500">Frontend Café</span> desde el año
            XXXX, en esta ocasión por primera vez se suma a la etapa de diseño
            la comunidad del{" "}
            <span className="text-blue-500">Service Design Club.</span>
          </p>
        </div>
        <div>
          <Button>Saber más</Button>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl">Equipo</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 mt-4">
          {aboutData.map(({ name, rol, description, social }) => (
            <ContactTeamCard
              key={name}
              name={name}
              rol={rol}
              description={description}
              social={social}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
