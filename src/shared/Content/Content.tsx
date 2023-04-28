import React from 'react';
import { Description } from './Description';
import styles from './content.module.css';
import { TimerTask } from './TimerTask';
import { TaskList } from './TaskList';
import { FormAddTask } from './FormAddTask';
import { WorkTime } from './WorkTime';
import { useAppSelector } from '../../hooks/hook';




export function Content() {
  const tasks = useAppSelector(state => state.tasks.list);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h1 className={styles.header}>Pomodoro</h1>
        <div className={styles.content}>
          <div className={styles.blockDescr}>
            <Description />
            <FormAddTask />
            <TaskList />
            {tasks.length !== 0 && <WorkTime tasks={tasks} />}
          </div>
          {tasks && tasks.length !== 0 && <TimerTask tasks={tasks} />}

        </div>
      </div>
    </section>
  );
}
