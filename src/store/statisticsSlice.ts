import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getTimestampDay } from '../utils/function/getTimestampDay';


function fill(arr: TStatistics) {
  const date = new Date();
  for (let i = 0; i < 21; i++) {
    date.setDate(date.getDate() - i);
    arr.push({
      timeStamp: getTimestampDay(date),
      tasks: [],
    });
  }
}


export interface IObject {
  id: string,                 
  nameTask: string,           
  pauseTimeTotal: number,     
  timeStampStartPause: number,
  workTime: number,
  timeStampStartTask: number,
  complitedTomatos: number,
  stops: number,              
}

type TArrObject = IObject[];

interface IStatisticsObj {
  timeStamp: number;
  tasks: TArrObject
}

export type TStatistics = IStatisticsObj[];

const initialState: TStatistics = [];

fill(initialState);


interface IPayloadAdd {
  id: string;
  nameTask: string;
}

interface IPayloadUpdatePauseTime {
  id: string;
  timeStampFinish: number;
}

interface IPayloadUpdateWorkTime {
  id: string;
  timeStampFinish: number;
}

interface IPayloadUpdateTimeStampStartPause {
  id: string;
  timeStampStart: number;
}

interface IPayloadUpdateTimeStampStartWork {
  id: string;
  timeStampStart: number;
}

interface IPayloadRemoveTaskStatistics {
  id: string;
}

interface IPayloadUpdateAmountStops {
  id: string;
}

interface IPayloadUpdateComplitedTomatos {
  id: string;
}

interface IPayloadUnsetStatistics {
  id: string;
}

interface IPayloadEdit {
  id: string;
  nameTask: string;
}


const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    updateList(state, action: PayloadAction) {
      state.unshift({
        timeStamp: getTimestampDay(new Date()),
        tasks: [],
      });

      state.pop();
    },
    addTaskStatistics(state, action: PayloadAction<IPayloadAdd>) {
      const todayStatist = state.find(item => item.timeStamp === getTimestampDay(new Date()));
      todayStatist?.tasks.push({
        id: action.payload.id,  
        nameTask: action.payload.nameTask,  
        pauseTimeTotal: 0,   
        timeStampStartPause: 0,  
        workTime: 0,
        timeStampStartTask: 0,  
        complitedTomatos: 0,  
        stops: 0,   
      });
    },
    updatePauseTime(state, action: PayloadAction<IPayloadUpdatePauseTime>) {
      const todayStatist = state.find(item => item.timeStamp === getTimestampDay(new Date()));
      if (todayStatist) {
        const task = todayStatist.tasks.find(item => item.id === action.payload.id);
        if (task) {
          task.pauseTimeTotal += action.payload.timeStampFinish - task.timeStampStartPause;
        }
      }
    },
    updateTimeStampStartPause(state, action: PayloadAction<IPayloadUpdateTimeStampStartPause>) {
      const todayStatist = state.find(item => item.timeStamp === getTimestampDay(new Date()));
      if (todayStatist) {
        const task = todayStatist.tasks.find(item => item.id === action.payload.id);
        if (task) {
          task.timeStampStartPause = action.payload.timeStampStart;
        }
      }
    },
    updateWorkTime(state, action: PayloadAction<IPayloadUpdateWorkTime>) {
      const todayStatist = state.find(item => item.timeStamp === getTimestampDay(new Date()));
      if (todayStatist) {
        const task = todayStatist.tasks.find(item => item.id === action.payload.id);
        if (task) {
          task.workTime += action.payload.timeStampFinish - task.timeStampStartTask;
        }
      }
    },
    updateTimeStampStartTusk(state, action: PayloadAction<IPayloadUpdateTimeStampStartWork>) {
      const todayStatist = state.find(item => item.timeStamp === getTimestampDay(new Date()));
      if (todayStatist) {
        const task = todayStatist.tasks.find(item => item.id === action.payload.id);
        if (task) {
          task.timeStampStartTask = action.payload.timeStampStart;
        }
      }
    },
    updateAmountStops(state, action: PayloadAction<IPayloadUpdateAmountStops>) {
      const todayStatist = state.find(item => item.timeStamp === getTimestampDay(new Date()));
      if (todayStatist) {
        const task = todayStatist.tasks.find(item => item.id === action.payload.id);
        if (task) {
          task.stops += 1;
        }
      }
    },
    updateComplitedTomatos(state, action: PayloadAction<IPayloadUpdateComplitedTomatos>) {
      const todayStatist = state.find(item => item.timeStamp === getTimestampDay(new Date()));
      if (todayStatist) {
        const task = todayStatist.tasks.find(item => item.id === action.payload.id);
        if (task) {
          task.complitedTomatos += 1;
        }
      }
    },
    unsetStatistics(state, action: PayloadAction<IPayloadUnsetStatistics>) {
      const todayStatist = state.find(item => item.timeStamp === getTimestampDay(new Date()));
      if (todayStatist) {
        const task = todayStatist.tasks.find(item => item.id === action.payload.id);
        if (task) {
          task.pauseTimeTotal = 0;
          task.timeStampStartPause = 0;
          task.workTime = 0;
          task.complitedTomatos = 0;
          task.stops = 0;
        }
      }
    },
    editTaskStatistics(state, action: PayloadAction<IPayloadEdit>) {
      const todayStatist = state.find(item => item.timeStamp === getTimestampDay(new Date()));
      if (todayStatist) {
        const task = todayStatist.tasks.find(item => item.id === action.payload.id);
        if (task) {
          task.nameTask = action.payload.nameTask;
        }
      }
    },
    removeTaskStatistics(state, action: PayloadAction<IPayloadRemoveTaskStatistics>) {
      const todayStatist = state.find(item => item.timeStamp === getTimestampDay(new Date()));
      if (todayStatist) {
        todayStatist.tasks = todayStatist.tasks.filter(item => item.id !== action.payload.id);
      }

    },
  },
});

export const { updateList, updatePauseTime, removeTaskStatistics, addTaskStatistics, updateTimeStampStartPause, updateAmountStops, updateComplitedTomatos, editTaskStatistics, unsetStatistics, updateWorkTime, updateTimeStampStartTusk } = statisticsSlice.actions;
export default statisticsSlice.reducer;


