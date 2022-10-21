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
        className={`font-semibold text-secondary-900 ${
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
        className={`flex items-center justify-center gap-2 py-4 mt-1 font-medium border cursor-pointer hover:bg-primary-100 border-primary-700 hover:ring-1 text-primary-700 rounded-xl ${
          dragActive ? "bg-gray-400" : "bg-primary-50"
        }`}
        tabIndex={0}
      >
        {placeholder}
        <Icon iconName="arrowUpTray" />
        <input ref={inputRef} type="file" id="file" className="hidden" />
      </div>
      {description && (
        <p className="flex items-center gap-1 mt-1 ml-2 text-xs text-secondary-700">
          <Icon iconName="exclamationCircleIconOutline" size="small" />
          {description}
        </p>
      )}
    </div>
  );
};
