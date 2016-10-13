import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import reducers from './reducers';
import { Header } from './components/common';
import UserCard from './components/UserCard';
import RepoList from './components/RepoList';

const GitPractice = () => {
  return (
    <Provider store={createStore(reducers)}>
      <View style={{flex: 1}}>
        <Header headerText="Git Practice" />
        <UserCard />
        <RepoList />
      </View>
    </Provider>
  );
};

export default GitPractice;
