interface InputFileProps {
  /**
   * The label to display above the input.
   */
  label: string;
  /**
   * Text to display in the input.
   */
  placeholder: string;
  /**
   * The index of the element when pressing tab
   */
  tabIndex: number;
  /**
   * The extend of the properties of the HTMLInputElement
   */
  props?: HTMLInputElement;
}

/**
 * Input File Default
 */

export const InputFile = ({ tabIndex, label, placeholder }: InputFileProps) => {
  return (
    <div className="flex flex-col">
      <label className="font-semibold text-sm text-gray-600" htmlFor="file">
        {label}
      </label>
      <label
        tabIndex={tabIndex}
        onKeyDown={(e: any) => e.key === "Enter" && e.target.click()}
        className="flex justify-center items-center font-bold text-base pt-4 pb-4 bg-gray-500 text-gray-600 rounded"
        htmlFor="file"
      >
        <svg
          className="w-4 h-4 fill-gray-600 flex justify-center items-center mr-2"
          viewBox="0 0 19 18"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.07153 18C1.52153 18 1.05053 17.8043 0.658533 17.413C0.2672 17.021 0.0715332 16.55 0.0715332 16V2C0.0715332 1.45 0.2672 0.979 0.658533 0.587C1.05053 0.195667 1.52153 0 2.07153 0H16.0715C16.6215 0 17.0925 0.195667 17.4845 0.587C17.8759 0.979 18.0715 1.45 18.0715 2V16C18.0715 16.55 17.8759 17.021 17.4845 17.413C17.0925 17.8043 16.6215 18 16.0715 18H2.07153ZM2.07153 16H16.0715V2H2.07153V16ZM3.07153 14H15.0715L11.3215 9L8.32153 13L6.07153 10L3.07153 14Z" />
        </svg>
        {placeholder}
      </label>
      <input type="file" id="file" className="hidden" />
      <p className="font-normal text-xs text-gray-600">1500 x 600. Max. 5MB</p>
    </div>
  );
};
