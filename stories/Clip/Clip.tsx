import React, { useRef, useState } from "react";

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
      >
        <div className="">
          <span className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#f8fafc"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244"
              />
            </svg>
          </span>
        </div>
        <span className="block text-slate-50 font-medium ml-2">
          Compartir enlace
        </span>
      </button>
      {isCopy && (
        <span className={`absolute -left-0 -bottom-8`}>
          {messageContent} {clipTextValue}
        </span>
      )}
    </div>
  );
};
