import { createSlice, PayloadAction } from '@reduxjs/toolkit';


export type Task = {
  id: string;
  title: string;
  ordinalNumber: number;
  amountTomatos: number;
  timeTimer: number;
  isPaused: boolean;
  isStarted: boolean;
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
  },
});

export const { addTask, removeTask, increaseTomatos, decreaseTomatos, editTask, setTimeTimer, setIsPaused, setIsStarted } = taskSlice.actions;
export default taskSlice.reducer;
