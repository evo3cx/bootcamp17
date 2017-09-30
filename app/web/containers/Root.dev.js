import React, { Component, PropTypes } from 'react';
import { Provider }             from 'react-redux';
import Route from '../../routes/web-route';
import DevTools                 from './DevTools';

export default class Root extends Component {
  render() {
    return (
        <div>
          <Route />
          <DevTools />
        </div>
    );
  }
}
