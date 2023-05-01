
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { timeStamp } from 'console';
// import { number } from 'yargs';
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
  id: string,                 // ok
  nameTask: string,           // ok
  pauseTimeTotal: number,     // ok
  timeStampStartPause: number,// ok
  workTime: number, 
  complitedTomatos: number,   
  stops: number,              // ok
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

interface IPayloadUpdateTimeStampStartPause {
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
// // interface IPayloadEdit {
// //   id: string;
// //   title: string;
// // }

// // interface IPayloadSetTime {
// //   id: string;
// //   time: number;
// // }

// // interface IPayloadSetIsPaused {
// //   id: string;
// //   isPaused: boolean;
// // }

// // interface IPayloadSetIsStarted {
// //   id: string;
// //   isStarted: boolean;
// // }



const statisticsSlice = createSlice({
  name: 'statistics',
  initialState,
  reducers: {
    updateList(state, action: PayloadAction) {
      state.unshift({
        timeStamp: getTimestampDay(new Date()),
        tasks: [],
      });

      // state.daysList.pop();
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
        complitedTomatos: 0,
        stops: 0,
      });
    },
    updatePauseTime(state, action: PayloadAction<IPayloadUpdatePauseTime>) {
      const todayStatist = state.find(item => item.timeStamp === getTimestampDay(new Date()));
      if (todayStatist) {
        const task = todayStatist.tasks.find(item => item.id === action.payload.id);
        if (task) {
          console.log(action.payload.timeStampFinish - task.timeStampStartPause);
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
    removeTaskStatistics(state, action: PayloadAction<IPayloadRemoveTaskStatistics>) {
      const todayStatist = state.find(item => item.timeStamp === getTimestampDay(new Date()));
      if (todayStatist) {
        todayStatist.tasks.filter(item => item.id !== action.payload.id);
      }

    },
  },
});

export const { updateList, updatePauseTime, removeTaskStatistics, addTaskStatistics, updateTimeStampStartPause, updateAmountStops, updateComplitedTomatos } = statisticsSlice.actions;
export default statisticsSlice.reducer;

























// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';
// import { getTimestampDay } from '../utils/function/getTimestampDay';




// // export interface IStatistics {
// //   [key: string]: {
// //     id: string,
// //     pauseTime: number,
// //     workTime: number,
// //     complitedTomatos: number,
// //     stops: number,
// //   };
// // }


// // export interface TaskStatistics {  // добавляем статистику по 1 делу когда нажимаем старт
// //   id: string,
// //   pauseTime: number,
// //   workTime: number,
// //   complitedTomatos: number,
// //   stops: number,
// // }
// // : Record<string, TaskStatistics[]>

// function fillArray() {
//   const arr = [];
//   const date = new Date();

//   for (let i = 0; i < 21; i++) {
//     date.setDate(date.getDate() - i);
//     const obj = {
//       id: nanoid(10),
//       timeStamp: getTimestampDay(date),
//       pauseTime: 0,
//       workTime: 0,
//       complitedTomatos: 0,
//       stops: 0,
//     };
//     arr.push(obj);
//   }
//   return arr;
// }


// export interface IObject {
//   id: string,
//   timeStamp: number;
//   pauseTime: number,
//   workTime: number,
//   complitedTomatos: number,
//   stops: number,
// }

// export type IStatistics = {
//   daysList: IObject[];
// };

// const initialState: IStatistics = {
//   daysList: fillArray(),
// };


// // interface IPayloadMake {
// //   timeStamp: number;
// // }

// // interface IPayloadAdd {
// //   title: string;
// // }

// // // interface IPayloadId {
// // //   id: string;
// // // }

// // // interface IPayloadEdit {
// // //   id: string;
// // //   title: string;
// // // }

// // // interface IPayloadSetTime {
// // //   id: string;
// // //   time: number;
// // // }

// // // interface IPayloadSetIsPaused {
// // //   id: string;
// // //   isPaused: boolean;
// // // }

// // // interface IPayloadSetIsStarted {
// // //   id: string;
// // //   isStarted: boolean;
// // // }



// const statisticsSlice = createSlice({
//   name: 'statistics',
//   initialState,
//   reducers: {
//     updateThreeWeek(state, action: PayloadAction) {
//       state.daysList.unshift({
//         id: nanoid(10),
//         timeStamp: getTimestampDay(new Date()),
//         pauseTime: 0,
//         workTime: 0,
//         complitedTomatos: 0,
//         stops: 0,
//       });

//       state.daysList.pop();
//     },
//     // addTask(state, action: PayloadAction<IPayloadAdd>) {
//     //   state.list.push({
//     //     id: nanoid(10),
//     //     title: action.payload.title,
//     //     ordinalNumber: state.list.length + 1,
//     //     amountTomatos: 1,
//     //     timeTimer: 25 * 60 * 1000,
//     //     isPaused: false,
//     //     isStarted: false,
//     //   });
//     // },
//     //     removeTask(state, action: PayloadAction<IPayloadId>) {
//     //       state.list = state.list.filter(task => task.id !== action.payload.id);
//     //     },
//     //     editTask(state, action: PayloadAction<IPayloadEdit>) {
//     //       const targetTask = state.list.find(task => task.id === action.payload.id);
//     //       if (targetTask) {
//     //         targetTask.title = action.payload.title;
//     //       }
//     //     },
//     //     increaseTomatos(state, action: PayloadAction<IPayloadId>) {
//     //       const targetTask = state.list.find(task => task.id === action.payload.id);
//     //       if (targetTask) {
//     //         targetTask.amountTomatos += 1;
//     //       }
//     //     },
//     //     decreaseTomatos(state, action: PayloadAction<IPayloadId>) {
//     //       const targetTask = state.list.find(task => task.id === action.payload.id);
//     //       if (targetTask && targetTask.amountTomatos > 1) {
//     //         targetTask.amountTomatos -= 1;
//     //       }
//     //     },
//     //     setTimeTimer(state, action: PayloadAction<IPayloadSetTime>) {
//     //       const targetTask = state.list.find(task => task.id === action.payload.id);
//     //       if (targetTask) {
//     //         targetTask.timeTimer = action.payload.time;
//     //       }
//     //     },
//     //     setIsPaused(state, action: PayloadAction<IPayloadSetIsPaused>) {
//     //       const targetTask = state.list.find(task => task.id === action.payload.id);
//     //       if (targetTask) {
//     //         targetTask.isPaused = action.payload.isPaused;
//     //       }
//     //     },
//     //     setIsStarted(state, action: PayloadAction<IPayloadSetIsStarted>) {
//     //       const targetTask = state.list.find(task => task.id === action.payload.id);
//     //       if (targetTask) {
//     //         targetTask.isStarted = action.payload.isStarted;
//     //       }
//     //     },
//   },
// });

// export const { updateThreeWeek } = statisticsSlice.actions;
// export default statisticsSlice.reducer;







// function fill() {
//   const arr = [];
//   const date = new Date();

//   for (let i = 0; i < 21; i++) {
//     date.setDate(date.getDate() - i);
//     const obj = {
//       id: nanoid(10),
//       timeStamp: getTimestampDay(date),
//       pauseTime: 0,
//       workTime: 0,
//       complitedTomatos: 0,
//       stops: 0,
//     };
//     arr.push(obj);
//   }
//   return arr;
// }

// function fill(obj: IStatistics) {
//   const date = new Date();
//   for (let i = 0; i < 21; i++) {
//     date.setDate(date.getDate() - i);
//     obj[getTimestampDay(date)] = [];
//   }
// }

