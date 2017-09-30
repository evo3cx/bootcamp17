import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux'
import home from './home'

const WebReducer = combineReducers({
  routing: routerReducer,
  home,
});

export default WebReducer;
