import React from "react";
import styles from "../assets/styles/modules/Button.module.scss";

const ButtonBranded = ({children}) => {
  return <div className={styles.buttonBranded}>{children}</div>
}

const ButtonDefault = ({children}) => {
  return <div className={styles.buttonDefault}>{children}</div>
}

export {ButtonBranded, ButtonDefault}