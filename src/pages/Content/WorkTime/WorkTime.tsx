import React from 'react';
import { Task } from '../../../store/taskSlice';
import { normalizeCountForm } from '../../../utils/function/normalizeCountForm';
import styles from './worktime.module.css';

interface IPropTasks {
  tasks: Task[]
}

export function WorkTime({tasks}: IPropTasks) {
  let allWorkTime = tasks.reduce((acc, task) => acc + (task.timeTimer * task.amountTomatos), 0);
  allWorkTime = allWorkTime / 1000 / 60;
  const hours = Math.floor(allWorkTime / 60);
  const minutes = allWorkTime - hours * 60;
  const rounded = Math.trunc(minutes);
  const resultMin = rounded === 0 ? minutes.toFixed(1) : minutes.toFixed(0);
  let time;
  if (hours > 0) {
    time = `${normalizeCountForm(hours, ['час', 'часа', 'часов'])} ${normalizeCountForm(+resultMin, ['минуты', 'минуты', 'минут'])} `;
  } else {
    time =  normalizeCountForm(+resultMin, ['минуты', 'минут', 'минут']);
  }
  return (
    <p className={styles.time}>
      {time}
    </p>
  );
}
