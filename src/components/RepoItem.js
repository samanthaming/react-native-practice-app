import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { connect } from 'react-redux';

import * as actions from '../actions';
import { CardSection } from './common';

class RepoItem extends Component {

  renderDescription() {
    if(this.props.repo.id === this.props.selectedRepoId){
      return (
        <Text style={{flex:1}}>{this.props.repo.description}</Text>
      )
    }
  }

  onPress() {
    this.props.selectRepo(this.props.repo.id);
  }

  render() {
    return(
      <TouchableWithoutFeedback
        onPress={this.onPress.bind(this)}
      >
        <View >
          <CardSection>
            <Text>{this.props.repo.name}</Text>
            {this.renderDescription()}
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

RepoItem.propTypes = {
  repo: React.PropTypes.object,
  selectRepo: React.PropTypes.func,
  selectedRepoId: React.PropTypes.any,
}

const mapStateToProps = state => {
  return {
    selectedRepoId: state.selectedRepoId
  };
}

export default connect(mapStateToProps, actions)(RepoItem);
