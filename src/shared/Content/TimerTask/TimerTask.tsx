/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';
import { useAppDispatch } from '../../../hooks/hook';
import { removeTaskStatistics, updateAmountStops, updateComplitedTomatos, updatePauseTime, updateTimeStampStartPause } from '../../../store/statisticsSlice';
import { removeTask, setIsPaused, setIsStarted, setTimeTimer, Task } from '../../../store/taskSlice';
import { getTimerTime } from '../../../utils/function/getTimerTime';
import { BtnAddTime } from './BtnAddTime';
import { BtnPause } from './BtnPause';
import { BtnStart } from './BtnStart';
import { BtnStop } from './BtnStop';
import styles from './timertask.module.css';

interface ITimerTaskProps {
  tasks: Task[];
}

export function TimerTask({ tasks }: ITimerTaskProps) {
  // const [breakCount, setBreakCount] = React.useState(0);
  
  const dispatch = useAppDispatch();
  const currentTask = tasks[0];
  console.log(currentTask);
  const timertime = getTimerTime(currentTask.timeTimer);

  // React.useEffect(() => {
  // }, [currentTask.amountTomatos]);

  // function cycleTimer() {
  //   for (let i = 0; i < currentTask.amountTomatos; i++) {
  //     console.log('one tomatos');
  //   }
  // }


  function handleCickDone() {
    dispatch(updateComplitedTomatos({ id: currentTask.id }));
    dispatch(removeTask({ id: currentTask.id }));
  }

  function handleCickStop() {
    dispatch(removeTaskStatistics({ id: currentTask.id }));
    dispatch(removeTask({ id: currentTask.id }));
  }

  function handleClickStart() {
    dispatch(setIsStarted({ id: currentTask.id, isStarted: true }));





  }

  function handleClickPause() {
    if (currentTask.isPaused) {
      dispatch(updatePauseTime({ id: currentTask.id, timeStampFinish: Date.now() }));
    } else {
      dispatch(updateAmountStops({ id: currentTask.id }));
      dispatch(updateTimeStampStartPause({ id: currentTask.id, timeStampStart: Date.now() }));
    }
    dispatch(setIsPaused({ id: currentTask.id, isPaused: !currentTask.isPaused }));
  }

  // function startTimerTask() {

  // }


  // Логика таймера
  React.useEffect(() => {
    if (!currentTask.isPaused && currentTask.isStarted) {
      const intervalId = setInterval(() => {
        dispatch(setTimeTimer({ id: currentTask.id, time: currentTask.timeTimer - 1000 }));

      }, 1000);
      return () => clearInterval(intervalId);
    }
  }, [currentTask.timeTimer, currentTask.isPaused, currentTask.isStarted]);




  return (
    <div className={styles.timerTask}>
      <div className={styles.header} style={{ backgroundColor: currentTask.isStarted ? '#DC3E22' : '#C4C4C4' }}>
        <span className={styles.headerTask}>{currentTask.title}</span>
        <span className={styles.numberPomodor}>Помидор {currentTask.amountTomatos}</span>  {/* !!!!текущий выполняемый помидор!!!*/}
      </div>
      <div className={styles.content}>
        <div className={styles.timer}>
          <span style={{ color: currentTask.isStarted && !currentTask.isPaused ? '#DC3E22' : '#333333' }}>{timertime}</span>
          <BtnAddTime id={currentTask.id} timeTimer={currentTask.timeTimer} />
        </div>
        <span className={styles.task}>
          <span className={styles.numberTask}>Задача {currentTask.ordinalNumber} - </span>
          {currentTask.title}
        </span>
        <div className={styles.btnGroup}>
          {
            currentTask.isStarted
              ? <BtnPause
                isPaused={currentTask.isPaused}
                handleClickPause={handleClickPause}
              />
              : <BtnStart
                handleClickStart={handleClickStart}
              />
          }
          <BtnStop isPaused={currentTask.isPaused} isStarted={currentTask.isStarted} handleCickDone={handleCickDone} handleCickStop={handleCickStop} />
        </div>
      </div>
    </div>
  );
}


