import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Chip from 'material-ui/Chip';

export default class Options extends Component {

  constructor(props) {
    super(props);
    this.styles = {
      chip: {
        margin: 4,
      },
      chipChecked: {
        margin: 4,
        backgroundColor: 'rgb(100, 181, 246)',
      },
      wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        marginLeft: -4,
      },
    };
  }

  renderChip(label) {
    const {value, onClick, name} = this.props
    let styleChecked = label === value? 'chipChecked' : 'chip'
    return (
      <Chip
        key={label}
        onClick={() => onClick(name, label)}
        style={this.styles[styleChecked]}
      >
        {label}
      </Chip>
    );
  }

  render() {
    const {labels, value, onClick} = this.props
    return (
      <div style={this.styles.wrapper}>
        {labels.optionData.map(this.renderChip, this)}
      </div>
    );
  }
}

Options.propTypes = {
  labels: PropTypes.array.isRequired,
  value: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func.isRequired
}
