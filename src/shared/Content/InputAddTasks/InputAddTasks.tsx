import React from 'react';
import styles from './inputaddtasks.module.css';

export function InputAddTasks() {
  return (
    <input type="text" className={styles.inputAddTask} placeholder="Название задачи" />
  );
}
