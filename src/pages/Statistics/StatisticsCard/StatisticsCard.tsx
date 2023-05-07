import React from 'react';
import { getPauseTime } from '../../../utils/function/getPauseTime';
import { IAcc } from '../ChartBlock';
import styles from './statisticscard.module.css';

interface IStatisticsCardProps {
  dailyStatistics: IAcc;
}

export function StatisticsCard({ dailyStatistics }: IStatisticsCardProps) {
  const [focus, setFocus] = React.useState(0);
  const [isData, setIsData] = React.useState(false);
  React.useEffect(() => {
    if (dailyStatistics.complitedTomatos === 0) {
      setIsData(false);
      setFocus(0);
    } else {
      setIsData(true);
      const result = (dailyStatistics.complitedTomatos * 25) / ((dailyStatistics.workTime + dailyStatistics.pauseTimeTotal) / 10000);
      result >= 1 ? setFocus(100) : setFocus(result / 0.01);
    }
  }, [dailyStatistics]);

  return (
    <div className={styles.statist}>

      <div className={styles.card} style={{backgroundColor: isData ? '#FFDDA9' : '#F4F4F4'}}>
        <div className={styles.cont}>
          <h3 className={styles.subtitle}>Фокус</h3>
          <span className={styles.percent}>{isData ? `${focus} %` : '0 %'}</span>
        </div>
        <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z" stroke={isData ? '#FFAE35' : '#C4C4C4'} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M57.5 95C78.2107 95 95 78.2107 95 57.5C95 36.7893 78.2107 20 57.5 20C36.7893 20 20 36.7893 20 57.5C20 78.2107 36.7893 95 57.5 95Z" stroke={isData ? '#FFAE35' : '#C4C4C4'} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M57.5 78C68.8218 78 78 68.8218 78 57.5C78 46.1782 68.8218 37 57.5 37C46.1782 37 37 46.1782 37 57.5C37 68.8218 46.1782 78 57.5 78Z" stroke={isData ? '#FFAE35' : '#C4C4C4'} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className={styles.card} style={{backgroundColor: isData ? '#DFDCFE' : '#F4F4F4'}}>
        <div className={styles.cont}>
          <h3 className={styles.subtitle}>Время на паузе</h3>
          <span className={styles.percent}>{isData ? getPauseTime(dailyStatistics.pauseTimeTotal) : '0 м'}</span>
        </div>
        <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z" stroke={isData ? '#9C97D7' : '#C4C4C4'} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M57.3154 30.1579V57.3158L70.8944 70.8947" stroke={isData ? '#9C97D7' : '#C4C4C4'} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className={styles.card} style={{backgroundColor: isData ? '#C5F1FF' : '#F4F4F4'}} >
        <div className={styles.cont}>
          <h3 className={styles.subtitle}>Остановки</h3>
          <span className={styles.percent}>{isData ? dailyStatistics.stops : 0}</span>
        </div>
        <svg width="115" height="115" viewBox="0 0 115 115" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M57.3158 111.632C87.3136 111.632 111.632 87.3136 111.632 57.3158C111.632 27.318 87.3136 3 57.3158 3C27.318 3 3 27.318 3 57.3158C3 87.3136 27.318 111.632 57.3158 111.632Z" stroke={isData ? '#7FC2D7' : '#C4C4C4'} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M21 20L95 94" stroke={isData ? '#7FC2D7' : '#C4C4C4'} strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

    </div>
  );
}
