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
      <p className="text-primary-800 font-semibold text-4xl">Ola</p>
    </div>
  );
};

const Home: NextPage = () => {
  return (
    <section className="flex flex-col justify-between w-screen flex-1 h-full bg-white">
      <div className="w-full py-12 flex justify-center lg:hidden">
        <Logo />
      </div>
      <div className="grid lg:grid-cols-2">
        <div className="w-full px-10 md:flex md:justify-center lg:bg-primary-50 lg:h-screen lg:col-start-2">
          <Image
            src={homeImage}
            alt="Imagen de la pantalla principal de la aplicación para la administración de eventos llamada ola, en la que muestra tres personas"
          />
        </div>
        <div className="flex flex-col justify-center lg:justify-between p-4 md:p-8 lg:px-10 lg:h-screen lg:col-start-1 lg:row-start-1">
          <div className="w-full py-12 hidden lg:flex">
            <Logo />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-textGray font-semibold text-2xl">
              <span className="text-primary-800">Simplifica</span> la
              organización de tus eventos
            </p>
            <p className="text-textGray mb-4">
              Con Ola puedes administrar tu próximo evento, gestionar la
              convocatoria de charlas, evaluarlas e informar los resultados.
              Todo en un mismo lugar.
            </p>
            <StyledLink
              // TODO: Cambiar a /event/list cuando se mergee https://github.com/frontendcafe/water-call-for-papers/pull/141
              href="/event/create"
              variant="primary"
              classNames="rounded-md lg:w-72"
            >
              Comenzar
            </StyledLink>
          </div>
          <div className="w-full py-4 hidden lg:flex">
            <Image
              src={vercelLogo}
              alt="Logo de Vercel, servicio para desplegar aplicaciones frontend"
            />
          </div>
        </div>
      </div>
      <div className="w-full py-4 flex justify-center lg:hidden">
        <Image
          src={vercelLogo}
          alt="Logo de Vercel, servicio para desplegar aplicaciones frontend"
        />
      </div>
    </section>
  );
};

export default Home;
