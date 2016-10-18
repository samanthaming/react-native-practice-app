import React, { Component } from 'react'
import { AppRegistry } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import reducers from './src/reducers'
import App from './src/components/App'

let store = createStore(reducers, applyMiddleware(thunk))

class GitPractice extends Component {
  render() {
    return(
    <Provider store={store}>
      <App />
    </Provider>
    )
  }
}

AppRegistry.registerComponent('GitPractice', () => GitPractice);
