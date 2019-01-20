import React from 'react'

const NotFound = (props) =>{
  const msg=props.msg?"Message:"+props.msg:'';
  return  <div>
            <h3>404 page not found</h3>
            <p>We are sorry but the page you are looking for does not exist.</p>
            <p>{msg}</p>
          </div>
}
export default NotFound