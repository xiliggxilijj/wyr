import { RECEIVE_QUESTIONS } from '../actions/questions'
import {ADD_QUESTION,ANSWER_QUESTION,REMOVE_QUESTION_ANSWER}  from '../actions/shared'

export default function questions (state = {}, action) {
  switch(action.type) {
    case RECEIVE_QUESTIONS :
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTION : {
       const { question } = action
       return {
        ...state,
        [question.id]: question
      }
    } 
    case ANSWER_QUESTION :{
      const { qid, authedUser, answer } = action.info
      const question = state[qid]
      return { 
        ...state,
        [qid]: {
          ...question,
          [answer]: {
            ...question[answer],
            votes: [...question[answer].votes, authedUser]
          }
        }
      }
    }
    case REMOVE_QUESTION_ANSWER : {
      const { qid, authedUser, answer  } = action

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.filter(uid => uid !== authedUser)
          }
        }
      }
    }
    
    default :
      return state
  }
}