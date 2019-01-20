import {
  _getUsers,
  _getQuestions,
  _saveQuestion,
  _saveQuestionAnswer,
} from './_DATA.js'

export function getInitialData () {
  return Promise.all([
    _getUsers(),
    _getQuestions(),
  ]).then(([ allUsers,questions]) => ({
    allUsers,
    questions,
  }))
}

export function saveQuestionAnswer ( info) {
   return _saveQuestionAnswer(info)
}
export function saveQuestion (question) {
    return _saveQuestion(question)
}
