
// import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import { nanoid } from 'nanoid';


export type Statistics = {   // добавляем статистику по 1 делу когда нажимаем старт
  id: string; //
  date: Date;                 //  дата при создании объекта
  allTime: number;  // 1. задаем как new Date() при старте дела 
                    // 2. когда клик по "Сделано" сетим allTime = new Date() - allTime
  workTime: {

  }; 
  pauseTime: {       
    totalPauses: number;        // добавляем 1 каждый раз после клика "pause"
    startPauseDate: Date;       // при клике на "Пауза" добавляем дату
    endPauseDate: Date;         // при клике на "Продолжить" добавляем дату
    time: number;               // при клике на "Продолжить" time = endPauseDate - startPauseDate
  };         
  complitedTomatos: number;     //  После нажатия на кнопку "Сделано" прибавляем 1 томат
};

// type TasksState = {
//   list: Statistics[];
// };

// const initialState: TasksState = {
//   list: [],
// };


// // interface IPayloadAdd {
// //   title: string;
// // }

// // interface IPayloadId {
// //   id: string;
// // }

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



// const taskSlice = createSlice({
//   name: 'tasks',
//   initialState,
//   reducers: {
//     addTask(state, action: PayloadAction<IPayloadAdd>) {

//       state.list.push({
//         id: nanoid(10),
//         date: new Date(),
//         allTime: 0,
//         workTime: 0,
//         pauseTime: 0,
//         pauses: 0,
//         complitedTomatos: 0,
//       });
//     },
//     removeTask(state, action: PayloadAction<IPayloadId>) {
//       state.list = state.list.filter(task => task.id !== action.payload.id);
//     },
//     editTask(state, action: PayloadAction<IPayloadEdit>) {
//       const targetTask = state.list.find(task => task.id === action.payload.id);
//       if (targetTask) {
//         targetTask.title = action.payload.title;
//       }
//     },
//     increaseTomatos(state, action: PayloadAction<IPayloadId>) {
//       const targetTask = state.list.find(task => task.id === action.payload.id);
//       if (targetTask) {
//         targetTask.amountTomatos += 1;
//       }
//     },
//     decreaseTomatos(state, action: PayloadAction<IPayloadId>) {
//       const targetTask = state.list.find(task => task.id === action.payload.id);
//       if (targetTask && targetTask.amountTomatos > 1) {
//         targetTask.amountTomatos -= 1;
//       }
//     },
//     setTimeTimer(state, action: PayloadAction<IPayloadSetTime>) {
//       const targetTask = state.list.find(task => task.id === action.payload.id);
//       if (targetTask) {
//         targetTask.timeTimer = action.payload.time;
//       }
//     },
//     setIsPaused(state, action: PayloadAction<IPayloadSetIsPaused>) {
//       const targetTask = state.list.find(task => task.id === action.payload.id);
//       if (targetTask) {
//         targetTask.isPaused = action.payload.isPaused;
//       }
//     },
//     setIsStarted(state, action: PayloadAction<IPayloadSetIsStarted>) {
//       const targetTask = state.list.find(task => task.id === action.payload.id);
//       if (targetTask) {
//         targetTask.isStarted = action.payload.isStarted;
//       }
//     },
//   },
// });

// export const { addTask, removeTask, increaseTomatos, decreaseTomatos, editTask, setTimeTimer, setIsPaused, setIsStarted } = taskSlice.actions;
// export default taskSlice.reducer;



