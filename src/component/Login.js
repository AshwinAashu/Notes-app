import React, { Component} from 'react';
import  axios from 'axios';
import AuthenticateUser from './AuthenticateUser';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            pasw : "",
            loggedIn :  false,
        }
       this.emailHandler =  this.emailHandler.bind(this);
       this.pswHandler =  this.pswHandler.bind(this);
       this.submitHandler = this.submitHandler.bind(this);
    }
 


    //event handlers 
    emailHandler=(e)=>{
        e.preventDefault();
        this.setState({email : e.target.value});
    }

    
    pswHandler = (e) =>{
        e.preventDefault();
        this.setState({pasw : e.target.value});
    }

    submitHandler = (e)=> {
        e.preventDefault();
        //should call the authenticate function 
        //using axios  to see if we can get username directly
        const LOCAL_DATA= {
            user : this.state.email,
            password: this.state.pasw, 
        }
        //get response from the backend server  
        axios.get(`http://localhost:9090/api/credential/get?username=${LOCAL_DATA.user}`)
        .then(res => {
            if(LOCAL_DATA.password === res.data.password){
                //set loggedin to true
                this.setState({loggedIn: true});
                console.log(this.state.loggedIn);
                this.props.history.push( `/profile/${LOCAL_DATA.user}`, {state : {user: LOCAL_DATA.user, isLoggedIn: this.state.loggedIn }});
                AuthenticateUser.registerUser(LOCAL_DATA.user, LOCAL_DATA.password);
            }
            else alert("Email or password incorrect");
        })
        .catch((e)=> console.log(e));
    }
    render(){
        return(
            <div className="login">
                
                <h1>Login to continue</h1>
                <form onSubmit = {this.submitHandler}>
                    <input onChange = { this.emailHandler } type="email" value={this.state.email} className="emailform" placeholder="abc@xyz.com"/>  <br/>
                    <input onChange = {this.pswHandler} type="password" name="password" className="emailform" value={this.state.pasw} placeholder="Password"/> <br/>
                    <input type="submit" className="submitbutton" value="LogIn"/>
                </form>
                
                <p><a href="/register">Register</a> new user</p><br/>
                <p>Forgot password? <a href="/reset">reset password</a></p>
            </div>
        )
    }
}

export default Login