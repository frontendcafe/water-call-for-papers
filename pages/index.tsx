import type { NextPage } from "next";
import homeImage from "../public/img/home-image.svg";
import olaLogo from "../public/img/ola-logo.svg";
import vercelLogo from "../public/img/vercel-logo-black.svg";
import Image from "next/image";
import { StyledLink } from "../stories/SidebarDrawer/StyledLink/StyledLink";

const Logo = () => {
  return (
    <div className="flex gap-2">
      <Image
        src={olaLogo}
        alt="Logo de la aplicación para la administración de eventos llamada ola"
      />
      <p className="text-4xl font-semibold text-primary-800">Ola</p>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <section className="flex flex-col justify-between flex-1 w-screen h-full bg-white">
      <div className="flex justify-center w-full py-12 lg:hidden">
        <Logo />
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="w-full px-10 md:flex md:justify-center lg:bg-primary-50 lg:h-screen lg:col-start-2">
          <Image
            src={homeImage}
            alt="Imagen de la pantalla principal de la aplicación para la administración de eventos llamada ola, en la que muestra tres personas"
          />
        </div>
        <div className="flex flex-col justify-center p-4 lg:justify-between md:p-8 lg:px-10 lg:h-screen lg:col-start-1 lg:row-start-1">
          <div className="hidden w-full py-12 lg:flex">
            <Logo />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-2xl font-semibold text-textGray">
              <span className="text-primary-800">Simplifica</span> la
              organización de tus eventos
            </p>
            <p className="mb-4 text-textGray">
              Con Ola puedes administrar tu próximo evento, gestionar la
              convocatoria de charlas, evaluarlas e informar los resultados.
              Todo en un mismo lugar.
            </p>
            <StyledLink
              href="/event/list"
              variant="primary"
              classNames="lg:w-72"
            >
              Comenzar
            </StyledLink>
          </div>
          <div className="hidden w-full py-4 lg:flex">
            <Image
              src={vercelLogo}
              alt="Logo de Vercel, servicio para desplegar aplicaciones frontend"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center w-full py-4 lg:hidden">
        <Image
          src={vercelLogo}
          alt="Logo de Vercel, servicio para desplegar aplicaciones frontend"
        />
      </div>
    </section>
  );
};

export default Home;
