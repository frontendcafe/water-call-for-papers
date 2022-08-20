import type { NextPage } from "next";
import { Button } from "../stories/Button/Button";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-500 rounded p-10">
      Hola
      <Button onClick={() => null}>Click</Button>
    </div>
  );
};

export default Home;
