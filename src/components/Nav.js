import React from "react";
import styles from '../assets/styles/modules/Nav.module.scss';

const Nav = () => {
  return(
    <div className={styles.navigation}>
      <div className={styles.box}>Logo</div>

      <ul className={styles.links}>
        <div className={styles.item}>Shop Products</div>
        <div className={styles.item}>How It Works</div>
        <div className={styles.item}>Blog</div>
        <div className={styles.itemSpecial}>Sale</div>
      </ul>

      <div className={styles.box}>Cart Icon</div>
    </div>
  )
}

export default Nav