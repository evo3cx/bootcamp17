import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import App from "../native/containers/App"
import Chat from "../native/containers/Chat"

export const RootNavigator = StackNavigator({
  Home: {
    screen: App
  },
  Chat: {
    screen: Chat
  }
})

const RootWithNavigationState = ({ dispatch, nav }) => (
  <RootNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

RootWithNavigationState.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  nav: state.nav,
});

export default connect(mapStateToProps)(RootWithNavigationState);
