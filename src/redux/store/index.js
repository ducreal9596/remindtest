import { configureStore } from '@reduxjs/toolkit';
import { addNoteSlice } from '../../components/AddNote/NoteSlice';

const store = configureStore({
  reducer: {
    noteList: addNoteSlice.reducer,
  },
});
export default store;
