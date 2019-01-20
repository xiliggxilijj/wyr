import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { withRouter } from 'react-router-dom'
import UserSelect from './UserSelect'

class Login extends Component {
   state = {
    //toHome: false,
    selectedUserId:''
  }

  handleSubmit = (e) => {
   
    e.preventDefault();

    const { selectedUserId } = this.state;
    const { dispatch, allUsers } = this.props;
  
    if(selectedUserId&&selectedUserId!=='none'){
      const selectUser=allUsers[selectedUserId];
      if(selectUser) {
          //handleSetAuthedUser( selectUser)
          const id=selectUser.id;
          const name=selectUser.name;
          const avatarURL=selectUser.avatarURL;
          const loginUser={id,name,avatarURL};
          dispatch(setAuthedUser ( loginUser));
        
          this.props.history.push(`/`);

      }
    }
    //this.setState(() => ({    
    //  toHome: authedUser ? true : false,
    //}))    
  }
  onUserSelect=(e, user)=>{
    console.log("current user:"+(user?user.id:'none')+" selected:"+e.target.value);
    const selectedUserId = e.target.value

    this.setState(() => ({
      selectedUserId
    }))
  }
  render() {
    //const { toHome } = this.state
    const {allUsers}=this.props;
    //if (toHome === true) {
    //  return <Redirect to='/' />
   // }

    return (
      <div className='center'>
      <div className='login-box'>
        <div className='login-caption'>
        <h3 className='center-black'>Welcome to the Would You Rather App!</h3>
        <div className='center-black'>Please sign in to continue</div>
        </div>
        <form className='login-form' onSubmit={this.handleSubmit}>
			<div className='center'>
             <img
              src='./login-icon.png'
              className='login-img'
              alt='Login Icon'                
              />
			</div>
            <h3 className='center'>Sign in</h3>
			<UserSelect selectedUserId={this.state.selectedUserId} allUsers={allUsers}  onUserSelect={ this.onUserSelect}/>
         
          <button
            className='login-button'
            type='Sign in'
            disabled={this.state.selectedUserId === ''}>
              Sign in
          </button>
        </form>
      </div>
      </div>
    )
  }
}
function mapStateToProps ({ allUsers }) {
  return {
   	 	allUsers:allUsers
  }
}
export default withRouter(connect(mapStateToProps)(Login))