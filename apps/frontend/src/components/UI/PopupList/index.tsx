import { FC } from "react";
import { Popup } from "../PopUp";
import { PopupElement } from "../../../types/popup-element";

type PopupListProps = {
  popups: PopupElement[];
};

export const PopupList: FC<PopupListProps> = ({ popups }) => {
  return (
    <>
      {popups.map((popup, index) =>
        popup.show ? (
          <Popup key={popup.key ?? index}>{popup.content}</Popup>
        ) : null,
      )}
    </>
  );
};
