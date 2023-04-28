import React from 'react';
import { useAppSelector } from '../../../hooks/hook';
import { Task } from '../../../store/taskSlice';
import { TaskItem } from './ItemTask';
import styles from './tasklist.module.css';

export function TaskList() {
  const tasks = useAppSelector(state => state.tasks.list);
  // console.log(tasks);
  
  return (
    <ul className={styles.cardList}>
      {tasks.length !== 0 && tasks.map((task: Task) => (
        <TaskItem task={task} key={task.id}/>
      ))}


    </ul>
  );
}
