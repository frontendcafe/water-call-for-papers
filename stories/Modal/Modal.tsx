import React, { useEffect, useRef, Fragment, ReactNode } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Icon } from "../Icon/Icon";

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
  /**
   * The size of the modal.
   */
  size: "medium" | "large";
}

export const Modal = ({
  open,
  setIsOpen,
  children,
  size = "medium",
}: ModalProps) => {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  const modalWidth = { large: "max-w-2xl", medium: "max-w-sm" };

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
                className={`w-full ${modalWidth[size]} relative transform overflow-hidden rounded-xl pt-8 pl-6 pr-6 pb-4 bg-white shadow-xl transition-all`}
              >
                <div className="flex justify-end">
                  <button
                    autoFocus
                    ref={closeButtonRef}
                    aria-label="Cerrar"
                    onClick={() => setIsOpen(false)}
                    className="absolute"
                  >
                    <Icon iconName="xmark" size="medium" color="text-indigo-600" />
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
