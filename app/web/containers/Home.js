import React, {Component} from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Emoji from 'node-emoji';
import { Link, browserHistory } from 'react-router'
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

import EditTextWithLabel from '../components/EditTextWithLabel';
import OptionsWithLabel from '../components/OptionsWithLabel';


class Home extends Component{
  constructor(props){
    super(props)
    this.state = {
      name: "Miranda",
      budget: 0,
      event: "",
      dress_size: "",
      pant_size: "",
      color: "",
      step: 0,
    }
  }

  welcomeText(name){
    return (
      <div className="greeting">
        {WELCOME_TEXT}
        <span className="name">Miranda</span>
      </div>
    )
  }

  openingText(){
    return (
      <div className="intro">
        {Emoji.emojify(OPENING_TEXT)}
      </div>
    )
  }

  onChange(state, value){
    this.setState({
      state: value
    })

    console.log(this.state, state,value);
  }

  componentDidUpdate(prevProps, prevState){
    console.log(this.state, "pop", prevState);
  }

  render(){
    const { dispatch } = this.props

    return (
      <div className="chat-container">
        <div className="chat">
          {this.welcomeText("Miranda")}
          {this.openingText()}

          <EditTextWithLabel
            optname="budget"
            question={BUDGET_QUESTION}
            className="question-wrapper"
            value={this.state.budget}
            onChange={(value)=> this.setState({"budget":value})}
            onEnter={()=> this.setState({step:1})}
             />

          { EVENT <= this.state.step &&
          <OptionsWithLabel
            labels={EVENT_LIST}
            question={EVENT_QUESTION}
            optname="event"
            value={this.state.event}
            onClick={(value)=> this.setState({"event":value, step: DRESS_SIZE})} />
          }

          { DRESS_SIZE <= this.state.step &&
            <OptionsWithLabel
              labels={DRESS_SIZE_LIST}
              optname="dress_size"
              question={DRESS_SIZE_QUESTION}
              value={this.state.dress_size}
              onClick={(value)=> this.setState({"dress_size":value, step: PANT_SIZE})} />
            }

            { PANT_SIZE <= this.state.step &&
            <OptionsWithLabel
              labels={PANT_SIZE_LIST}
              optname="pant_size"
              question={PANT_SIZE_QUESTION}
              value={this.state.pant_size}
              onClick={(value)=> this.setState({"pant_size":value, step: COLOR})} />
            }

            { COLOR <= this.state.step &&
            <OptionsWithLabel
              labels={COLOR_LIST}
              optname="color"
              question={COLOR_QUESTION}
              value={this.state.color}
              onClick={(value)=> this.setState({"color":value, step: CLOSING})} />

            }

            { CLOSING <= this.state.step &&
              <div className="form-submit">
                <button onClick={() => this.props.history.go('chat')}>Go to /foo</button>
              </div>
            }
        </div>
      </div>
    )
  }
}

Home.propTypes = {
  dispatch: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
};

const select = state => state.home;

// Wrap the component to inject dispatch and state into it
export default connect(select)(Home);
