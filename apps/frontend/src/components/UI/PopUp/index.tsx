import { useState } from "react";
import { ComponentWithChildren } from "../../../types/component-with-children";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";
import CrossIcon from "../../../assets/icons/cross.svg";

type PopupProps = {
  classname?: string;
  duration?: number;
};

export const Popup: ComponentWithChildren<PopupProps> = ({
  classname = "",
  children,
  duration = 5000,
}) => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  const startCloseAnimation = () => {
    setIsClosing(true);
    setTimeout(() => setIsVisible(false), 500);
  };

  if (!isVisible) return null;

  return createPortal(
    <div
      className={`fixed bottom-6 right-6 z-50 bg-surface border border-subtle-light rounded-2xl shadow-lg w-[320px] p-2 flex flex-col gap-3 ${
        isClosing ? styles["animate-slide-down"] : styles["animate-slide-up"]
      } ${classname}`}>
      <div className="relative">
        <button
          onClick={() => {
            startCloseAnimation();
          }}
          className="absolute top-0 right-0 text-gray-400 hover:text-gray-700">
          <img
            src={CrossIcon}
            alt="Close"
            className="w-4 h-4"
          />
        </button>
        <div className="h-2" />
      </div>

      <hr className="border-t border-subtle-light my-1" />

      <div>{children}</div>

      <div className="h-2 w-full bg-subtle-light rounded-full overflow-hidden mt-2">
        <div
          className={`${styles["animate-progress"]} bg-primary h-full`}
          style={{
            animationDuration: `${duration}ms`,
          }}
          onAnimationEnd={startCloseAnimation}
        />
      </div>
    </div>,
    document.body,
  );
};
