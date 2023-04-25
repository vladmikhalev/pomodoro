import React, { ChangeEvent, FormEvent } from 'react';
import styles from './formedit.module.css';

interface IFormProps {
  handleSubmit: (event: FormEvent) => void;
  title: string;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}




export function FormEdit({ handleSubmit, title, handleChange }: IFormProps) {

  return (
    <form onSubmit={handleSubmit} >
      <input
        autoFocus={true}
        spellCheck="false"
        className={styles.editInput}
        type="text"
        value={title}
        onChange={handleChange}
        onBlur={handleSubmit}
        style={{
          width: ((title.length + 2) * 9) + 'px',
        }}
      />
    </form>
  );
}
