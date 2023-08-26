import React, { useState, useContext } from "react";
import styles from './Card.module.css';
import { AppContext } from '../../../App';

export default function Card(props) {
  const { theme } = useContext(AppContext);

  return <div
    className={styles.card}
    style={{
      backgroundColor: theme.primaryColor
    }}
  >{props.children}</div>

}
