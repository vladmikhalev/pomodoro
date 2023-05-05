import React, { ChangeEvent, FormEvent } from 'react';
import styles from './taskitem.module.css';
import { Menu } from './Menu';
import { editTask, Task } from '../../../../store/taskSlice';
import { useAppDispatch } from '../../../../hooks/hook';
import { FormEdit } from '../../../FormEdit';
import { Route, Routes } from 'react-router-dom';
import { ModalDelete } from '../../../ModalDelete';
import { editTaskStatistics } from '../../../../store/statisticsSlice';

interface ITaskItemProps {
  task: Task
}


export function TaskItem({ task }: ITaskItemProps) {
  const dispatch = useAppDispatch();
  const [title, setTitle] = React.useState(task.title);
  const [isEdit, setIsEdit] = React.useState(false);

  function handleEditTask() {
    setIsEdit(true);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!title.trim().length) {
      dispatch(editTask({ id: task.id, title: task.title }));
      dispatch(editTaskStatistics({ id: task.id, nameTask: task.title }));
      
      setTitle(task.title);
    } else {
      dispatch(editTask({ id: task.id, title: title }));
      dispatch(editTaskStatistics({ id: task.id, nameTask: title }));
    }
    setIsEdit(false);
  }


  return (
    <>
      <li className={styles.itemTask}>
        <span className={styles.number}>{task.amountTomatos}</span>
        {isEdit ? (
          <FormEdit handleSubmit={handleSubmit} title={title} handleChange={handleChange} />
        ) : (<span className={styles.text}>{task.title}</span>)}
        <Menu handleEditTask={handleEditTask} id={task.id} amountTomatos={task.amountTomatos} />
      </li>
      <Routes>
        {/* <Route path={`/remove/task-${task.id}`} element={<ModalDelete id={task.id} />} /> */}
        <Route path={'/remove-task/:id'} element={<ModalDelete id={task.id} />} />
      </Routes>
    </>
  );
}

