import React from "react";
import { reggaeOne } from "@/lib/fonts/fonts";
import styles from "@/components/Header/header.module.css";

export const Header = () => {
  return (
    <div
      className={` ${styles.header} ${reggaeOne.className}` } 
    >
      <h1>The Contact Keeper</h1>
    </div>
  );
};
