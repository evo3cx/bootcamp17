import React, { Component, PropTypes } from 'react';
import { connect }  from 'react-redux';
import Emoji from 'node-emoji';
import renderUtil from './../util/render';
import {
  EVENT_LIST,
  DRESS_SIZE_LIST,
  PANT_SIZE_LIST,
  COLOR_LIST,

  BUDGET,
  EVENT,
  DRESS_SIZE,
  PANT_SIZE,
  COLOR,
  CLOSING,

  WELCOME_TEXT,
  OPENING_TEXT,
  BUDGET_QUESTION,
  EVENT_QUESTION,
  DRESS_SIZE_QUESTION,
  PANT_SIZE_QUESTION,
  COLOR_QUESTION,
  CLOSING_TEXT
} from '../../constants/Home';
// items
import {
  Container,
  Header,
  Title,
  Content,
  Body,
  Text,
  List,
  ListItem
 } from 'native-base';

import {Button} from 'react-native'
// components
import EditTextWithLabel from '../components/EditTextWithLabel';
import OptionsWithLabel from '../components/OptionsWithLabel';
// actions
import {
  inputBudget,
} from '../../actions/actions';

import { appStyle } from '../styles/styles';

class Home extends Component {
  static navigationOptions = {
    title: 'Bukasist'
  };

  listItem(content) {
    return (<ListItem noBorder>{ content }</ListItem>);
  }

  onPressButton(){
    const {navigate} = this.props.navigation;
    navigate('Chat')
  }

  saveBudget(value) {
    const { dispatch } = this.props;
    dispatch(inputBudget(value))
  }

  render() {
    const { user, home, dispatch } = this.props;

    return (
      <Container style={appStyle.container}>
        <Content>
          <List>
            { renderUtil(home.step >= BUDGET, this.listItem(<Text>{WELCOME_TEXT + user.username + Emoji.emojify(' :blush:')}</Text>)) }
            { renderUtil(home.step >= BUDGET, this.listItem(<Text>{Emoji.emojify(OPENING_TEXT)}</Text>)) }
            { renderUtil(home.step >= BUDGET, this.listItem(<EditTextWithLabel label={Emoji.emojify(BUDGET_QUESTION)} onSubmit={this.saveBudget.bind(this)} />))}
            { renderUtil(home.step >= EVENT, this.listItem(<OptionsWithLabel label={Emoji.emojify(EVENT_QUESTION)} options={ EVENT_LIST }/>)) }
            { renderUtil(home.step >= DRESS_SIZE, this.listItem(<OptionsWithLabel label={Emoji.emojify(DRESS_SIZE_QUESTION)} options={ DRESS_SIZE_LIST }/>)) }
            { renderUtil(home.step >= PANT_SIZE, this.listItem(<OptionsWithLabel label={Emoji.emojify(PANT_SIZE_QUESTION)} options={ PANT_SIZE_LIST }/>)) }
            { renderUtil(home.step >= COLOR, this.listItem(<OptionsWithLabel label={Emoji.emojify(COLOR_QUESTION)} options={ COLOR_LIST }/>)) }
            { renderUtil(home.step >= CLOSING, this.listItem(<Text>{Emoji.emojify(CLOSING_TEXT)}</Text>)) }
          </List>
        </Content>
        <Button
          onPress={() => this.onPressButton()}
          title="Chat"
        />
      </Container>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  home: PropTypes.object.isRequired,
};

const mapStateToProps = (state)=>{
  return {
    home: state.home,
    user: state.user
  }
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(Home);
