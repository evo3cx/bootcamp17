import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import { Provider } from 'react-redux';
import Root           from './app/native/containers/Root';
import configureStore from './app/store/configureStore.native.js';
// import Route from './app/native/containers/route'
const store = configureStore();

export default class Bukasist extends Component {
  render() {
    return <Root store={store} />;
  }
}

AppRegistry.registerComponent("Bukasist", () => Bukasist);
