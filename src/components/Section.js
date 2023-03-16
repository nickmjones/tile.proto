import React from "react";
import styles from '../assets/styles/modules/Section.module.scss';

const Section = ({children}) => {
  return(
    <section className={styles.container}>
      {children}
    </section>
  )
}

export default Section