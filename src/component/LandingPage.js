import React, {useState} from 'react';
import {useHistory} from 'react-router';
import AuthenticateUser from './AuthenticateUser';
import NotesList from './NotesList';
import Search from './Search';
import axios from 'axios'; 

 const  LandingPage = async ({user, isLoggedIn}) =>{
    
   
    const history = useHistory();  
    const [notes, setNotes] = useState([]);
    //retrieve user notes 
  
    const userNotes  = await axios.get(`http://localhost:9090/profile/notes?username=${user}`)
                            .then( response => console.log(response.data))
                            .catch(error => console.log(error));
   
    console.log(user);
    console.log(isLoggedIn);    
    // console.log(userNotes);
    



    const deleteNote = (id) =>{
        const newNotes = notes.filter((note)=>note.id !== id);
        setNotes(newNotes);
    };

    const [searchText, setSearchText] = useState('');
	const [darkMode, setDarkMode] = useState(false);

    //when you add a note
    const addNote = (text) => {
        const date = new Date();
        const newNote ={
            id : Math.random() * 100000,
            text : text, 
            timestamp : date.toDateString(),
            username : user
        }
        setNotes(userNotes);
        const newNotes = [...notes, newNote];
        const allNotes = [...newNotes, ...userNotes];
        setNotes(newNotes);
        //write axios post reqquest and parse the note and the user to the database
        axios.post(`http://localhost:9090/profile/notes`, {newNote})
            .then( res =>  console.log(res))
            .catch((e)=>console.log(e));   
    }


    const handleLogout=(event)=>{   
        event.preventDefault();
        //re-route to login page and set loggedIn to false
        AuthenticateUser.logout();
        // history.push(`/`, {state:{loggedIn: !userState.state.isLoggedIn}});
        history.push('/', {state:{loggedin : !isLoggedIn}});
    }
    
    const toggleDarkHandle = ()=>{
        let darkness = darkMode;
        setDarkMode(!darkness);
    }

   

        return (
            <div>
                {/* <div className={`${userState.state.isLoggedIn && "container-main"}`}> */}
                <div className={`${darkMode && "darkModeContainer"}`}>
                    <div className="container">
                        <div className="controls-banner">
                            <h1>Notes</h1>
                            <div className="controls">
                                <Search handleSearch = {setSearchText}/>
                                <i className="fas fa-moon" onClick = {toggleDarkHandle}></i>
                                <button onClick =  {handleLogout} >Logout</button>
                            </div>
                            
                            
                            
                        </div>
                        
                        <div className="notes-list">
                            <NotesList 
                                notes={notes.filter((note)=>note.text.toLowerCase().includes(searchText))}
                                handleDeleteNote={deleteNote}
                                handleAddNote = {addNote}
                            />
                        </div>
                    </div>
                 </div>
            </div>
        )
    
   
}

export  default LandingPage;