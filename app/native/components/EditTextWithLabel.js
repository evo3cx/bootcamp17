import React, { Component, PropTypes } from 'react';
import { View } from 'react-native';
import { Item, Input, Text, Label } from 'native-base'

export default class EditTextWithLabel extends Component {
  render() {
    const { label } = this.props;
    return (
      <View style={{ flex: 1 }}>
          <Text style={{ alignSelf: 'flex-start' }}>{ label }</Text>
          <Item inlineLabel>
              <Label>Rp</Label>
              <Input keyboardType='numeric'/>
          </Item>
      </View>
    );
  }
}

EditTextWithLabel.propTypes = {
    label: PropTypes.string.isRequired
}