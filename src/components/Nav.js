import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = (props)=> {
  const authedUser=props.authedUser; 
  let avatar=authedUser===null?'./user-icon.png':authedUser.avatarURL;
  //avatar='./user-icon.png';
  return (
    <nav className='nav'>   
      <ul  className='nav-left'>
        <li>
          <NavLink to='/' exact activeClassName='active'>
            Home
          </NavLink>
        </li>       
        <li>
          <NavLink to='/add' activeClassName='active'>
            New Question
          </NavLink>
        </li>
      	<li>
          <NavLink to='/leaderboard' activeClassName='active'>
            Leader Board
          </NavLink>
        </li>
      </ul> 
      {authedUser&&(
      <ul className='nav-right'>
        <li> 
    		<div> Hello,{authedUser.name} </div> 
        </li>
        <li>
          <img
          src={avatar}
          className='avatar-small'
          alt={`Avatar of ${authedUser.name}`}                
          />
        </li>
        <li>
           	<a id="logoutlink" onClick={(e)=>{props.doLogout(e) }} ref={(ref)=>{this.ex = ref}} >Logout</a>           			
        </li>
      </ul>
      )}
    </nav>
  )
}
export default Nav 
