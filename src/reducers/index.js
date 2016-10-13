import { combineReducers } from 'redux';
import RepoReducer from './RepoReducer';

export default combineReducers({
  repos: RepoReducer,
});
