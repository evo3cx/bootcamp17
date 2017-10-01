import React          from 'react';
import ReactDOM       from 'react-dom';
import Root           from './containers/Root';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

// load our css
require('./styles/animate.less');
require('./styles/style.less');
const rootElement = document.getElementById('root');

ReactDOM.render(
  <MuiThemeProvider>
    <Root/>
  </MuiThemeProvider>, rootElement );
