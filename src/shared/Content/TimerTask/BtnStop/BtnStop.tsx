import React from 'react';
import styles from './btnstop.module.css';

interface IBtnStopProps {
  isPaused: boolean;
  isStarted: boolean;
  handleCickDone: () => void;
  handleCickStop: () => void;
}

export function BtnStop({ isPaused, isStarted, handleCickDone, handleCickStop}: IBtnStopProps) {


  return (
    isPaused && isStarted
      ? <button className={styles.btnStop} onClick={handleCickDone}>Сделано</button>
      : <button className={styles.btnStop} onClick={handleCickStop}>Стоп</button>

  );
}
