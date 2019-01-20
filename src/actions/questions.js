import { saveQuestionAnswer, saveQuestion } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'
import {ADD_QUESTION,ANSWER_QUESTION,REMOVE_QUESTION_ANSWER}  from './shared'

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'


function addQuestion (question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

function answerQuestion (info) {
  return {
    type: ANSWER_QUESTION,
    info,
  }
}
function removeQuestionAnswer (info) {
  return {
    type: REMOVE_QUESTION_ANSWER,
    info,
  }
}

export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()

    dispatch(showLoading())

    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser.id
    })
        .then(question => dispatch(addQuestion(question)))
        .then(() => dispatch(hideLoading()))
  }
}

export function handleAnswerQuestion (info) {
  return (dispatch) => {
    dispatch(answerQuestion(info))
    return saveQuestionAnswer(info)
      .catch((e) => {
        console.warn('Error in handleAnswerQuestion: ', e)
        dispatch(removeQuestionAnswer(info))
        alert('The was an error answer this question. Try again.')
      })
  }
}