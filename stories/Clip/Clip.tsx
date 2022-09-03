import React, { useRef, useState } from "react";
import { Icon } from "../Icon/Icon";

interface ClipProps {
  clipTextValue: string;
}

export const Clip = ({ clipTextValue }: ClipProps) => {
  const refButton = useRef<HTMLButtonElement>(null);
  const [messageContent, setMessageContent] = useState("Copiado");
  const [isCopy, setIsCopy] = useState(false);

  const handleClick = () => {
    const valueToRead = refButton?.current?.value;
    if (valueToRead) {
      navigator?.clipboard
        ?.writeText(valueToRead)
        .then(() => {
          setIsCopy(true);
        })
        .catch((error) => {
          setMessageContent(`${error} al copiar`);
        });
      setTimeout(() => setIsCopy(false), 1000);
    }
  };

  return (
    <div className="relative">
      <span className="block mb-2 text-slate-600 font-semibold">
        Link del evento
      </span>
      <button
        ref={refButton}
        className="flex border-2 border-black-600 rounded-xl py-4 bg-blue-600 px-28 hover:bg-blue-700 active:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
        onClick={handleClick}
        value={clipTextValue}
        title="copiar-texto"
        aria-labelledby="message-content"
      >
        <div className="">
          <span className="block">
            <Icon iconName="link" size="medium" theme="light" />
          </span>
        </div>
        <span className="block text-slate-50 font-medium ml-2">
          Compartir enlace
        </span>
      </button>
      {isCopy && (
        <span id="message-content" className={`absolute -left-0 -bottom-8`}>
          {messageContent} {clipTextValue}
        </span>
      )}
    </div>
  );
};
