import React, { Component } from 'react'
import { connect } from 'react-redux'

import { handleAddQuestion } from '../actions/questions'
import { Redirect, withRouter } from 'react-router-dom'

class NewQuestion extends Component {
  state = {
    optionOneText: '',
    optionTwoText: '',
    toHome: false
  }
  handleChange =(e) => {
    const name = e.target.name
    const text = e.target.value
    this.setState(() => ({
      [name]: text
    }))

  }
  
  handleSubmit =(e) => {
    e.preventDefault()

    const { optionOneText, optionTwoText } = this.state
    const { dispatch} = this.props
	dispatch(handleAddQuestion(optionOneText, optionTwoText));

    this.setState(() => ({
      toHome: true
    }))
  }
  
  render() {
    const { authedUser} = this.props;
	const { optionOneText, optionTwoText, toHome } = this.state
    if (toHome === true) {
      return <Redirect to='/' />
    }
    let avatar=authedUser.avatarURL===null?'./user-icon.png':authedUser.avatarURL;// 'https://tylermcginnis.com/would-you-rather/sarah.jpg';	
    return (
      	<div className='question-box'>
         
      		<h2>Create New Question</h2>
      		<div className="rTable">
           	<div className='rTableRow'>    
				
              	<div className="rowspanned rTableCell">			    
				 <div>
                  <br/>
                  <img
                    src={avatar}
                    className='avatar'
                    alt={`Avatar of ${authedUser.id}`}                
                  />
 	             </div>				
              	</div>

   			  	<div className="rTableCell">
				  <div className="text-left"><strong>Would you rather</strong></div>
                   <form onSubmit={this.handleSubmit}>
                    <div className='question-text-left-indent'> Option A:</div>
					<div>
                    <textarea
                      value={optionOneText}
                      className='question-text-input'
                      onChange={this.handleChange}
                      name='optionOneText'                    
                      rows='2'
                      maxLength='100'
                      placeholder=''
                      tabIndex='1'
                      required />
					</div>
					<div className='question-text-left-indent'> Option B:</div>
					<div>
                    <textarea
                      value={optionTwoText}
                      onChange={this.handleChange}
                      name='optionTwoText'
                      className='question-text-input'
                      rows='2'
                      maxLength='100'
                      placeholder=''
                      tabIndex='2'
                      required />
                    </div><div> 
						<button
                    		className='login-button'
                            disabled={!this.state.optionOneText||!this.state.optionTwoText}
                            onClick={(e)=>this.handleSubmit(e)}
						>
                                 Submit
                        </button>
                 	</div>
                  </form>
                  
				</div>
            </div>      
        	</div>
        
      </div>
    );
  }
}

function mapStateToProps ({authedUser}) {
 
  return {
    authedUser
  }
}

export default withRouter(connect(mapStateToProps)(NewQuestion))