import { LOAD_USERS } from '../actions/allUsers'
import { ADD_QUESTION,ANSWER_QUESTION, REMOVE_QUESTION_ANSWER } from '../actions/shared'

export default function allUsers (state = {}, action) {
  switch(action.type) {    
    case LOAD_USERS :
      return {
        ...state,
        ...action.allUsers
      }
    case ADD_QUESTION : {
      const { question } = action

      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id])
        }
      }
    }
    case ANSWER_QUESTION : {
      const { authedUser, qid, answer } = action.info

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    }
    case REMOVE_QUESTION_ANSWER : {
      const { authedUser, qid } = action.info

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: Object.keys(state[authedUser].answers).filter(question => question !== qid).reduce((newState, question) => {
            return {
              ...newState,
              [question]: state[authedUser].answers[question]
            }
          }, {})
        }
      }
    }
    default :
      return state
  }
}