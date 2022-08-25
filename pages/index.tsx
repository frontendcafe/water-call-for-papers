import type { NextPage } from "next";
import { useState } from "react";
import { Button } from "../stories/Button/Button";
import { Modal } from "../stories/Modal/Modal";

const Home: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div style={{ height: "200vh" }} className="bg-slate-500 rounded p-10">
      Hola
      <Button onClick={handleOpen} label="Click" />
      <Modal handleOpen={handleOpen} open={isOpen} />
    </div>
  );
};

export default Home;
