import {todoReducer} from './reducers';
import {combineReducers, createStore} from 'redux';

const reducers = combineReducers({
  todoReducer: todoReducer,
});

export const store = createStore(reducers);
