import { nanoid } from 'nanoid';
import React, { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch } from '../../../hooks/hook';
import { addTaskStatistics } from '../../../store/statisticsSlice';
import { addTask } from '../../../store/taskSlice';
import styles from './formaddtask.module.css';



export function FormAddTask() {
  const dispatch = useAppDispatch();
  const [title, setTitle] = React.useState('');
  
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (title.trim().length) {
      const id = nanoid(10);
      dispatch(addTask({ title, id: id }));
      dispatch(addTaskStatistics({ id: id, nameTask: title }));
      setTitle('');
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleChange} className={styles.inputAddTask} placeholder="Название задачи" />
      <button type="submit" className={styles.btnAdd} >Добавить</button>
    </form>
  );
}
