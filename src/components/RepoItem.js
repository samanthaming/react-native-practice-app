import React, { Component } from 'react';
import { Text } from 'react-native';
import { CardSection } from './common';

class RepoItem extends Component {
  render() {
    return(
      <CardSection>
        <Text>{this.props.repo.name}</Text>
      </CardSection>
    );
  }
}

RepoItem.propTypes = {
  repo: React.PropTypes.object,
}

export default RepoItem;
