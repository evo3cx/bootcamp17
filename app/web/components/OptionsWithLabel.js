import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Emoji from 'node-emoji';
import Options from './Options'

class OptionsWithLabel extends Component{
  render(){
    const {onClick,optname, labels, question, value} = this.props
    console.log(labels);
    return(
      <div className="question-wrapper">
        <div className="question">{Emoji.emojify(question)}</div>
        <div className="answer">
          <Options
            optname={optname}
            value={value}
            onClick={onClick}
            labels={labels} />
        </div>
      </div>
    )
  }
}

OptionsWithLabel.propTypes = {
  labels: PropTypes.array.isRequired,
  optname: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  question: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default OptionsWithLabel
