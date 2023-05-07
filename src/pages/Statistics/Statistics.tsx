import React from 'react';
import { useAppSelector } from '../../hooks/hook';
import { TStatistics } from '../../store/statisticsSlice';
import { IObject } from '../../store/statisticsSlice';
import { ChartBlock } from './ChartBlock';
import { HeaderChart } from './HeaderChart';
import styles from './statistics.module.css';
import { StatisticsCard } from './StatisticsCard';

interface IAcc {
  complitedTomatos: number,
  pauseTimeTotal: number,
  stops: number,
  workTime: number,
}


export function Statistics() {
  const daysList = useAppSelector(state => state.statistics);
  const [selectedOption, setSelectedOption] = React.useState('Эта неделя');
  const [filteredList, setFilteredList] = React.useState<TStatistics>(daysList.slice(0, 7));
  const [weeklyStatistics, setWeeklyStatistics] = React.useState<IAcc[]>(getDataWeek());
  const [dailyStatistics, setDailyStatistics] = React.useState<IAcc>(weeklyStatistics[0]);

  React.useEffect(() => {
    setDailyStatistics(weeklyStatistics[0]);
  }, [weeklyStatistics]);

  React.useEffect(() => {
    setWeeklyStatistics(getDataWeek());
  }, [filteredList]);

  function getDataWeek() {
    const acc: IAcc = {
      complitedTomatos: 0,
      pauseTimeTotal: 0,
      stops: 0,
      workTime: 0,
    };
    const sumDay = filteredList.map(item => {
      const arr = item.tasks;
      const result = arr.reduce((sum: IAcc, current: IObject) => {
        return {
          complitedTomatos: sum.complitedTomatos + current.complitedTomatos,
          pauseTimeTotal: sum.pauseTimeTotal + current.pauseTimeTotal,
          stops: sum.stops + current.stops,
          workTime: sum.workTime + current.workTime,
        };
      }, acc);
      return result;
    });
    return sumDay;
  }


  React.useEffect(() => {

    switch (selectedOption) {
    case 'Эта неделя':
      setFilteredList(daysList.slice(0, 7));
      break;
    case 'Прошедшая неделя':
      setFilteredList(daysList.slice(7, 14));
      break;
    case '2 недели назад':
      setFilteredList(daysList.slice(14, 21));
      break;
    default:
      break;
    }
  }, [selectedOption]);



  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <HeaderChart
          selectedOption={selectedOption}
          setSelectedOption={setSelectedOption}
        />
        <ChartBlock weeklyStatistics={weeklyStatistics} dailyStatistics={dailyStatistics} setDailyStatistics={setDailyStatistics} />
        <StatisticsCard dailyStatistics={dailyStatistics} />
      </div>
    </section >


  );
}

