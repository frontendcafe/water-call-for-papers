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
      navigator.clipboard
        .writeText(valueToRead)
        .then(() => {
          setIsCopy(true);
        })
        .catch((error) => {
          setMessageContent(error);
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
        className="flex border-2 border-black-600 rounded-lg p-2 "
        onClick={handleClick}
        value={clipTextValue}
        title="copiar-texto"
      >
        <span className="block">{clipTextValue}</span>
        <div className="ml-6">
          <span className="block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#727272"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75"
              />
            </svg>
          </span>
        </div>
      </button>
      {isCopy && (
        <span className={`absolute -left-0 -bottom-8`}>{messageContent}</span>
      )}
    </div>
  );
};
