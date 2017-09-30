import React, { Component, PropTypes } from 'react';
import { View, Button } from 'react-native';
import { connect }  from 'react-redux';
import { appStyle } from '../styles/styles';
// components
import Header     from '../components/Header';
import HelloWorld from '../components/HelloWorld';
// actions
import {
  toggleColor,
} from '../../actions/actions';

/** The app entry point */
class App extends Component {
  render() {
    // injected by connect call
    const {dispatch, color, data} = this.props;
    const {navigate} = this.props.navigation
    console.log(this.props);
    return (
      <View style={appStyle.container}>
        <Header />
        <HelloWorld
          onPress={() => dispatch(toggleColor())}
          color={color}
        />
        <Button
          onPress={() => navigate('Chat')}
          title="Chat"
        />
      </View>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state)=>{
  return state.home;
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(App);
