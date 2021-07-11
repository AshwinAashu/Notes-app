
import {useState} from 'react'
const AddNote= ({handleAddNote}) =>{


    const [noteText, setNoteText]= useState("");
    const characterLimit = 300;

    const handleNoteText = (e) =>{
        if(characterLimit-e.target.value.length > 0){
            setNoteText(e.target.value);
        }
    };
    const handleSaveNote = (e) =>{
        if(noteText.trim().length>0){
            handleAddNote(noteText);
            setNoteText('');
        }
    };

    return (
        <div className="note new">
            <textarea
                rows ='10'
                cols= '20'
                placeholder="Start a new note"
                value={noteText}
                onChange={handleNoteText}
            >
            </textarea>
            <div className="note-footer">
                <small>
                    {characterLimit - noteText.length} chars remaining
                </small>
               
                <i className="fas fa-rocket save-icon " onClick={handleSaveNote}></i>
                
            </div>

        </div>);
}
export default AddNote;
