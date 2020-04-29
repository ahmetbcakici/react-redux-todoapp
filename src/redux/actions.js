export const addTodo = (content) => {
  return {
    type: 'ADD_TODO',
    payload: content,
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    payload: id,
  };
};
