import React from 'react';
import { useAppDispatch } from '../../../hooks/hook';
import { removeTaskStatistics, unsetStatistics, updateAmountStops, updateComplitedTomatos, updatePauseTime, updateTimeStampStartPause, updateTimeStampStartTusk, updateWorkTime } from '../../../store/statisticsSlice';
import { removeTask, setBreakCount, setCurrentPomodoro, setIsPaused, setIsStarted, setTimerType, setTimeTimer, Task, unsetTask } from '../../../store/taskSlice';
import { getTimerTime } from '../../../utils/function/getTimerTime';
import { BtnAddTime } from './BtnAddTime';
import { BtnMiss } from './BtnMiss';
import { BtnPause } from './BtnPause';
import { BtnStart } from './BtnStart';
import { BtnStop } from './BtnStop';
import styles from './timertask.module.css';

interface ITimerTaskProps {
  tasks: Task[];
}

export function TimerTask({ tasks }: ITimerTaskProps) {
  const dispatch = useAppDispatch();
  const currentTask =  tasks[0];
  const timertime = getTimerTime(currentTask.timeTimer);

  function handleCickDone() {
    dispatch(updateComplitedTomatos({ id: currentTask.id }));
    dispatch(removeTask({ id: currentTask.id }));
  }

  function handleCickStop() {
    stopTimer();
  }

  function handleClickStart() {
    startTimer();
  }

  function handleClickPause() {
    if (currentTask.timerType === 0) {
      if (currentTask.isPaused) {
        dispatch(updatePauseTime({ id: currentTask.id, timeStampFinish: Date.now() }));
      } else {
        dispatch(updateAmountStops({ id: currentTask.id }));
        dispatch(updateTimeStampStartPause({ id: currentTask.id, timeStampStart: Date.now() }));
      }
    }
    dispatch(setIsPaused({ id: currentTask.id, isPaused: !currentTask.isPaused }));
  }

  function handleCickMiss() {
    dispatch(setTimeTimer({ id: currentTask.id, time: 0 }));
    dispatch(setIsPaused({ id: currentTask.id, isPaused: false }));
  }

  React.useEffect(() => {
    if (currentTask.isStarted === true && currentTask.isPaused === false && currentTask.timerType === 0) {
      // начало дела
      dispatch(updateTimeStampStartTusk({ id: currentTask.id, timeStampStart: Date.now() }));
    }
    if (currentTask.isStarted === true && currentTask.isPaused === true && currentTask.timerType === 0) {
      // поставлено на паузу
      dispatch(updateWorkTime({ id: currentTask.id, timeStampFinish: Date.now() }));
    }
   
  }, [currentTask.isStarted, currentTask.isPaused, currentTask.timerType]);



  const tick = () => {
    dispatch(setTimeTimer({ id: currentTask.id, time: currentTask.timeTimer - 1000 }));
  };


  React.useEffect(() => {
    if (!currentTask.isPaused && currentTask.isStarted) {
      let intervalId: any = null;

      if (currentTask.timeTimer > 0) {
        // Таймер работает
        intervalId = setInterval(tick, 1000);
      } else {
        // Таймер истек, переключаемся на перерыв или следующий помидор
        clearInterval(intervalId);

        if (currentTask.timerType === 0) {
          dispatch(updateWorkTime({ id: currentTask.id, timeStampFinish: Date.now() }));
          // Таймер рабочего времени истек, переключаемся на перерыв
          if (currentTask.breakCount % 4 === 0) {
            // Запускается четвертый длинный таймер
            dispatch(setBreakCount({ id: currentTask.id, breakCount: currentTask.breakCount + 1 }));
            dispatch(setTimeTimer({ id: currentTask.id, time: 15 * 60 * 1000 }));
            dispatch(setTimerType({ id: currentTask.id, timerType: 1 }));
          } else {
            // запускается обычный таймер
            dispatch(setBreakCount({ id: currentTask.id, breakCount: currentTask.breakCount + 1 }));
            dispatch(setTimeTimer({ id: currentTask.id, time: 5 * 60 * 1000 }));
            dispatch(setTimerType({ id: currentTask.id, timerType: 1 }));
          }
        } else {
          // Таймер перерыва истек, переключаемся на следующий помидор
          if (currentTask.currentPomodoro < currentTask.amountTomatos) {
            dispatch(setTimeTimer({ id: currentTask.id, time: 25 * 60 * 1000 }));
            dispatch(setTimerType({ id: currentTask.id, timerType: 0 }));
            dispatch(setCurrentPomodoro({ id: currentTask.id }));
            dispatch(updateComplitedTomatos({ id: currentTask.id }));
            // Таймер перерыва истек, переключаемся на ПОСЛЕДНИЙ помидор  
          } else {
            // время таймера истекло дело незасчитывается, удаляем дело и статистику по нему 
            dispatch(removeTask({ id: currentTask.id }));
            dispatch(removeTaskStatistics({ id: currentTask.id }));
            return;
          }
        }
      }
      return () => clearInterval(intervalId);
    }
  }, [currentTask.timeTimer, currentTask.timerType, currentTask.currentPomodoro, currentTask.isPaused, currentTask.isStarted]);

  const startTimer = () => {
    dispatch(setIsStarted({ id: currentTask.id, isStarted: true }));
    dispatch(setTimerType({ id: currentTask.id, timerType: 0 }));
  };

  const stopTimer = () => {
    // останавливаем таймер, возвращаем его в первоначальное состояние и сбрасываем статитстику 
    dispatch(unsetTask({ id: currentTask.id }));
    dispatch(unsetStatistics({ id: currentTask.id }));
  };

  const bkgrColorHeader = () => {
    if (currentTask.isStarted) {
      if (currentTask.timerType === 1) {
        return '#A8B64F';
      } else {
        return '#DC3E22';
      }
    } else {
      return '#C4C4C4';
    }
  };

  const bkgrColorTimer = () => {
    if (currentTask.isStarted && !currentTask.isPaused) {
      if (currentTask.timerType === 1) {
        return '#A8B64F';
      } else {
        return '#DC3E22';
      }
    } else {
      return '#333333';
    }
  };

  return (
    <div className={styles.timerTask}>
      <div className={styles.header} style={{ backgroundColor: bkgrColorHeader() }}>
        <span className={styles.headerTask}>{currentTask.title}</span>
        <span className={styles.numberPomodor}>Помидор {currentTask.currentPomodoro}</span>  
      </div>
      <div className={styles.content}>
        <div className={styles.timer}>
          <span style={{ color: bkgrColorTimer() }}>{timertime}</span>
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
          {
            currentTask.timerType === 1
              ? <BtnMiss handleCickMiss={handleCickMiss} />
              : <BtnStop
                isPaused={currentTask.isPaused}
                isStarted={currentTask.isStarted}
                handleCickDone={handleCickDone}
                handleCickStop={handleCickStop}
              />
          }
        
        </div>
      </div>
    </div>
  );
}


