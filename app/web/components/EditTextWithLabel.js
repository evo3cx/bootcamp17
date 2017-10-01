import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';

class EditTextWithLabel extends Component{
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
            onChange={onChange}
          />
        </div>
      </div>
    )
  }
}

EditTextWithLabel.propTypes = {
  value: PropTypes.string.isRequired,
  optname: PropTypes.string.isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func.isRequired,
}

export default EditTextWithLabel;
