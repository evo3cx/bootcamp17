/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry} from 'react-native';
import Root           from './app/native/containers/Root';
import configureStore from './app/store/configureStore.prod.js';

const store = configureStore();

export default class ReactNativeWebHelloWorld extends Component {
  render() {
    return (
      <Root store={store} />
    );
  }
}

AppRegistry.registerComponent('ReactNativeWebHelloWorld', () => ReactNativeWebHelloWorld);
