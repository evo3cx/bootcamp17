import React, { Component, PropTypes } from 'react';
import { View, Text, Button } from 'react-native';
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
  static navigationOptions = {
    headerBackTitle: null
  };


  onPressButton(){
    const {navigate} = this.props.navigation;
    
  }

  render() {
    // injected by connect call
    const {dispatch, color, data} = this.props;

    return (
      <View style={appStyle.container}>
        <Header />
        <Text> Chat </Text>
        <Button
          onPress={() => this.onPressButton()}
          title="Home"
        />
        <HelloWorld
          onPress={() => dispatch(toggleColor())}
          color={color}
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
