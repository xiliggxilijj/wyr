import React from 'react';


const UserSelect =(props)=>{
    const { selectedUserId,  allUsers} =props;
    let currentUserId=selectedUserId?selectedUserId:'none';
  	return (
    	<div >         	
		<select defautvalue={currentUserId} value ={currentUserId} onChange={(event)=>props.onUserSelect(event)} className='user-select'>             
               <option value='none'  disabled> &nbsp; &nbsp;Select User </option>
              {             
                Object.keys(allUsers).map(userId => (      
               		<option key={allUsers[userId].id} value={allUsers[userId].id}>{`\u00A0\u00A0\u00A0\u00A0\u00A0`}{allUsers[userId].name}</option>                
              	))
               }
			</select>
    		
		</div>
	);	
};

export default UserSelect
//UserSelect.propTypes = {
//    users: PropTypes.array.isRequired,
//    onUserSelect: PropTypes.func.isRequired,
//}

