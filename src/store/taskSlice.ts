import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


export type Task = {
  id: string;
  title: string;
  amountTomatos: number;
};

type TasksState = {
  list: Task[];
};

const initialState: TasksState = {
  list: [],
};


interface IPayloadAdd {
  title: string;
}

interface IPayloadId {
  id: string;
}

interface IPayloadEdit {
  id: string;
  title: string;
}


const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<IPayloadAdd>) {

      state.list.push({
        id: nanoid(10),
        title: action.payload.title,
        amountTomatos: 1,
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
  },
});

export const { addTask, removeTask, increaseTomatos, decreaseTomatos, editTask } = taskSlice.actions;
export default taskSlice.reducer;
