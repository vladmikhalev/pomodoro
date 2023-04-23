import React from 'react';
import { BtnStart } from './BtnStart';
import { BtnStop } from './BtnStop';
import styles from './timertask.module.css';

export function TimerTask() {
  return (
    <div className={styles.timerTask}>
      <div className={styles.header}>
        <span className={styles.headerTask}>Сверстать сайт</span>
        <span className={styles.numberPomodor}>Помидор 1</span>
      </div>
      <div className={styles.content}>
        <span className={styles.timer}>25:00</span>
        <span className={styles.task}>
          <span className={styles.numberTask}>Задача 1 - </span>
          Сверстать сайт
        </span>
        <div className={styles.btnGroup}>
          <BtnStart />
          <BtnStop />
        </div>
      </div>
    </div>
  );
}
