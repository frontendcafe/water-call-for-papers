import type { NextPage } from "next";
import Image from "next/image";


const Home: NextPage = () => {
  return (
    <div className="grid grid-cols-2 h-screen w-screen">
      <div className="col-span-1">
        <div>
          <h1 className="text-blue-500">Aqua</h1>
        </div>
        <div>
          <h1>
            <span className="text-blue-500">Simplifica</span> la organizacion de
            tus eventos
          </h1>
          <p>
            Con Aqua puedes administrar tu próximo evento, gestionar la
            convocatoria de charlas, evaluarlas e informar los resultados.
          </p>
          <br />
          <p> Todo en un mismo lugar </p>
          <button className="">Comenzar</button>
        </div>
      </div>

      <div className="col-span-1 bg-[#E5E5FF] ">
        <Image src="/img/home.svg" width={576} height={518} />
      </div>
    </div>
  );
};

export default Home;
