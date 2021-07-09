import React from 'react';
import {useHistory} from 'react-router';
import AuthenticateUser from './AuthenticateUser';
import Notes from './Notes';


 const LandingPage = (props) =>{
    const userState = props.location.state;
    const history = useHistory();
  
    const handleLogout=(event)=>{   
        event.preventDefault();
        //re-route to login page and set loggedIn to false
        AuthenticateUser.logout();
        history.push(`/`, {state:{loggedIn: !userState.state.isLoggedIn}});
    }
    

   

        return (
            <div>
                <div className="controls">
                    <button onClick =  {handleLogout} >Logout</button>
                </div>
                <div className="notes-list">
                    <Notes/>
                    <Notes/>
                    <Notes/>
                    <Notes/>
                    <Notes/>
                </div>
                
             </div>
        )
    
   
}

export  default LandingPage;