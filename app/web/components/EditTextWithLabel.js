import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class EditTextWithLabel extends Component{
  onEnter(e){
    if (e.charCode !== 13) {
      return
    }
    console.log("enter");
    this.props.onEnter()
    // onEnter()
    return
  }

  render(){
    const {value, onChange, className} = this.props
    return (

      <div className={className}>
        <div className="question">Budget kamu berapa?</div>
        <div className="answer">
          <TextField
            hintText="Rp"
            type="Number"
            value={value}
            onKeyPress={(e)=> this.onEnter(e)}
            onChange={(e, value)=> onChange(value)}
          />
        </div>
      </div>
    )
  }
}

EditTextWithLabel.propTypes = {
  value: PropTypes.number.isRequired,
  optname: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
}

export default EditTextWithLabel;
