import React, { Component, PropTypes } from 'react';
import { connect }  from 'react-redux';
import Emoji from 'node-emoji';
import renderUtil from './../util/render';
import {
  STYLE_LIST,
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
  toggleColor,
} from '../../actions/actions';

import { appStyle } from '../styles/styles';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      step: BUDGET,
      username: 'Marinda'
    }
  }

  listItem(content) {
    return (<ListItem noBorder>{ content }</ListItem>);
  }

  onPressButton(){
    const {navigate} = this.props.navigation;
    navigate('Chat')
  }

  render() {
    const { username, step } = this.state;

    return (
      <Container style={appStyle.container}>
        <Header>
          <Body><Title>Bukasist</Title></Body>
        </Header>
        <Content>
          <List>
            { renderUtil(step == BUDGET, this.listItem(<Text>{WELCOME_TEXT + username + Emoji.emojify(' :blush:')}</Text>)) }
            { renderUtil(step == BUDGET, this.listItem(<Text>{Emoji.emojify(OPENING_TEXT)}</Text>)) }
            { renderUtil(step == BUDGET, this.listItem(<EditTextWithLabel label={Emoji.emojify(BUDGET_QUESTION)}/>)) }
            { renderUtil(step == EVENT, this.listItem(<OptionsWithLabel label={Emoji.emojify(EVENT_QUESTION)} options={ STYLE_LIST }/>)) }
            { renderUtil(step == DRESS_SIZE, this.listItem(<OptionsWithLabel label={Emoji.emojify(DRESS_SIZE_QUESTION)} options={ DRESS_SIZE_LIST }/>)) }
            { renderUtil(step == PANT_SIZE, this.listItem(<OptionsWithLabel label={Emoji.emojify(PANT_SIZE_QUESTION)} options={ PANT_SIZE_LIST }/>)) }
            { renderUtil(step == COLOR, this.listItem(<OptionsWithLabel label={Emoji.emojify(COLOR_QUESTION)} options={ COLOR_LIST }/>)) }
            { renderUtil(step == CLOSING, this.listItem(<Text>{Emoji.emojify(CLOSING_TEXT)}</Text>)) }
          </List>
        </Content>
        <Button
          onPress={() => this.onPressButton()}
          title="Home"
        />
      </Container>
    );
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = (state)=>{
  return state.home;
}

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps)(Home);
