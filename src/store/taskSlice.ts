import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export type Task = {
  id: string;
  title: string;
  ordinalNumber: number;
  amountTomatos: number;
  timeTimer: number;
  isPaused: boolean;
  isStarted: boolean;
  breakCount: number;
  timerType: number;
  currentPomodoro: number;
};

type TasksState = {
  list: Task[];
};

const initialState: TasksState = {
  list: [],
};


interface IPayloadAdd {
  title: string;
  id: string;
}

interface IPayloadId {
  id: string;
}

interface IPayloadIncreaseBreakCount {
  id: string;
  breakCount: number;
}

interface IPayloadSetTimerType {
  id: string;
  timerType: number;
}

interface IPayloadEdit {
  id: string;
  title: string;
}

interface IPayloadSetTime {
  id: string;
  time: number;
}

interface IPayloadSetIsPaused {
  id: string;
  isPaused: boolean;
}

interface IPayloadSetIsStarted {
  id: string;
  isStarted: boolean;
}



const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<IPayloadAdd>) {
      state.list.push({
        id: action.payload.id,
        title: action.payload.title,
        ordinalNumber: state.list.length + 1,
        amountTomatos: 1,
        timeTimer: 25 * 60 * 1000,
        isPaused: false,
        isStarted: false,
        breakCount: 1,
        timerType: 0,
        currentPomodoro: 1,
      });
    },
    removeTask(state, action: PayloadAction<IPayloadId>) {
      state.list = state.list.filter(task => task.id !== action.payload.id);
    },
    editTask(state, action: PayloadAction<IPayloadEdit>) {
      const targetTask = state.list.find(task => task.id === action.payload.id);
      if (targetTask) {
        targetTask.title = action.payload.title;
      }
    },
    increaseTomatos(state, action: PayloadAction<IPayloadId>) {
      const targetTask = state.list.find(task => task.id === action.payload.id);
      if (targetTask) {
        targetTask.amountTomatos += 1;
      }
    },
    decreaseTomatos(state, action: PayloadAction<IPayloadId>) {
      const targetTask = state.list.find(task => task.id === action.payload.id);
      if (targetTask && targetTask.amountTomatos > 1) {
        targetTask.amountTomatos -= 1;
      }
    },
    setTimeTimer(state, action: PayloadAction<IPayloadSetTime>) {
      const targetTask = state.list.find(task => task.id === action.payload.id);
      if (targetTask) {
        targetTask.timeTimer = action.payload.time;
      }
    },
    setIsPaused(state, action: PayloadAction<IPayloadSetIsPaused>) {
      const targetTask = state.list.find(task => task.id === action.payload.id);
      if (targetTask) {
        targetTask.isPaused = action.payload.isPaused;
      }
    },
    setIsStarted(state, action: PayloadAction<IPayloadSetIsStarted>) {
      const targetTask = state.list.find(task => task.id === action.payload.id);
      if (targetTask) {
        targetTask.isStarted = action.payload.isStarted;
      }
    },
    setBreakCount(state, action: PayloadAction<IPayloadIncreaseBreakCount>) {
      const targetTask = state.list.find(task => task.id === action.payload.id);
      if (targetTask) {
        targetTask.breakCount = action.payload.breakCount;
      }
    },
    setTimerType(state, action: PayloadAction<IPayloadSetTimerType>) {
      const targetTask = state.list.find(task => task.id === action.payload.id);
      if (targetTask) {
        targetTask.timerType = action.payload.timerType;
      }
    },
    setCurrentPomodoro(state, action: PayloadAction<IPayloadId>) {
      const targetTask = state.list.find(task => task.id === action.payload.id);
      if (targetTask) {
        targetTask.currentPomodoro += 1;
      }
    },
    unsetTask(state, action: PayloadAction<IPayloadId>) {
      const targetTask = state.list.find(task => task.id === action.payload.id);
      if (targetTask) {
        targetTask.timeTimer = 0.5 * 60 * 1000;
        targetTask.isStarted = false;
        targetTask.breakCount = 1;
        targetTask.timerType = 0;
        targetTask.currentPomodoro = 1;
      }
    },
  },
});

export const { addTask, removeTask, increaseTomatos, decreaseTomatos, editTask, setTimeTimer, setIsPaused, setIsStarted, setBreakCount, setTimerType, setCurrentPomodoro, unsetTask } = taskSlice.actions;
export default taskSlice.reducer;
