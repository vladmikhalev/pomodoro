import React from 'react';
import styles from './btnstart.module.css';

interface IBtnStartProps {
  // isStarted: boolean;
  // id: string;
  // timeTimer: number;
  // isPaused: boolean;
  handleClickStart: () => void;
}

export function BtnStart({ handleClickStart }: IBtnStartProps) {



  // function handleClickStart() {
  //   dispatch(setIsStarted({ id: id, isStarted: true }));
  // }
  


  return (
    <button className={styles.btnStart} onClick={handleClickStart}>Старт</button>
  );
}
