import { createStore, applyMiddleware,compose } from 'redux';
import thunk    from 'redux-thunk';
import ReducerNative from '../reducers/web';

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware =  applyMiddleware(
  thunk
)(createStore);

export default function configureStore() {
  return createStoreWithMiddleware(ReducerNative);
}
