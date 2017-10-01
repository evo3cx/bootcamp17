import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { Router, IndexRoute,Route, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer,hashHistory } from 'react-router-redux'
import { createBrowserHistory } from 'history';

import reducers from '../reducers/web'
import App from '../web/containers/App'
import Chat from '../web/containers/Chat'



import configureStore from '../store/configureStore.web.js';
// import Route from './app/native/containers/route'
const store = configureStore();

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(createBrowserHistory(), store)

const WebRouter = ({})=>(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <Route path="/" component={App}/>
      </Router>
    </div>
  </Provider>
)

export default WebRouter
