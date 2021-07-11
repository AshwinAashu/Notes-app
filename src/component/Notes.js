
const Notes = ({id, text, date, handleDeleteNote})=>{
    return ( 
        <div className="note">
           <span>{text}</span>
            <div className="note-footer">    
                <small>{date}</small>
                <i className="fas fa-trash-alt" onClick={()=>handleDeleteNote(id)}></i>
            </div>

        </div>
    )
}

export default Notes;