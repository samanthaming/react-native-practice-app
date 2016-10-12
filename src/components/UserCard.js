import React, { Component } from 'react';
import { Text, Image } from 'react-native';
import axios from 'axios';

import { Card, CardSection } from './common';

class UserCard extends Component {
  state = {
    user: {},
  }

  componentWillMount() {
    axios.get('https://api.github.com/users/samanthaming')
      .then(response => this.setState({user: response.data}));
  }

  render() {
    // console.log('state', this.state);
    const { user } = this.state;

    return(
      <Card>
        <CardSection>
          <Text>{user.name}</Text>
        </CardSection>

        <CardSection>
          <Image
            style={styles.imageStyle}
            source={{uri: user.avatar_url}}
          />
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  imageStyle: {
    height: 300,
    flex: 1,
    width: null,
  }
};

export default UserCard;
