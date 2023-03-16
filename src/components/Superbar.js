import React from "react";
import styles from '../assets/styles/modules/Superbar.module.scss';

const Superbar = () => {
  return <div className={styles.wrapper}>
    <div className={styles.item}>Help</div>
    <div className={styles.item}>US Store</div>
    <div className={styles.item}>Log In</div>
  </div>;
}


export default Superbar;
