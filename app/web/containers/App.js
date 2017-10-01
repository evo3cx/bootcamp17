import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// dumb components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Header     from '../components/Header';
import HelloWorld from '../components/HelloWorld';
import Body     from '../components/Body';
// actions
import {
  toggleColor,
} from '../../actions/actions';

/** The app entry point */
class App extends Component {
  render() {
    // injected by connect call
    const { dispatch, color, data } = this.props;

    return (
      <MuiThemeProvider>
        <Body />
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const select = state => state.home;

// Wrap the component to inject dispatch and state into it
export default connect(select)(App);
