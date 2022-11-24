export const reducer = (state, action) => {
  switch (action.type) {
    case 'add_note':
      return { task: [...state.task, action.payload] };
    default:
  }
  return state;
};
