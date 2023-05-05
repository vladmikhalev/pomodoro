import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useAppSelector } from '../../../hooks/hook';
import { Task } from '../../../store/taskSlice';
import { TaskItem } from './ItemTask';
import styles from './tasklist.module.css';

export function TaskList() {
  const tasks = useAppSelector(state => state.tasks.list);

  const transitionClasses = {
    enterActive: styles.itemEnterActive,
    exitActive: styles.itemExitActive,
  };

  return (
    <ul className={styles.cardList}>
      <TransitionGroup >
        {tasks.length !== 0 && tasks.map((task: Task) => (
          <CSSTransition
            key={task.id}
            timeout={500}
            classNames={transitionClasses}
          >
            <TaskItem task={task} key={task.id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
}
