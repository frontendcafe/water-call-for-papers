import React from "react";
import { ContactTeamCard } from "../stories/ContactTeamCard/ContactTeamCard";
import { StyledLink } from "../stories/StyledLink/StyledLink";

const participants = [
  {
    id: 0,
    name: "Erik Giovani",
    mail: "erikgiovanidev@gmail.com",
    bio: "Soy una persona apasionada por aprender y desarrollar cosas nuevas todos los días, también he desarrollado una librería de JavaScript y React de código abierto para evitar que los bots encuentren correos electrónicos y números de teléfono en las webs y web apps y poder evitar spam y estafas.",
    role: "Frontend Developer",
    links: ["https://github.com/ErikGIovani"],
  },
  {
    id: 1,
    name: "Edward Quimiz",
    mail: "edwardbrian96@gmail.com",
    bio: "Actualmente busco una equipo de trabajo, empresa que pueda crecer como profesional y persona, me desempeño en el backend y entender la lógica del negocio para construirlo de la forma mas eficiente.",
    role: "backend",
    links: [
      "https://www.linkedin.com/in/bryanpomaqueroquimiz/",
      "https://bryanedward.github.io/webapp/",
    ],
  },
  {
    id: 2,
    name: "Florencia Piñeiro",
    mail: "pineiro.flor98@gmail.com",
    bio: "Diseñadora en búsqueda de su primer experiencia profesional en IT. Mi objetivo es continuar adquiriendo conocimientos en el proceso de creación de productos digitales centrados en personas usuarias.",
    role: "UX/UI Designer",
    links: [
      "https://www.linkedin.com/in/florenciapineiro/",
      "https://www.behance.net/florenciapieiro",
    ],
  },
  {
    id: 3,
    name: "Paulina Lera",
    mail: "paulina.lera@gmail.com",
    bio: "Soy diseñadora industrial. Me interesan temas como innovación, research y ética aplicados a diseño. Busco trabajo como Product Designer o UX Designer.",
    role: "UX Designer",
    links: [
      "https://linkedin.com/in/paulinalera/",
      "https://miportfoliopaulina.notion.site/Hola-Soy-Paulina-10303af7f1e4484698a38ca3c4cc9826",
    ],
  },
  {
    id: 4,
    name: "Anthony Mackensen",
    mail: "tonymckes@gmail.com",
    bio: "Mis próximos pasos serán ir en la búsqueda de mi primer trabajo de tiempo completo como desarrollador web, así poder dedicarle más tiempo a seguir aprendiendo sobre la inmensidad de tecnologías que tiene para ofrecer.",
    role: "Developer",
    links: [
      "https://www.linkedin.com/in/tonymckes/",
      "https://github.com/TonyMckes",
      "https://tonymckes.vercel.app",
    ],
  },
  {
    id: 5,
    name: "Yolitzareth Zacarias",
    mail: "yolit.zr@gmail.com",
    bio: "Soy apasionada por el buen diseño y experiencia de usuario en un desarrollo web. Trabajo con dedicación y pasión en cada proyecto. Estoy interesada en proyectos que me puedan ayudar a crecer profesionalmente y demostrar mi talento y trabajo.",
    role: "Front End Developer",
    links: ["https://www.linkedin.com/in/yolitzarethzacarias/"],
  },
  {
    id: 6,
    name: "Verónica García (nykka)",
    mail: "veronicaines.garcia@gmail.com",
    bio: "Soy desarrolladora front end especializada en aplicaciones web, UX/UI y accesibilidad.",
    role: "Líder",
    links: ["https://www.linkedin.com/in/nykka/"],
  },
  {
    id: 7,
    name: "Federico Gallo",
    mail: "federicof1@gmail.com",
    bio:
      "Soy Uruguayo, hice un curso de introducción al frontend en Hack Academy recomendado por un amigo quería cambiar un poco lo que venía haciendo en forma laboral, como me gustó mucho continué estudiando e hice un curso en una academia de Argentina, precisamente en Coderhouse en donde estudié javascript y luego continué en un curso de React. Posteriormente me puse a estudiar por mi cuenta Wordpress. \n" +
      "Hoy quiero encontrar trabajo como Jr para poder seguir adelante en esta carrera, ya que la veo como algo que no es monotono y estas en continua aprendeizaje.\n" +
      "Como proyecto freelance estoy haciendo una pagina para un cuadro de Babyfutbol donde juega mi hijo y ademas estoy haciendo una página institucional a una empresa de contrucción",
    role: "Frontend",
    links: [
      "https://www.linkedin.com/in/federicogallogallo/",
      "https://github.com/Fedef11980",
    ],
  },
  {
    id: 8,
    name: "Maira Lucia Haunau",
    mail: "hmairalucia@gmail.com",
    bio: "Soy una periodista que pensó en sacarle el mayor provecho posible a la programación. Entender qué hacen las/os programadoras/es me permitió saber qué pedir y qué esperar. Estoy trabajando en un medio digital y me gustaría sumarme a algún proyecto relacionado con el periodismo de  datos. Pero primero debo incursionar un poco más en el tema.",
    role: "Programadora",
    links: [
      "https://www.linkedin.com/in/hmairalucia/",
      "https://twitter.com/haunaumaira",
    ],
  },
  {
    id: 9,
    name: "Valeria Cantaluppi",
    mail: "vale.cantaluppi@gmail.com",
    bio: "Soy diseñadora gráfica FADU UBA. Actualmente trabajo como UX/UI designer en Mercado Libre. Estoy en formación continua, buscando siempre sumar más herramientas que me permitan desarrollar productos eficientes y de calidad, así como también fortalecer mis habilidades blandas.",
    role: "UX Designer - Líder",
    links: [
      "https://www.linkedin.com/in/valeria-cantaluppi/",
      "https://www.behance.net/valecantaluppi",
    ],
  },
  {
    id: 10,
    name: "Alfredo Moscoso",
    mail: "devalfredomoscoso@gmail.com",
    bio: "En estos momentos me estoy especializando en el desarrollo web frontend he realizado algunos proyectos personales, también tengo interés en el desarrollo backend, estoy en búsqueda activa de empleo.",
    role: "Frontend Developer",
    links: [
      "https://www.linkedin.com/in/alfredomoscosofrontend/",
      "https://github.com/JairDev",
      "https://jairdev.netlify.app/",
    ],
  },
  {
    id: 11,
    name: "Manuel Escribano",
    mail: "manuel.escribano.051@gmail.com",
    bio:
      "Unos de mis objetivos profesionales es generar un impacto positivo en la vida de las personas a través de la tecnologia.\n" +
      "Actualmente estoy buscando un lugar en donde pueda desarrollarme como profesional en la industria y expandir mis conocimientos.",
    role: "Frontend developer.",
    links: [
      "https://www.linkedin.com/in/manuel-escribano-lpregen/",
      "https://portfolio-lpregen.vercel.app/",
    ],
  },
  {
    id: 12,
    name: "Vieyra Ureña Bravo",
    mail: "vieyraurenabravo@gmail.com",
    bio: "Diseñadora UI/UX con conocimientos en diseño gráfico y desarrollo web. ✨Me apasiona aprender y aplicar lo aprendido en nuevos productos digitales. Busco trabajar en un equipo de diseño, para colaborar y ayudar con mis conocimientos como también aprender de mis futuros compañeros y compañeras. También me interesa desarrollar proyectos freelance para contribuir a pequeñas y medianas empresas a potencializar su negocio a nivel digital.",
    role: "Diseñadora UI/UX",
    links: [
      "https://www.linkedin.com/in/vieyrau/",
      "https://www.behance.net/vieyraurea",
    ],
  },
];

const AboutUs = () => {
  return (
    <div className="bg-white text-black px-4 pt-16 md:pt-12 md:px-10 max-w-[1440px] h-full">
      <div className="flex flex-col justify-between md:flex-row">
        <div className="md:w-8/12">
          <h1 className="text-4xl">Acerca de CMYK</h1>
          <p className="my-8">
            La iniciativa CMYK promueve el desarrollo de proyectos colaborativos
            con el objetivo de ganar experiencia en un entorno profesional.
            Organizada por la comunidad{" "}
            <a href="https://frontend.cafe/">
              <span className="text-blue-500">Frontend Café</span>
            </a>{" "}
            desde el año 2020, en esta ocasión por primera vez se suma la
            colaboración en la etapa de diseño la comunidad del{" "}
            <a href="https://servicedesignclub.com/">
              <span className="text-blue-500">Service Design Club.</span>
            </a>
          </p>
        </div>
        <div>
          <StyledLink variant="primary" href="https://frontend.cafe/cmyk">
            Saber más
          </StyledLink>
        </div>
      </div>
      <div className="mt-10">
        <h2 className="text-3xl">Equipo</h2>
        <div className="grid gap-6 mt-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4">
          {participants.map(({ name, role, bio, links, id, mail }) => (
            <ContactTeamCard
              key={id}
              name={name}
              rol={role}
              description={bio}
              social={[
                ...links.map((url) => {
                  if (url.includes("github")) {
                    return { iconName: "github", url };
                  }
                  if (url.includes("linkedin")) {
                    return { iconName: "linkedin", url };
                  }
                  if (url.includes("behance")) {
                    return { iconName: "behance", url };
                  }
                  if (url.includes("twitter")) {
                    return { iconName: "twitter", url };
                  }
                  return { iconName: "link", url };
                }),
                { iconName: "mail", url: `mailto:${mail}` },
              ]}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
