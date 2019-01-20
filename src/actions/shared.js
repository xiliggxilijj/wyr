import { getInitialData } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
//import { setAuthedUser } from '../actions/authedUser'
import { loadUsers } from '../actions/allUsers'
import { setDataLoading } from '../actions/dataLoading'
import { receiveQuestions } from '../actions/questions'

export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const REMOVE_QUESTION_ANSWER = 'REMOVE_QUESTION_ANSWER'

//const Authed_User = {
//    id: 'tylermcginnis',
//    name: 'Tyler McGinnis',
//    avatarURL: 'https://tylermcginnis.com/would-you-rather/sarah.jpg',
//};


export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, tweets, allUsers,questions}) => {
        //dispatch(setAuthedUser(Authed_User))      
        dispatch(loadUsers(allUsers))
        dispatch(receiveQuestions(questions))      
        dispatch(hideLoading())
        dispatch(setDataLoading('done'))     
      })
  }
}