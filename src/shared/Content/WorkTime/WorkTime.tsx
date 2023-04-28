import React from 'react';
import { Task } from '../../../store/taskSlice';
import styles from './worktime.module.css';

interface IPropTasks {
  tasks: Task[]
}

export function WorkTime({tasks}: IPropTasks) {
  const allTomato = tasks.reduce((acc, task) => acc + task.amountTomatos, 0);
  const time = `${Math.floor((allTomato * 25) / 60)} час ${(allTomato * 25) % 60} мин`;


  return (
    <p className={styles.time}>
      {time}
    </p>
  );
}
