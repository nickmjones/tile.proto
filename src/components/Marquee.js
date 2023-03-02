import React from "react";
import styles from '../assets/styles/modules/Marquee.module.scss';

const Marquee = ({children}) => {
  return <div classname={styles.wrapper}>{children}</div>;
}


export default Marquee;
