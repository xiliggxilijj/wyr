
export const QuestionType = {
  ANSWERED: "ANSWERED",
  UNANSWERED: "UNANSWERED"
}

export function formatDate (timestamp) {
  const d = new Date(timestamp)
  const time = d.toLocaleTimeString('en-US')
  return time.substr(0, 5) + time.slice(-2) + ' | ' + d.toLocaleDateString()
}


export const filteredQuestions = (  questions,  userId,  isQuestionAnswered) =>{
  	return isQuestionAnswered
    ? Object.keys(questions).filter(
        qid =>
          questions[qid].optionOne.votes.includes(userId) ||
          questions[qid].optionTwo.votes.includes(userId)
      ).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
    : Object.keys(questions).filter(
        qid =>
          !questions[qid].optionOne.votes.includes(userId) &&
          !questions[qid].optionTwo.votes.includes(userId)
    ).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
}
