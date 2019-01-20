import React, { Component } from 'react'
import { connect } from 'react-redux'



class UserScore extends Component {
  
  render() {
    const { rank, user } = this.props;
    const numOfQ=user.questions.length;
    const numOfA=Object.keys(user.answers).length;
    const totalScore=numOfQ+numOfA;
    let avatar=user.avatarURL===null?'./user-icon.png':user.avatarURL;
     	
    return (
      	<div className='question-box'>
         
      		<h2>{user.name}</h2>
      		<div className="rTable">
           	<div className='rTableRow'>    
				
              	<div className="rowspanned rTableCell">			    
				 <div>
                  <br/>
                  <img
                    src={avatar}
                    className='avatar'
                    alt={`Avatar of ${user.id}`}                
                  />
 	             </div>				
              	</div>

   			  	<div className="rTableCell">
				  <div className="score"><strong>Answered questions:</strong> <span> {numOfA}</span></div>
 				  <div className="score"><strong>Created questions:</strong> <span> {numOfQ}</span></div>
                  <div className="score"><strong>Total Score: <span className='score-total'> {totalScore}</span></strong></div>
				</div>
				<div className="rTableCell">
                    <br/>
				  	<div className='rank'>
                      
                      <div className='score-label'>
                        Rank
                      </div>
					  <br/>
                      <div className='rank-font'>
						{rank}
                      </div>
                  	</div>
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

export default connect(mapStateToProps)(UserScore)