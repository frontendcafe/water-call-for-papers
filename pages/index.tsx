import type { NextPage } from "next";
import { Button } from "../stories/Button/Button";
import { Icons } from "../stories/Button/Icons";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-500 rounded p-10">
      Hola
      <Button label="Click" />
      <Icons iconName="arrow-right" />
      <Icons iconName="plus-circle" />
      <Icons iconName="menu-alt" />
      <Icons iconName="home-casa" />
      <Icons iconName="calendar-dias" />
      <Icons iconName="bell-campana" />
      <Icons iconName="logout-salir" />
      <Icons iconName="dots-vertical" />
      <Icons iconName="cheveron-down" />
      <Icons iconName="information-circle" />
      <Icons iconName="cheveron-left" />
      <Icons iconName="cheveron-right" />
      <Icons iconName="arrow-left" />
      <Icons iconName="mail-correo" />
    </div>
  );
};

export default Home;
