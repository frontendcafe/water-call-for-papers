import React, { useRef } from "react";

interface ClipProps {
  clipTextValue: string;
}

export const Clip = ({ clipTextValue }: ClipProps) => {
  const refInput = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    const valueToRead = refInput?.current?.value;
    // console.log(valueToRead);
    if (valueToRead) {
      navigator.clipboard
        .writeText(valueToRead)
        .then(() => alert(`Texto copiado ${valueToRead}`))
        .catch((error) => alert(`Ocurrio un error ${error}`));
    }
  };

  return (
    <div className="flex w-min p-6">
      <input
        ref={refInput}
        className="border-2 border-red-600 rounded focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700"
        type="text"
        readOnly
        value={clipTextValue}
      />
      <div className="ml-6 relative">
        <span onClick={handleClick}>icon</span>
        <span className="absolute -left-3 -top-6">Copiado</span>
      </div>
    </div>
  );
};
