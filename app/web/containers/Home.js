import React, {Component} from 'react';
import { connect } from 'react-redux';
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

import EditTextWithLabel from '../components/EditTextWithLabel';
import OptionsWithLabel from '../components/OptionsWithLabel';


class Home extends Component{
  state : {
    name: "Miranda",
    budget: 0,
    evnet: "",
    dress_size: "",
    pant_size: "",
    color: "",
  }

  welcomeText(name){
    return (
      <div className="greeting">
        {WELCOME_TEXT}
        <span className="name">{name}</span>
      </div>
    )
  }

  openingText(){
    return (
      <div className="intro">
        {OPENING_TEXT}
      </div>
    )
  }

  onChange(state, value){
    this.setState({
      state: value
    })
  }

  render(){
    const { dispatch } = this.props

    return (
      <div className="chat-container">
        <div className="chat">
          {this.welcomeText(this.state.name)}
          {this.openingText()}

          <EditTextWithLabel
            optname="budget"
            question={BUDGET_QUESTION}
            className="question-wrapper"
            value={this.state.budget}
            onClick={this.onChange} />

          <OptionsWithLabel
            labels={STYLE_LIST}
            question={EVENT_QUESTION}
            optname="event"
            value={this.state.event}
            onClick={this.onChange} />

          <OptionsWithLabel
            labels={DRESS_SIZE_LIST}
            optname="dress_size"
            question={DRESS_SIZE_QUESTION}
            value={this.state.dress_size}
            onClick={this.onChange} />

          <OptionsWithLabel
            labels={PANT_SIZE_LIST}
            optname="pant_size"
            question={DRESS_SIZE_QUESTION}
            value={this.state.pant_size}
            onClick={this.onChange} />

          <OptionsWithLabel
            labels={COLOR_LIST}
            optname="color"
            question={COLOR_QUESTION}
            value={this.state.color}
            onClick={this.onChange} />

          <div className="form-submit">
            <input type="submit" className="submit-button" value="Cari"/>
          </div>
        </div>
      </div>
    )
  }
}

export default Home
