/* eslint-disable quotes */
import React from 'react';
import styles from './chartblock.module.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  InteractionItem,
} from 'chart.js';
import { Bar, getElementAtEvent } from 'react-chartjs-2';
import { getWorkTime } from '../../../utils/function/getWorkTime';
import { IconTomato } from '../../../shared/icons';
import { normalizeCountForm } from '../../../utils/function/normalizeCountForm';


export interface IAcc {
  complitedTomatos: number,
  pauseTimeTotal: number,
  stops: number,
  workTime: number,
}

interface IChartBlockProps {
  dailyStatistics: IAcc;
  setDailyStatistics: (obj: IAcc) => void;
  weeklyStatistics: IAcc[];
}

ChartJS.register(
  Filler,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);



export function ChartBlock({ dailyStatistics, setDailyStatistics, weeklyStatistics }: IChartBlockProps) {
  const [dayWeek, setWeekDay] = React.useState('Понедельник');


  function getDataChart() {
    const data = weeklyStatistics.map((item: IAcc) => {
      return Math.round(item.workTime / 1000 / 60);
    });
    return data;
  }

  const labels = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];
  const data = {
    labels,
    datasets: [{
      label: 'Время работы, мин.',
      data: getDataChart(),
      hoverBackgroundColor: '#DC3E22',
      minBarLength: 6,
      backgroundColor: (value: any) => {
        return value.dataset.data[value.index] === 0 ? '#C4C4C4' : '#EA8A79';
      },
    }],
  };

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltips: {
        enabled: true,
      },
    },
    scales: {
      x: {
        backgroundColor: '#ECECEC',
        grid: {
          display: false,
        },
        ticks: {
          color: '#999999',
          font: {
            weight: 400,
            size: 24,
            llineHeight: 29,
          },
          stepSize: 1,
        },
      },
      y: {
        position: 'right',
        ticks: {
          backdropColor: 'red',
          backgroundColor: 'red',
          color: '#333333',
          font: {
            weight: 400,
            size: 12,
          },
          callback: function (value: number) {
            const hours = Math.floor(value / 60);
            const minutes = value - hours * 60;
            if (hours > 0) {
              return `${hours} ч ${minutes} мин`;
            } else {
              return `${minutes} мин`;
            }
          },
          stepSize: 25,
        },
      },
    },
    hover: {
      mode: 'nearest',
      intersect: true,
      axis: 'x',
      animationDuration: 0,
      backgroundColor: 'red',
      color: 'red',
    },
  };





  const printElementAtEvent = (element: InteractionItem[]) => {
    if (!element.length) return;

    const { index } = element[0];
    const dayWeek = data.labels[index];
    // const chartValue = data.datasets[datasetIndex].data[index];
    // console.log('день недели ', dayWeek, ' значение ', chartValue);

    switch (dayWeek) {
    case 'Пн':
      setWeekDay('Понедельник');
      setDailyStatistics(weeklyStatistics[0]);
      break;
    case 'Вт':
      setWeekDay('Вторник');
      setDailyStatistics(weeklyStatistics[1]);
      break;
    case 'Ср':
      setWeekDay('Среда');
      setDailyStatistics(weeklyStatistics[2]);
      break;
    case 'Чт':
      setWeekDay('Четверг');
      setDailyStatistics(weeklyStatistics[3]);
      break;
    case 'Пт':
      setWeekDay('Пятница');
      setDailyStatistics(weeklyStatistics[4]);
      break;
    case 'Сб':
      setWeekDay('Суббота');
      setDailyStatistics(weeklyStatistics[5]);
      break;
    case 'Вс':
      setWeekDay('Воскресенье');
      setDailyStatistics(weeklyStatistics[6]);
      break;

    default:
      break;
    }


  };




  const chartRef = React.useRef();
  const onClick = (event: React.MouseEvent<HTMLCanvasElement>) => {
    const { current: chart } = chartRef;

    if (!chart) {
      return;
    }

    printElementAtEvent(getElementAtEvent(chart, event));

  };


  // console.log(weeklyStatistics);
  // console.log(dailyStatistics);
  // console.log(dailyStatistics.workTime);
  return (
    <div className={styles.chartBlock} >
      <div className={styles.wrapper}>
        <h3 className={styles.subtitle}>{dayWeek}</h3>
        <p className={styles.text}>{dailyStatistics.workTime === 0 ? "Нет данных" : <>Вы работали над задачами в течение <span>{getWorkTime(dailyStatistics.workTime)}</span> </>} </p>
      </div>

      <div className={styles.tomatoAmount}>
        {
          dailyStatistics.complitedTomatos === 0
            ? <IconTomato />
            : <>
              <div className={styles.tomat}>
                <img className={styles.imgTomato} src="/assets/images/tomato-logo.svg" alt="img pomodoro" />
                <span>x {dailyStatistics.complitedTomatos}</span>
              </div>
              <p className={styles.textTomato}>{normalizeCountForm(dailyStatistics.complitedTomatos, ['помидор', 'помидора', 'помидоров'])}</p>
            </>

        }
      </div>

      <div className={styles.chart}>
        <Bar onClick={onClick} ref={chartRef} options={options} data={data} />
      </div>
    </div >
  );
}
