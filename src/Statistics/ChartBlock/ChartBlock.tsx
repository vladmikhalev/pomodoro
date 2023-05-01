import React from 'react';
// import { IObject } from '../../store/statisticsSlice';
import styles from './chartblock.module.css';

interface IChartBlockProps {
  filteredList: any[];
  dailyStatistics: any;
  setDailyStatistics: (obj: any) => void;
}

export function ChartBlock({filteredList, dailyStatistics, setDailyStatistics}: IChartBlockProps) {
  return (
    <div className={styles.chartBlock}>
      <div className={styles.wrapper}>
        <h3 className={styles.subtitle}>Понедельник</h3>
        <p className={styles.text}>Вы работали над задачами в течение <span>51 минуты</span></p>
      </div>

      <div className={styles.tomatoAmount}>
        <div className={styles.tomat}>
          <img className={styles.imgTomato} src="/assets/images/tomato-logo.svg" alt="img pomodoro" />
          <span>x 2</span>
        </div>
        <p className={styles.textTomato}>2 помидора</p>
      </div>

      <div className={styles.chart}>??????</div>
    </div>
  );
}











// import React from 'react';
// import styles from './chartblock.module.css';

// export function ChartBlock() {
//   return (
//     <div className={styles.chartBlock}>
//       <div className={styles.dailyInfo}>
//         <div className={styles.wrapper}>
//           <h3 className={styles.subtitle}>Понедельник</h3>
//           <p className={styles.text}>Вы работали над задачами в течение <span>51 минуты</span></p>
//         </div>

//         <div className={styles.tomatoAmount}>
//           <div className={styles.tomat}>
//             <img className={styles.imgTomato} src="/assets/images/tomato-logo.svg" alt="img pomodoro" />
//             <span>x 2</span>
//           </div>
//           <p className={styles.textTomato}>2 помидора</p>
//         </div>

//       </div>
//       <div className={styles.chart}>??????</div>
//     </div>
//   );
// }
