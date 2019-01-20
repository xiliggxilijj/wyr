import { combineReducers } from 'redux'
import authedUser from './authedUser'
import { loadingBarReducer } from 'react-redux-loading'
import allUsers from './allUsers'
import questions from './questions'
import dataLoading from './dataLoading'

export default combineReducers({
  authedUser,
  allUsers,
  questions,
  loadingBar: loadingBarReducer,
  dataLoading,
})