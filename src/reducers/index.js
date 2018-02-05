// Set up your root reducer here...
import { combineReducers } from 'redux';
import todoSavings from './todo';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
  todoSavings,
  routing: routerReducer
});

export default rootReducer;