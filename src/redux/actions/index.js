export const addNote = (payload) => {
  return {
    type: 'add_note',
    payload: payload,
  };
};
