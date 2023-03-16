import React from "react";
import styles from '../assets/styles/modules/Marquee.module.scss';
import { ButtonBranded } from './Button';

const Marquee = () => {
  return(
    <div className={styles.marquee}>
      <div className={styles.content}>
        <h1>Finders for your keepers</h1>
        <h4>Put Tile on the things you love. Find them if they ever get lost. Works on Android and iPhone.</h4>
        <ButtonBranded>Shop Now</ButtonBranded>
      </div>
    </div>
  )
}


export default Marquee;
