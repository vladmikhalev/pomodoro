import React from 'react';
import styles from './btnmiss.module.css';

interface IBtnMissProps {
  handleCickMiss: () => void;
}

export function BtnMiss({handleCickMiss}: IBtnMissProps) {
  return (
    <button className={styles.btnMiss} onClick={handleCickMiss}>Пропустить</button>
  );
}
