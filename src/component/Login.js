import React, {useState} from 'react';
import  axios from 'axios';
import {useHistory} from 'react-router';
import AuthenticateUser from './AuthenticateUser';


const Login = ({emailHandler, loginHandler}) => {
   let [email, setEmail] =  useState('');
   let [password, setPassword] = useState('');
   let [loggedIn, setLoggedIn] = useState(false);

    const history = useHistory();
    //event handlers 
    const userHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
    };


    const isLogin = () =>{
        setLoggedIn(true);
        loginHandler(loggedIn);
    };

    const submitHandler = (e)=> {
        e.preventDefault();
        //get response from the backend server  
        axios.get(`http://localhost:9090/api/credential/get?username=${email}`)  
        .then(res => {
            if(password === res.data.password){
                //set loggedin to true
                isLogin();
                emailHandler(email);
                history.push( `/profile/${email}`);
                AuthenticateUser.registerUser(email,password);
            }
            else alert("Email or password incorrect");
        })
        .catch((e)=> console.log(e));
    }

    return(
            <div className="login">
                
                <h1>Login to continue</h1>
                <form onSubmit = {submitHandler}>
                    <input onChange={userHandler} type="email" value={email} className="emailform" placeholder="abc@xyz.com"/>  <br/>
                    <input onChange= {passwordHandler} type="password" name="password" className="emailform" value={password} placeholder="Password"/> <br/>
                    <input type="submit" className="submitbutton" value="LogIn"/>
                </form>
                
                <p><a href="/register">Register</a> new user</p><br/>
                <p>Forgot password? <a href="/reset">reset password</a></p>

              
            </div>
            
        )
    
}

export default Login