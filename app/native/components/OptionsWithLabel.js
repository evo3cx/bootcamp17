import React, { Component, PropTypes } from 'react';
import { Text, Button, List, ListItem, Content } from 'native-base'

export default class OptionsWithLabel extends Component {
  render() {
    const { label, options, selectedItem, onSelect } = this.props;
    return (
      <Content>
          <Text>{ label }</Text>
          <List horizontal dataArray={ options } renderRow={(item, section, position) =>
              <ListItem noBorder androidRippleColor>
                <Button rounded primary={ selectedItem == position } light={ selectedItem != position } onPress={ () => onSelect(position) }>
                    <Text>{ item }</Text>
                </Button>
              </ListItem>
          } showsHorizontalScrollIndicator={false} />
      </Content>
    );
  }
}

OptionsWithLabel.propTypes = {
    label: PropTypes.string.isRequired,
    selectedItem: PropTypes.number,
    onSelect: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
}