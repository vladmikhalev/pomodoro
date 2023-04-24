import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';


export type Task = {
  id: string;
  title: string;
};

type TasksState = {
  list: Task[];
};

const initialState: TasksState = {
  list: [],
};


const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {

      state.list.push({
        id: nanoid(10),
        title: action.payload,
      });
    },
    removeTask(state, action: PayloadAction<string>) {
      state.list = state.list.filter(task => task.id !== action.payload);
    },
    increaseTomatos(state, action) { },
    decreaseTomatos(state, action) { },
  },
});

export const { addTask, removeTask, increaseTomatos, decreaseTomatos } = taskSlice.actions;
export default taskSlice.reducer;
