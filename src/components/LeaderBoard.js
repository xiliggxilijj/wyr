import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserScore from './UserScore'

class LeaderBoard extends Component {
  totalScore =(user)=> {
   return user.questions.length+ Object.keys(user.answers).length
  }
  render() {
    const  { allUsers} = this.props;
    const uidList = Object.keys(allUsers).sort((a,b) => this.totalScore(allUsers[b]) - this.totalScore(allUsers[a]));
 
	return (
      <div className='dashboard-list'>
      <ul >
        {uidList.map((id , index)=> (
          <li key={id}>
            <UserScore
              id={id}
              rank={index+1}
              user={allUsers[id]}
		    />
          </li>
        ))}
      </ul>
	  </div>
    )
  }
}

function mapStateToProps ({ allUsers }) {
  return {
   allUsers,  
  }
}

export default connect(mapStateToProps)(LeaderBoard)