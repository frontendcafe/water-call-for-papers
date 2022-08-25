import { useEffect, Fragment, MouseEvent } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProps {
  /**
   * The label to display above the input.
   */
  handleOpen: Function;
  open: boolean;
}

export const Modal = ({ open, handleOpen }: ModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={handleOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-white bg-opacity-25" />
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
              <Dialog.Panel className="w-full max-w-[407px] transform overflow-hidden rounded-xl p-4 bg-gray-500 shadow-xl transition-all">
                <div className="w-[375px] rounded-xl bg-white">
                  <div className="flex justify-end">
                    <button
                      onClick={handleOpen}
                      className="mt-5 mr-5 text-2xl font-normal text-gray-600"
                    >
                      X
                    </button>
                  </div>
                  <div className="flex p-[15px]"></div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};
