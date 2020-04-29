const initialToDo = [
  {
    id: 1,
    content: 'Learn Reactt',
    completed: false,
  },
  {
    id: 2,
    content: 'Learn Redux',
    completed: false,
  },
  {
    id: 3,
    content: 'Learn Node',
    completed: true,
  },
];
export const todoReducer = (state = initialToDo, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'ADD_TODO':
      return [
        ...state,
        {id: Math.random(), content: payload, completed: false},
      ];
    case 'TOGGLE_TODO':
      return state.filter((todo) => {
          if (todo.id === payload) todo.completed = !todo.completed;
          return todo;
        })
      

    default:
      return state;
  }
};
