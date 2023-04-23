import React from 'react';
import { BtnAddTasks } from './BtnAddTasks';
import { Description } from './Description';
import { InputAddTasks } from './InputAddTasks';
import styles from './content.module.css';
import { TimerTask } from './TimerTask';

export function Content() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.header}>Скрытый заголовок</h1>
        <div className={styles.content}>
          <div className={styles.blockDescr}>
            <Description />
            <InputAddTasks />
            <BtnAddTasks />
          </div>
          <TimerTask />
        </div>
      </div>
    </section>
  );
}
