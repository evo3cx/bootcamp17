import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
// dumb components
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Body     from '../components/Body';
import ResultSearch     from '../components/ResultSearch';

/** The app entry point */
class App extends Component {
  render() {
    // injected by connect call
    const { dispatch, color, data } = this.props;

    return (
      <MuiThemeProvider>
        <ResultSearch />
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
