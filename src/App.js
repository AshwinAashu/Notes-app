import React, {useState} from 'react';
import './App.css';
import Login from './component/Login';
import LandingPage from './component/LandingPage';
import {BrowserRouter as Router, Route, Switch }  from 'react-router-dom';
import Register from './component/Register';
import Reset from './component/Reset';



const App = () => {
  const [user, setUser] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
 

  const handleEmail = (emailId) =>{
    setUser(emailId);
  }

  const handleLogin = (islogtrue) => {
    setLoggedIn(islogtrue);
  }
  
    return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
          <Route exact path="/" 
            component = { () => <Login emailHandler={handleEmail} loginHandler={handleLogin} />} 
          />  



          <Route exact path="/register" component={Register}/>
         
         
           
           <Route 
           path ="/profile/:name"
            component = { () =>  <LandingPage user= {user} isLoggedIn={loggedIn} />}
           />

          <Route exact path="/reset" component={Reset}/>
          

          </Switch>
        </Router>
      


      </header>
    </div>
  );
}


export default App;
