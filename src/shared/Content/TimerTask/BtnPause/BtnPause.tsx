import React from 'react';
import styles from './btnpause.module.css';

interface IBtnPauseProps {
  isPaused: boolean;
  handleClickPause: () => void;
}

export function BtnPause({ isPaused, handleClickPause }: IBtnPauseProps) {


  return (
    <button className={styles.btnPause} onClick={handleClickPause} >{isPaused ? 'Продолжить' : 'Пауза' }</button>
  );
}

