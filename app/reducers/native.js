import { combineReducers } from 'redux';
import { NavigationActions } from 'react-navigation';
import { RootNavigator } from '../routes/native-route';
import home from './home'
import example from './example'
import user from './user'

// Start page with home screen
const initialState = RootNavigator.router.getStateForAction(RootNavigator.router.getActionForPathAndParams('Home'));
const navReducer = (state = initialState, action) => {
  const nextState = RootNavigator.router.getStateForAction(action, state);

  // Simply return the original `state` if `nextState` is null or undefined.
  return nextState || state;
};


const NativeReducer = combineReducers({
  nav: navReducer,
  home,
  example,
  user
});

export default NativeReducer;
