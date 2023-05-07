import React from 'react';
import { useAppDispatch } from '../../../../hooks/hook';
import { setTimeTimer } from '../../../../store/taskSlice';
import styles from './btnaddtime.module.css';

interface IBtnAddTimeProps {
id: string;
timeTimer: number;
}

export function BtnAddTime({ id, timeTimer }: IBtnAddTimeProps) {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(setTimeTimer({ id: id, time: timeTimer + 60000 }));
  }

  return (
    <button className={styles.btnAddTime} onClick={handleClick}>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.27559 9.13215V16H6.72441V9.13215H0V6.70291H6.72441V0H9.27559V6.70291H16V9.13215H9.27559Z" fill="white" />
      </svg>
    </button>
  );
}
