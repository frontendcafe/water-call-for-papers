import React, { useEffect, useRef, Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProps {
  /**
   * The set function to change the state.
   */
  setIsOpen: (value: boolean) => void;
  /**
   * The value to the open state or close.
   */
  open: boolean;
  /**
   * The children node.
   */
  children: ReactNode;

  size: "small" | "medium" | "large";
}

export const Modal = ({
  open,
  setIsOpen,
  children,
  size = "medium",
}: ModalProps) => {
  const closeButtonRef = useRef(null);

  let width;

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  if (size == "large") {
    width = "max-w-[608px]";
  } else if (size == "medium") {
    width = "max-w-[360px]";
  }

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog
        as="div"
        className="relative z-10"
        initialFocus={closeButtonRef}
        onClose={() => setIsOpen(false)}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div
            className="fixed inset-0 bg-black bg-opacity-25"
            aria-hidden="true"
          />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full ${width} relative transform overflow-hidden rounded-xl pt-8 pl-6 pr-6 pb-4 bg-white shadow-xl transition-all`}
              >
                <div className="flex justify-end">
                  <button
                    autoFocus
                    ref={closeButtonRef}
                    aria-label="Cerrar"
                    onClick={() => setIsOpen(false)}
                    className="absolute"
                  >
                    <svg
                      className="w-5 h-5 fill-indigo-600"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <div className="flex flex-col gap-4">{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
