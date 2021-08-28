import Notes from './Notes';
import AddNote from './AddNote';
const NotesList =({notes, handleAddNote, handleDeleteNote}) =>{
    return(
        <div className="notes-list">
            {notes.map((note) =>(
                 <Notes 
                    id={note.id}
                    key= {note.id}
                    text={note.text}
                    date={note.timestamp}
                    username = {note.username}
                    handleDeleteNote={handleDeleteNote}
            />))}
           
            <AddNote handleAddNote={handleAddNote}/>
     
        </div>
    )
}
export default NotesList;