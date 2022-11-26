import { createSlice } from '@reduxjs/toolkit';
export const addNoteSlice = createSlice({
  name: 'noteList',
  initialState: JSON.parse(localStorage.getItem('task')) ?? [],
  reducers: {
    addNote: (state, action) => {
      state.push(action.payload);
    },
    removeNote: (state, action) => {
      state.splice(action.payload, 1);
    },
    updateNote: (state, action) => {
      const index = state.findIndex((item) => item.id === action.payload.id);
      state.splice(index, 1, action.payload);
    },
  },
});
