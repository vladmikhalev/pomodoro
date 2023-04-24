import React from 'react';
import styles from './taskitem.module.css';
import { Menu } from './Menu';

interface ITaskItemProps {
  title: string;
}


export function TaskItem({title}: ITaskItemProps) {
  return (
    <li className={styles.itemTask}>
      <span className={styles.number}>1</span>
      {title}
      <Menu />
    </li>
  );
}
