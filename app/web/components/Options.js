import React, { Component } from 'react';
import Chip from 'material-ui/Chip';

export default class Options extends Component {

  constructor(props) {
    super(props);
    this.state = {optionData: props.data};
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

  handleTouchTap(key) {
    let optionData = [ ...this.state.optionData ];
    for(let i in optionData){
      if(optionData[i].key == key){
        optionData[i].checked = true;
      } else {
        optionData[i].checked = false;
      }
    }
    this.setState({ optionData });
  }

  renderChip(data) {
    let styleChecked = data.checked? 'chipChecked' : 'chip'
    return (
      <Chip
        key={data.key}
        onClick={() => this.handleTouchTap(data.key)}
        style={this.styles[styleChecked]}
      >
        {data.label}
      </Chip>
    );
  }
  render() {
    return (
      <div style={this.styles.wrapper}>
        {this.state.optionData.map(this.renderChip, this)}
      </div>
    );
  }
}
