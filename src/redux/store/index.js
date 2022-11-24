import { compose, createStore } from 'redux';
import { reducer } from '../reducers';
const data = JSON.parse(localStorage.getItem('task'));
const initState = {
  task: data === null ? [] : data,
};
const store = createStore(reducer, initState, compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOL));
export default store;
