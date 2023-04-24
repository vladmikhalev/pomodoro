import React, { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch } from '../../../hooks/hook';
import { addTask } from '../../../store/taskSlice';
import styles from './formaddtask.module.css';
// import { nanoid } from 'nanoid';



export function FormAddTask() {
  const dispatch = useAppDispatch();
  // const [taskList, setTaskList] = React.useState<ITaskList[]>([]);
  const [text, setText] = React.useState('');
  
  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (text.trim().length) {
      dispatch(addTask(text));
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setText(event.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={handleChange} className={styles.inputAddTask} placeholder="Название задачи" />
      <button type="submit" className={styles.btnAdd}>Добавить</button>
    </form>
  );
}
