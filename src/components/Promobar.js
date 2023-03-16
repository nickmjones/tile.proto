import React from "react";
import styles from '../assets/styles/modules/Promobar.module.scss';

const Promobar = () => {
  return(
    <div className={styles.wrapper}>
      <strong>Free Shipping on Orders Over $35</strong><br/>
      Use code 25OFF on select bundles at checkout →
    </div>
  )
}

export default Promobar