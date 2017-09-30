import React, { Component, PropTypes } from 'react';
import { Provider } from 'react-redux';
import Home from './Home';

export default class Root extends Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <Home />
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
};
