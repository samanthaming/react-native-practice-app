import React, { Component, PropTypes } from 'react';
import { Text, Image } from 'react-native';
import axios from 'axios';

import { Card, CardSection } from './common';


class UserCard extends Component {
  componentWillMount() {
    this.props.onGetUser('samanthaming');
  }

  render() {
    return(
      <Card>
        <CardSection>
          <Text>{this.props.user.name}</Text>
        </CardSection>

        <CardSection>
          <Image
            style={styles.imageStyle}
            source={{ uri: this.props.user.avatar_url }}
            />
        </CardSection>
      </Card>
    );
  }
}

UserCard.propTypes = {
  onGetUser: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

const styles = {
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  }
};

export default UserCard;
