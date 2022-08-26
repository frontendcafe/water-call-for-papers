import React, { useRef } from "react";

interface ClipProps {
  clipTextValue: string;
}

export const Clip = ({ clipTextValue }: ClipProps) => {
  const refInput = useRef(null);

  return (
    <div className="flex  w-min">
      <input
        ref={refInput}
        className="border-2 border-red-600 rounded focus:outline-none focus:ring focus:ring-violet-300 active:bg-violet-700"
        type="text"
        readOnly
        value={clipTextValue}
      />
      <div className="ml-1">icon</div>
    </div>
  );
};
