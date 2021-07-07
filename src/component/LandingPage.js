import React from 'react';
import {useHistory} from 'react-router';
import AuthenticateUser from './AuthenticateUser';


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
                <h1> Login Successful {userState.state.user} ! </h1>
                <button onClick =  {handleLogout} >Logout</button>
             </div>
        )
    
   
}

export  default LandingPage;