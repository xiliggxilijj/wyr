import React, { Component } from 'react'
import { connect } from 'react-redux'
import { formatDate } from '../utils/helpers'

import { handleAnswerQuestion } from '../actions/questions'
import { withRouter } from 'react-router-dom'

import PropTypes from 'prop-types';
export const MODE_LIST='LIST';
export const MODE_POLL='POLL';
export const MODE_QUEST='QUEST';

class Question extends Component {
  static propTypes = {
    question: PropTypes.object.isRequired,
  };
  state = {
    answer: ""
  }

  handleChange = event => {
    this.setState({ answer: event.target.value })
    //console.log("=======================Question handleChange:"+event.target.value);
  }

  handleSubmitAnswer = (e) => {
   
    e.preventDefault();
    
    const { dispatch, question, authedUser  } = this.props;
    dispatch(handleAnswerQuestion({
      		  authedUser:authedUser.id,
              qid: question.id,     
              answer: this.state.answer
            }));

  }
  handleViewPoll= (e) => {
   
    e.preventDefault();
    //const displayMode=this.props.display?this.props.display:MODE_POLL;
    this.props.history.push('/question/'+this.props.question.id);
  }
  
  render() {
    const { question, authedUser,allUsers, display } = this.props;
    const auhtor=allUsers[question.author]
    let avatar=auhtor.avatarURL===null?'./user-icon.png':auhtor.avatarURL;
    const displayMode=display?display:MODE_POLL;
   
  	
    return (
      	<div className='question-box'>
         
      		<h2>{displayMode===MODE_POLL?'Asked by '+auhtor.name+':': auhtor.name+' asks:'}</h2>
      		<div className="rTable">
           	<div className='rTableRow'>    
				
              	<div className="rowspanned rTableCell">			    
				 <div>
                  <br/>
                  <img
                    src={avatar}
                    className='avatar'
                    alt={`Avatar of ${question.author}`}                
                  />
 	             </div>				
              	</div>

   			  	<div className="rTableCell">
				  <div className="text-left"><strong>{displayMode===MODE_POLL?'Result:': 'Would you rather'}</strong>
                                             <span className='text-right'> ({formatDate(question.timestamp)} )</span></div>

                  
               	  { displayMode===MODE_POLL
                    ?(()=>{ 
						    const voteOne=question.optionOne.votes.includes(authedUser.id);
						    const voteTwo=question.optionTwo.votes.includes(authedUser.id);
                            console.log(" in poll ===> voteOne:"+voteOne+" voteTwo:"+voteTwo);

                            const optionOneVotes = question.optionOne.votes.length;
                            const optionTwoVotes = question.optionTwo.votes.length;
                            const totalVotes = optionOneVotes + optionTwoVotes;
                            const voteOnePercent= totalVotes === 0 ? 0 : Math.round(optionOneVotes / totalVotes * 100);
 							const voteTwoPercent= totalVotes === 0 ? 0 : Math.round(optionTwoVotes / totalVotes * 100)

                            const voteOneStats='('+optionOneVotes+' out of '+totalVotes+' or '+voteOnePercent+'%)';
							const voteTwoStats='('+optionTwoVotes+' out of '+totalVotes+' or '+voteTwoPercent+'%)';
							const voteOneStr=voteOne?'✓ Your vote A)':'';
							const voteTwoStr=voteTwo?'✓ Your vote B)':'';
							return 	<div>
                                      <div className='text-left-indent'> A) {question.optionOne.text}<br/>{voteOneStats}
											<span className={voteOne?'q-vote':'q-not-vote'}>{voteOneStr}</span></div>
                                      <div className='text-left-indent'> B) {question.optionTwo.text}<br/>{voteTwoStats} 
											<span className={voteTwo?'q-vote':'q-not-vote'}>{voteTwoStr}</span></div>
                                    </div>
						  }
					 )()
                    : (displayMode===MODE_LIST
                      ?<div>	
                        <div className='text-left-indent'>A) {question.optionOne.text}  </div>
                        <div className='text-left-indent'>B) {question.optionTwo.text}</div>

                        <div> <button
                                 className='login-button'
								 onClick={(e)=>this.handleViewPoll(e)}
							  >
                                  View Poll
                              </button>
                        </div>
                      </div>
                      :<div>	
                        <div className='text-left-indent'>
							<input type="radio" name="voteOption" value="optionOne"  onChange={this.handleChange}></input>
							A) {question.optionOne.text}
						</div>
                        <div className='text-left-indent'>
							<input type="radio" name="voteOption" value="optionTwo" onChange={this.handleChange}></input> 
							B) {question.optionTwo.text}
						</div>
                        <div> <button
                                  className='login-button'
								  disabled={!this.state.answer}
								  onClick={(e)=>this.handleSubmitAnswer(e)}
							  >
                                 Submit
                              </button>
                        </div>
                      </div>
                    )
                  }
				  
				</div>
            </div>      
        	</div>
        
      </div>
    );
  }
}

function mapStateToProps ({authedUser, questions, allUsers}, { id }) {
 
  return {
    authedUser,
    questions,
	allUsers
  }
}

export default withRouter(connect(mapStateToProps)(Question))