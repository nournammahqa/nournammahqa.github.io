import classNames from "classnames";
import { IModal, ModalResult } from "interfaces";
import {
  ElementType,
  FC,
  MutableRefObject,
  useCallback,
  useRef,
  useState,
} from "react";
import { useLockPage } from "./useLockPage";
import { useClickOutside } from "./use-click-outside";
import ReactDOM from "react-dom";
import { FaX } from "react-icons/fa6";

const useModal = (): [ElementType<IModal>, ModalResult] => {
  const ref = useRef() as MutableRefObject<HTMLDivElement>;
  const [isOpen, setOpen] = useState(false);
  const { lockScroll, unlockScroll } = useLockPage();
  useClickOutside(ref);
  const open = useCallback(() => {
    setOpen(true);
    lockScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = useCallback(() => {
    setOpen(false);
    unlockScroll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const ModalWrapper: FC<IModal> = useCallback(
    ({ children, className = "" }) => {
      return ReactDOM.createPortal(
        <>
          <div
            className={classNames(
              `fixed top-0 left-0 w-full h-full z-[1001] transform transition-all duration-300 overflow-y-auto scroll-container`,
              {
                "inset-0 open-modal": isOpen,
                "inset-0 close-modal": !isOpen,
              }
            )}
          >
            <div className="flex items-center min-h-screen px-4 py-8">
              <div
                className={classNames(
                  `relative w-full max-w-4xl p-5 z-20 mx-auto transition_300 rounded-3xl shadow-2xl ${className}`,
                  {
                    "opacity-100 scale-100": isOpen,
                    "opacity-0 scale-0": !isOpen,
                  }
                )}
                style={{
                  background: 'rgba(27, 22, 52, 0.8)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(232, 110, 205, 0.2)',
                  boxShadow: '0 8px 32px 0 rgba(232, 110, 205, 0.3), inset 0 0 40px rgba(255, 255, 255, 0.05)',
                }}
                ref={ref}
              >
                <div
                  className="absolute top-4 right-4 text-[#f7b543] hover:text-[#6ad5cb] cursor-pointer z-[1121] transition-all duration-300 hover:scale-110"
                  onClick={() => close()}
                >
                  <FaX />
                </div>
                {children}
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="fixed inset-0 h-screen w-screen bg-black z-10 opacity-40"></div>
          )}
        </>,
        document.getElementById("modal") as Element | DocumentFragment
      );
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isOpen]
  );
  return [ModalWrapper, { isOpen, open, close }];
};

export default useModal;
