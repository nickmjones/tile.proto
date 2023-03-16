import React from 'react';
import styles from '../assets/styles/modules/Canvas.module.scss';

import CountUp from 'react-countup';

import attach from '../assets/images/attach.png'
import connect from '../assets/images/connect.png'
import find from '../assets/images/find.png'

import mate from '../assets/images/mate_lg.png'
import label from '../assets/images/label_lg.png'
import slim from '../assets/images/slim_lg.png'
import sticker from '../assets/images/sticker_lg.png'
import pro from '../assets/images/pro_lg.png'

import logo from '../assets/images/tl.png'

import { ButtonDefault } from './Button';

const Canvas = () => {
  return (
    <div className={styles.canvas}>

      <h3>Who knew peace of mind <br/>could be so small and easy?</h3>

      <div className={styles.cards}>
        <div className={styles.card}>
          <img src={attach} alt="" />
          <h4>Attach it</h4>
          <p>There’s a Tile for almost anything— like wallets, keys, and more.</p>
        </div>

        <div className={styles.card}>
          <img src={connect} alt="" />
          <h4>Connect it</h4>
          <p>Open the Tile app and push the Tile button. That’s the whole setup. </p>
        </div>

        <div className={styles.card}>
          <img src={find} alt="" />
          <h4>Find it</h4>
          <p>Find things easily through the app. Just push ‘Find’ and follow the tune.</p>
        </div>
      </div>

      <div className={styles.stats}>
        <div className={styles.statblock}>
          <h1>
            <CountUp enableScrollSpy={true} scrollSpyOnce={true} scrollSpyDelay={200} end={983}></CountUp>
          </h1>
          <h5>Keys found every year</h5>
        </div>

        <div className={styles.statblock}>
          <h1>
            <CountUp enableScrollSpy={true} scrollSpyOnce={true} scrollSpyDelay={400} end={561}></CountUp>
          </h1>
          <h5>Wallets found every year</h5>
        </div>

        <div className={styles.statblock}>
          <h1>
            <CountUp enableScrollSpy={true} scrollSpyOnce={true} scrollSpyDelay={600} end={289}></CountUp>
          </h1>
          <h5>Luggage found per year</h5>
        </div>
      </div>

      <div className={styles.quote}>
        <h4>“Shoppers would give this wallet bluetooth tracker 'more than 5 stars' if they could.”</h4>
        <img src={logo} alt=""></img>
      </div>

      <div className={styles.catalog}>
        <h3>Lots of smart shapes and sizes <br/> make Tile an easy choice.</h3>

        <div className={styles.products}>
          <div className={styles.product}>
            <img src={pro} alt="" />
            <h4>Pro</h4>
            <p>With a replaceable battery and our longest range yet.</p>
          </div>

          <div className={styles.product}>
            <img src={mate} alt="" />
            <h4>Mate</h4>
            <p>The original. Perfect for keys, pet tags, and more.</p>
          </div>

          <div className={styles.product}>
            <img src={slim} alt="" />
            <h4>Slim</h4>
            <p>Super small, super sticky. Perfect for remotes & cameras.</p>
          </div>

          <div className={styles.product}>
            <img src={sticker} alt="" />
            <h4>Sticker</h4>
            <p>For wallets or where space is at a premium.</p>
          </div>

          <div className={styles.product}>
            <img src={label} alt="" />
            <h4>Lost & Found Labels</h4>
            <p>Super small, super sticky. Perfect for remotes & cameras.</p>
          </div>
        </div>

        <div className={styles.roadblock}>
          <ButtonDefault>Shop All</ButtonDefault>
        </div>
        
      </div>

    </div>
  )
}

export default Canvas