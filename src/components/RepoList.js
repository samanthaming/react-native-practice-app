import React, { Component } from 'react';
import { ListView } from 'react-native';
import axios from 'axios';

import RepoItem from './RepoItem';

class RepoList extends Component {
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });

    this.state = {
      repos: ds.cloneWithRows([]),
      isLoading: true
    }
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/samanthaming/repos')
      .then(response => this.setState({
        repos: this.state.repos.cloneWithRows(response.data),
        isLoading: false
      }));
  }

  renderRow(repo) {
    return <RepoItem repo={repo} />;
  }

  render() {
    return(
      <ListView
        dataSource={this.state.repos}
        renderRow={this.renderRow}
        enableEmptySections={true}
      />
    );
  }
}

export default RepoList;
