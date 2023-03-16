import React from "react";
import styles from '../assets/styles/modules/Seatbelt.module.scss';

import label from '../assets/images/label.png'
import sticker from '../assets/images/sticker.png'
import mate from '../assets/images/mate.png'
import slim from '../assets/images/slim.png'
import pro from '../assets/images/pro.png'

const Seatbelt = () => {
  return(
    <div className={styles.wrapper}>
      <div className={styles.product}>
        <img src={pro} alt=""></img>
        Pro
      </div>
      <div className={styles.product}>
        <img src={mate} alt=""></img>
        Mate
      </div>
      <div className={styles.product}>
        <img src={slim} alt=""></img>
        Slim
      </div>
      <div className={styles.product}>
        <img src={sticker} alt=""></img>
        Sticker
      </div>
      <div className={styles.product}>
        <img src={label} alt=""></img>
        Lost & Found Labels
      </div>
    </div>
  )
}

export default Seatbelt