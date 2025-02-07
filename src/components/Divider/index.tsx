import React from "react";
import styles from "./Divider.module.css";

type DividerProps = {
  className?: string;
};

export const Divider: React.FC<DividerProps> = ({ className }) => {
  return (
    <p
      className={`${className} container flex justify-between items-center ${styles.divider} gap-2`}
    >
      or
    </p>
  );
};
