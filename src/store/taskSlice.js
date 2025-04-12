import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Prepare pitch deck",
      status: "upcoming",
      dueDate: "2025-05-05",
    },
    {
      id: 2,
      title: "Design UI screens",
      status: "in-progress",
      dueDate: "2025-05-07",
    },
    {
      id: 3,
      title: "Submit project proposal",
      status: "completed",
      dueDate: "2025-05-03",
    },
  ],
  filter: "all", // or "in-progress", "completed", etc.
};

const taskSlice = createSlice({
  name: "task",
  initialState,
  reducers: {
    setTasks(state, action) {
      state.tasks = action.payload;
    },
    addTask(state, action) {
      state.tasks.push(action.payload);
    },
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { setTasks, addTask, setFilter } = taskSlice.actions;
export default taskSlice.reducer;
