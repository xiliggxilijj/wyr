import React, { Component } from 'react'
import { connect } from 'react-redux'
import Question ,{MODE_LIST} from './Question'
import {filteredQuestions} from '../utils/helpers'
class QuestionList extends Component {
  render() {
    const  { authedUser,questions, isQuestionAnswered } = this.props;
    const qidList=filteredQuestions (  questions,  authedUser.id,  isQuestionAnswered);
    return (
      <div>
      {qidList&&qidList.length>0?<ul className='dashboard-list'>
      	
                {qidList.map((id) => (
                  <li key={id}>
                    <Question question={questions[id]}  display={MODE_LIST}/>
                  </li>
                ))}

              </ul>
			:<div>NO QUESTION</div>
      }
      </div>
    )
  }
}

function mapStateToProps ({ authedUser,allUsers,questions }) {
  return {
   authedUser,
   allUsers,
   questions,
  }
}

export default connect(mapStateToProps)(QuestionList)