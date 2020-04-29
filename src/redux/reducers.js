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
      console.log('toggle case');
      return state.map((todo) => {
        if (todo.id === payload) {
          return {...todo, completed: !todo.completed};
        }
        return todo;
      });
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== payload);
    default:
      return state;
  }
};
