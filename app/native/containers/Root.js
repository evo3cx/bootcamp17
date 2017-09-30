import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import Route from '../../routes/native-route'
import Home from './Home';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Route />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
