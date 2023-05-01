import React from 'react';
import { useAppSelector } from '../hooks/hook';
import { TStatistics } from '../store/statisticsSlice';
import { IObject } from '../store/statisticsSlice';
import { ChartBlock } from './ChartBlock';
import { HeaderChart } from './HeaderChart';
import styles from './statistics.module.css';
import { StatisticsCard } from './StatisticsCard';



export function Statistics() {
  const daysList = useAppSelector(state => state.statistics);
  const [selectedOption, setSelectedOption] = React.useState('Эта неделя');
  const [filteredList, setFilteredList] = React.useState<TStatistics>(daysList.slice(0, 7));
  const [dailyStatistics, setDailyStatistics] = React.useState<IObject>();
  
  React.useEffect(() => {
    console.log(filteredList);

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
        <ChartBlock filteredList={filteredList} dailyStatistics={dailyStatistics} setDailyStatistics={setDailyStatistics} />
        <StatisticsCard dailyStatistics={dailyStatistics} />
      </div>
    </section >


  );
}

