import React from 'react';
import { View } from 'react-native';

import { Header } from './common';
import UserCardContainer from '../containers/UserCardContainer'
import RepoList from './RepoList';

const GitPractice = () => {
  return (
      <View style={{flex: 1}}>
        <Header headerText="Github Practice" />
        <UserCardContainer />
        <RepoList />
      </View>
  );
};

export default GitPractice;
