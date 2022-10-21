import { useState, useRef, DragEvent, KeyboardEvent } from "react";
import { Icon } from "../Icon/Icon";

interface InputFileProps {
  /**
   * The label to display above the input.
   */
  label: string;
  /**
   * To hide the label text for users but not for screen readers.
   */
  labelHidden?: boolean;
  /**
   * Text to display in the input.
   */
  placeholder: string;
  /**
   * The description to display below the input.
   */
  description?: string;
  /**
   * The extend of the properties of the HTMLInputElement
   */
  props?: HTMLInputElement;
}

/**
 * Input File Default
 */

export const InputFile = ({
  label,
  labelHidden,
  placeholder,
  description,
}: InputFileProps) => {
  const [dragActive, setDragActive] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFile(files: FileList) {
    alert("Numero de archivos: " + files.length);
  }

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  // handle drag events
  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e: DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files);
    }
  };

  return (
    <div className="flex flex-col">
      <label
        className={`text-sm font-semibold text-gray-900 ${
          labelHidden ? "sr-only" : ""
        }`}
        htmlFor="file"
      >
        {label}
      </label>
      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        onClick={onButtonClick}
        onKeyDown={(e: KeyboardEvent<HTMLDivElement>) =>
          e.key === "Enter" && e.currentTarget.click()
        }
        className={`border border-[#4B64EF] gap-2 borde mt-1 flex justify-center items-center font-bold text-base pt-4 pb-4 text-[#4B64EF] rounded cursor-pointer ${
          dragActive ? "bg-gray-400" : "bg-[#E5E5FF]"
        }`}
        tabIndex={0}
      >
        {placeholder}
        <Icon iconName="photo" />
        <input ref={inputRef} type="file" id="file" className="hidden" />
      </div>
      {description && (
        <p className={`font-normal text-xs text-gray-600`}>{description}</p>
      )}
    </div>
  );
};
