import { createStore, applyMiddleware } from 'redux';
import thunk    from 'redux-thunk';
import ReducerNative from '../reducers/native';

// create a store that has redux-thunk middleware enabled
const createStoreWithMiddleware = applyMiddleware(
  thunk
)(createStore);

export default function configureStore() {
  return createStoreWithMiddleware(ReducerNative);
}
