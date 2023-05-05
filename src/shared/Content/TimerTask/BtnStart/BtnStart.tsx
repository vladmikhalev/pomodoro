import React from 'react';
import styles from './btnstart.module.css';

interface IBtnStartProps {
  handleClickStart: () => void;
}

export function BtnStart({ handleClickStart }: IBtnStartProps) {

  


  return (
    <button className={styles.btnStart} onClick={handleClickStart}>Старт</button>
  );
}
