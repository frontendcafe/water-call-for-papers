import type { NextPage } from "next";
import Image from "next/image";
import { Button } from "../stories/Button/Button";

const Home: NextPage = () => {
  return (
    <div className=" grid grid-cols-2 h-screen w-screen">
      <div className=" flex flex-col justify-between pl-20 mt-20">
        <div className="flex">
          <Image
            src="/img/logo.svg"
            width={40}
            height={40}
            objectFit={"contain"}
          />
          <h1 className="text-[#003FC1] text-3xl pl-2 pt-3">Aqua</h1>
        </div>

        <div className="">
          <h1 className="text-4xl">
            <span className="text-[#003FC1]">Simplifica</span> la organizacion
            de tus eventos
          </h1>
          <br />
          <p className="text-2xl">
            Con Aqua puedes administrar tu próximo evento, gestionar la
            convocatoria de charlas, evaluarlas e informar los resultados.{" "}
            <br />
            Todo en un mismo lugar
          </p>

          <div className="mt-10">
            <Button>Comenzar</Button>
          </div>
        </div>

        <div className="">
          <Image src="/img/logoVercel.svg" width={160} height={38} />
        </div>
      </div>

      <div className="bg-primary-50 grid place-content-center ">
        <Image src="/img/cuate.svg" width={576} height={518} />
      </div>
    </div>
  );
};

export default Home;
