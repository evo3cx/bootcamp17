import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Options from './Options'

class OptionsWithLabel extends Component{
  render(){
    const {onClick,optname, labels, question, value} = this.props
    return(
      <div className="question-wrapper">
        <div className="question">{question}</div>
        <div className="answer">
          <Options
            name={optname}
            value={value}
            onClick={onClick}
            labels={labels} />
          />
        </div>
      </div>
    )
  }
}

OptionsWithLabel.propTypes = {
  labels: PropTypes.array.isRequired,
  opptname: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  question: PropTypes.string,
  onClick: PropTypes.func.isRequired
}

export default OptionsWithLabel
