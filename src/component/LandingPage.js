import React, {useState} from 'react';
import {useHistory} from 'react-router';
import AuthenticateUser from './AuthenticateUser';
import NotesList from './NotesList';
import { nanoid } from 'nanoid';
import Search from './Search';

 const LandingPage = (user, isLoggedIn) =>{
    // const userState = props.location.state;
   
    const history = useHistory();
  
    const [notes, setNotes] = useState([
       
    ]);

    const deleteNote = (id) =>{
        const newNotes = notes.filter((note)=>note.id !== id);
        setNotes(newNotes);
    };

    const [searchText, setSearchText] = useState('');
	const [darkMode, setDarkMode] = useState(false);

    const addNote = (text) => {
        const date = new Date();
        const newNote ={
            id : nanoid(),
            text : text, 
            date : date.toDateString()    
        }
        const newNotes = [...notes, newNote];
        setNotes(newNotes);
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
        console.log(darkMode);
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