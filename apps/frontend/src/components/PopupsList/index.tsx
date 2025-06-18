import { FC } from "react";
import { createPortal } from "react-dom";
import { Popup } from "@ui/PopUp";
import { useAppSelector } from "@hooks/redux";
import { popupsListSelector } from "@selectors/popupsListSelector";

export const PopupList: FC = () => {
  const popups = useAppSelector(popupsListSelector);

  return createPortal(
    <div className="fixed bottom-6 right-6 flex flex-col items-end gap-4 z-[50]">
      {popups.map((popup, index) => (
        <Popup
          key={popup.key ?? index}
          duration={popup.duration}
          popupKey={popup.key ?? index}
          message={popup.message}
          messageType={popup.messageType}
        />
      ))}
    </div>,
    document.body
  );
};
