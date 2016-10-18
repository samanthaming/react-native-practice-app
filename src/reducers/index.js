import { combineReducers } from 'redux'
import SelectionReducer from './SelectionReducer'
import UserReducer from './UserReducer'

export default combineReducers({
  selectedRepoId: SelectionReducer,
  user: UserReducer,
});
