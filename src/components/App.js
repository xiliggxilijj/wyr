import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import LoadingBar from 'react-redux-loading'
import Nav from './Nav'
import { setAuthedUser } from '../actions/authedUser'
import QuestionBoard from './QuestionBoard'
import LeaderBoard from './LeaderBoard'
import QuestionPage from './QuestionPage'
import NotFound from './NotFound'
import NewQuestion from './NewQuestion'
class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  doLogout = (e) => {
    e.preventDefault();
    this.props.dispatch(setAuthedUser(null))
  
  }
  render() {
    const  authedUser=this.props.authedUser;
     	
    return (
      <Router>
        <Fragment>
          <LoadingBar />
          <div className='container'>
            <div>
            <Nav authedUser={authedUser} doLogout={this.doLogout}/>
            <br/> <br/><br/>
            </div>
            <div>
            {this.props.loading === true
              ? null
              :(authedUser!==null)?<div>
                                   <Switch>
                                    <Route path='/' exact component={QuestionBoard} />
 									<Route path='/add' component={NewQuestion} />
									<Route path='/leaderboard' component={LeaderBoard} />
									<Route path='/question/:id' component={QuestionPage} />
									<Route component={NotFound} />
                                   </Switch>
               					   </div>
								:<div>
									<Login />									
               					 </div>
				
            }
            </div>
          </div>
        </Fragment>
      </Router>
    )
  }
}

function mapStateToProps ({ authedUser },props) {
  return {
    authedUser:authedUser,
   
  }
}

export default connect(mapStateToProps)(App)