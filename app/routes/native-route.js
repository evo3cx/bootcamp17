import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';
import Home from "../native/containers/Home"
import Chat from "../native/containers/Chat"

export const RootNavigator = StackNavigator({
  Home: {
    screen: Home
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
