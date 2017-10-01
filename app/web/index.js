import React          from 'react';
import ReactDOM       from 'react-dom';
import Root           from './containers/Root';
import Routes                   from '../routes/web-route';

// load our css
require('./styles/animate.less');
require('./styles/style.less');
const rootElement = document.getElementById('root');

ReactDOM.render( <Root/>, rootElement );
