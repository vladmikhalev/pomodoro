import React from 'react';
import { Description } from './Description';
import styles from './content.module.css';
import { TimerTask } from './TimerTask';
import { TaskList } from './TaskList';
import { FormAddTask } from './FormAddTask';

export function Content() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.header}>Pomodoro</h1>
        <div className={styles.content}>
          <div className={styles.blockDescr}>
            <Description />
            <FormAddTask />
            <TaskList />
          </div>
          <TimerTask />
        </div>
      </div>
    </section>

  );
}
