import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question,{MODE_QUEST,MODE_POLL} from './Question'
import NotFound from './NotFound'



class QuestionPage extends Component {
  render() {
    const { id, authedUser, questions } = this.props;
    const question=questions[id];
    
    if(!question||!this.props.authedUser){
      return <NotFound />
    }
    const isAnswered=question.optionOne.votes.includes(authedUser.id)||question.optionTwo.votes.includes(authedUser.id)
    let display=isAnswered?MODE_POLL:MODE_QUEST;
 
    return (
     
      <div>
        <Question question={this.props.questions[id]} display={display}/>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, questions, allUsers }, props) {
  const { id } = props.match.params;
  return {
    id,
   	authedUser, 
    questions, 
    allUsers
  }
}

export default connect(mapStateToProps)(QuestionPage)