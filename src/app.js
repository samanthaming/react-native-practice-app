import React from 'react';
import { View } from 'react-native';

import { Header } from './components/common';
import UserCard from './components/UserCard';

const GitPractice = () => {
  return (
    <View style={{flex: 1}}>
      <Header headerText="Git Practice" />
      <UserCard />
    </View>
  );
};

export default GitPractice;
