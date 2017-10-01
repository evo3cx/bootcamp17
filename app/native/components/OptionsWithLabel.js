import React, { Component, PropTypes } from 'react';
import { Text, Button, List, ListItem, Content } from 'native-base'

export default class EditTextWithLabel extends Component {
  render() {
    const { label, options } = this.props;
    return (
      <Content>
          <Text>{ label }</Text>
          <List horizontal dataArray={ options } renderRow={(item) =>
              <ListItem noBorder androidRippleColor selected>
                <Button rounded light>
                    <Text>{ item }</Text>
                </Button>
              </ListItem>
          } showsHorizontalScrollIndicator={false} />
      </Content>
    );
  }
}

EditTextWithLabel.propTypes = {
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired
}