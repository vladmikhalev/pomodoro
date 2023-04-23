import React from 'react';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <button className={styles.logoBtn}>
          <img className={styles.logoIcon} src="/assets/images/tomato-logo.svg" alt="logo pomodoro" />
          <span className={styles.logoText}>pomodoro_box</span>
        </button>
        <button className={styles.statisticsBtn}>
          <svg className={styles.statisticsSvg} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 16H10V0H6V16ZM0 16H4V8H0V16ZM12 5V16H16V5H12Z" fill="#DC3E22" />
          </svg>
          <span className={styles.statisticsText}>Статистика</span>
        </button>
      </div>
    </header>
  );
}
