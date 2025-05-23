import { ReactNode } from "react";

export type PopupElement = {
  content: ReactNode;
  key?: string | number;
  show: boolean;
};
