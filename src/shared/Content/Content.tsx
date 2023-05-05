import React from 'react';
import { Description } from './Description';
import styles from './content.module.css';
import { TimerTask } from './TimerTask';
import { TaskList } from './TaskList';
import { FormAddTask } from './FormAddTask';
import { WorkTime } from './WorkTime';
import { useAppSelector } from '../../hooks/hook';
import { CSSTransition } from 'react-transition-group';




export function Content() {
  const tasks = useAppSelector(state => state.tasks.list);
  const [isOpen, setIsOpen] = React.useState(false);
  React.useEffect(() => {
    setIsOpen(tasks.length !== 0);
  }, [tasks]);

  const transitionClasses = {
    enterActive: styles.itemEnterActive,
    exitActive: styles.itemExitActive,
  };
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

          {tasks.length !== 0 && (
            <CSSTransition
              in={isOpen}
              mountOnEnter
              unmountOnExit
              timeout={500}
              classNames={transitionClasses}
            >
              <TimerTask tasks={tasks} />
            </CSSTransition>
          )}

        </div>
      </div>
    </section>
  );
}

