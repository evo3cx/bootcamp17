import { combineReducers } from 'redux';
import home from './home'
import { RootNavigator } from '../routes/web-route';


const WebReducer = combineReducers({
  home,
});

export default WebReducer;
